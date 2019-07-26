import React from 'react';
import FormUser from './components/User'
import Header from './components/Header'
import Login from './components/Login'
import AdminForm from './components/Admin'
import AdminHeader from './components/AdminHeader'
import Employee from './components/AddEmployee'
import SearchTable from './components/SearchTable'
import { Container } from 'semantic-ui-react';
import Routes from './components/Route'
// import mainHeader from './components/mainHeader';
import Main from './components/Main';
import Com from './components/Com'
import Radio from './components/Radio'
import Antenna from './components/Antenna';
import Network from './components/Networks'


function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
