import React from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import styles from './App.module.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Login from './components/Login/Login';

import { DataStorageMethods, DataStorage } from './utils/DataStorage';


function App() {
  const dataStorageMethods: DataStorage = new DataStorageMethods();


  return (
    <HashRouter>
      <div>
        <Header />
        <main className={ styles.main } >
          <Route exact path='/' component={ Main } />
          <Route path='/news' component={ News } />
          <Route
            path='/profile'
            render={ () => (
              dataStorageMethods.getFromLocalStorage('isAccessAllowed') === 'true' ? (
                <Redirect to='/profile' />
                ) : (
                <Redirect to='/login' />
                )
              )}
          />
          <Route path='/login' component={ Login } />
          <Route path='/profile' component={ Profile } />
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
