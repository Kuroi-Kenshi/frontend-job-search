import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { getData } from '@utils/network'
import { getRequestUrl } from '@utils/getRequestUrl'
import Header from '@components/Header'
import SearchVacancy from '@containers/SearchVacancy/SearchVacancy';
import FavoritePage from '@containers/FavoritePage/FavoritePage';

import s from './App.module.sass';

function App() {
    const [dataVacancies, setDataVacancies] = useState([])
    const [loaderIsActive, setLoaderIsActive] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const formData = useSelector(state => state.formDataReducer)

    const getVacanciesData = () => {
        setLoaderIsActive(true)
        setNotFound(false)
        setDataVacancies([])

        const url = getRequestUrl(formData)
        getData(url).then(data => {
            if (data.items.length === 0) {
                setLoaderIsActive(false)
                setNotFound(true)
            } else {
                data.items.forEach((el) => {
                    const data = getData(`https://api.hh.ru/vacancies/${el.id}`)
                    data.then(data => {
                        if (data) {
                            setDataVacancies(prev => [...prev, data])
                        }
                    })
                })
                setLoaderIsActive(false)
            }
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
