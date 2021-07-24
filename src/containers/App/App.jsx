import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { getData } from '@utils/network'
import { getRequestUrl } from '@utils/getRequestUrl'
import { setInfoMessagesStatus } from '@store/actions'
import Header from '@components/Header'
import SearchBar from '@components/SearchBar'
import SearchVacancy from '@containers/SearchVacancy/SearchVacancy';
import FavoritePage from '@containers/FavoritePage/FavoritePage';

import s from './App.module.sass';

function App() {
    const dispatch = useDispatch()
    const serachBarVisibility = useSelector(state => state.searchBarVisibilityReducer.visible)
    const [dataVacancies, setDataVacancies] = useState([])
    const [loaderIsActive, setLoaderIsActive] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const formData = useSelector(state => state.formDataReducer)

    const getVacanciesData = () => {
        setLoaderIsActive(true)
        dispatch(setInfoMessagesStatus({ notFound: false }))
        setDataVacancies([])
        const url = getRequestUrl(formData)
        getData(url)
            .then(data => {
                if (data.found === 0) {
                    setLoaderIsActive(false)
                    // setNotFound(true)
                    dispatch(setInfoMessagesStatus({ notFound: true }))
                } else {
                    dispatch(setInfoMessagesStatus({
                        errorApi: { status: false }
                    }))
                    data.items.forEach((el) => {
                        const data = getData(`https://api.hh.ru/vacancies/${el.id}`)
                        data.then(data => {
                            if (data) {
                                setDataVacancies(prev => [...prev, data])
                            }
                        })
                            .catch(err => {
                                console.error(`Could not fetch, ${err}`);
                            })
                    })
                }
            })
            .catch(error => {
                console.error(`Could not fetch, ${error}`);
                dispatch(setInfoMessagesStatus({
                    errorApi: { status: true, type: error }
                }))
            })
            .finally(() => {
                setLoaderIsActive(false)
            })
    }

    useEffect(() => {
        getVacanciesData()
    }, [formData])

    return (
        <>
            <BrowserRouter >
                <Header />
                <main className={s.wrapper}>
                    {serachBarVisibility && <SearchBar />}
                    <Switch>
                        <Route path='/' exact render={() => <SearchVacancy dataVacancies={dataVacancies} loaderIsActive={loaderIsActive} notFound={notFound} />} />
                        <Route path='/favorites' exact component={FavoritePage} />
                    </Switch>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
