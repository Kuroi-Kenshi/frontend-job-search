import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { getData } from '@utils/network'
import Header from '@components/Header'
import SearchVacancy from '@containers/SearchVacancy/SearchVacancy';
import FavoritePage from '@containers/FavoritePage/FavoritePage';

import s from './App.module.sass';


function App() {
    const [dataVacancies, setDataVacancies] = useState([])
    const [loaderIsActive, setLoaderIsActive] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const {location, schedule, employment, experience, salary} = useSelector(state => state.formDataReducer)

    const getVacanciesData = () => {
        (async () => {
            setLoaderIsActive(true)
            setDataVacancies([])
            try {
                const vacanciesList = await getData(
                    `https://api.hh.ru/vacancies?text=frontend%20${location}
                        &experience=${experience}
                        &schedule=${schedule}
                        &employment=${employment}
                        &salary=${salary}
                        &only_with_salary=true&per_page=100`
                )

                if(vacanciesList.items.length === 0){
                    console.log(vacanciesList);
                    setNotFound(true)
                    setLoaderIsActive(false)
                } else {
                    setNotFound(false)
                    vacanciesList.items.forEach( async (el) => {
                        const data = await getData(`https://api.hh.ru/vacancies/${el.id}`)
                        setDataVacancies(prev => [...prev, data])
                        setLoaderIsActive(false)
                      })
                }

            } catch (error) {
                console.error(error);
            }
            
        })()
    }

    useEffect(() => {
        getVacanciesData()
    }, [location, schedule, employment, experience, salary])

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
