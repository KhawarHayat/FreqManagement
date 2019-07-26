import React from 'react'
import decode from 'jwt-decode'
import Axios from 'axios'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Login from './Login';
import AddEmployee from './AddEmployee'
import Header from './Header';
// import mainHeader from './mainHeader'
import SearchTable from './SearchTable';
import Main from './Main';
import Auth from './AUTH'
import ManageConfig from './ManageConfig'
import Com from './Com'
import Radio from './Radio';
import Antenna from './Antenna';
import Network from './Networks';

var IsLogin = false
       
   const LoggedIn = () => {
       if(localStorage.getItem("token")){
         const data = decode(localStorage.getItem("token"))
         Axios.post(`http://localhost:4000/check`,{token : localStorage.getItem('token')})
         .then((res) => {
            //  console.log(res.data)
            //  console.log(data)
           if(data.password == res.data.password){
            console.log('As')
                 IsLogin = true
           }
           else{   
            console.log('Assss')
             IsLogin = false
           }
         })
        }
        else{
            IsLogin = false
        }
       }
     

       LoggedIn() 
 
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
    {...rest}
    render={props =>
    IsLogin ? (
    <Component {...props} />
    ) : (
    <Redirect
    to="/"
    />
    )
    }
    />
    );



const Routes = () => {
    return (
<Router>
    
    <Route exact path='/' component={Login} />
    <Route path='/addEmployee' component={AddEmployee} />
    <Route path='/search' component={SearchTable} />
    <PrivateRoute  path='/config/managefreq' component={Main} />
    <PrivateRoute  path='/config/managecom' component={Com} />
    <PrivateRoute  path='/config/manageradio' component={Radio} />
    <PrivateRoute  path='/config/manageantenna' component={Antenna} />
    <PrivateRoute exact path='/config' component={ManageConfig} />  
    <PrivateRoute exact path='/manageNets' component={Network} />  
    </Router>
    )
    
}

export default Routes