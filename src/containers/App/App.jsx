import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '@components/Header'
import routesConfig from '@routes/routesConfig'

import s from './App.module.sass';

function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <main className={s.wrapper}>
          <Switch>
              {routesConfig.map(({path, exact, component}, idx) => (
                <Route 
                  key={idx}
                  path={path} 
                  exact={exact}
                  component={component} />
              ))}
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
