
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
// import myDatabase from './My-database/myDatabase.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import { createContext, useState } from 'react';
import Home from './Components/Header/HomePage/Home';
import NotFound from './Components/Header/Not-Found/NotFound';
import Services from './Components/Service-Page/Services';
import AdminPage from './Components/Admin-Page/AdminPage';
import Login from './Components/LoginPage/Login';
import PrivateRoute from './Components/Private-Route/PrivateRoute';
import ServiceDetails from './Components/Service-Page/ServiceDetails';


// cotext create context
export const AuthContext=createContext()
function App() {
  const[user,setUser]=useState({})
  
  return (
    <AuthContext.Provider value={[user,setUser]}>
    <Router>
    <Header/>
     <Switch>
     <Route exact path="/home">
    <Home/>
     </Route>
     <Route exact path="/service">
    <Services/>
     </Route>
     <Route exact path="/service/:servicekey">
    <ServiceDetails/>
     </Route>
     <Route exact path="/login">
    <Login/>
     </Route>
     <PrivateRoute exact path="/dashboard">
    <AdminPage/>
     </PrivateRoute>
     <Route exact path="/">
    <Home/>
     </Route>
     <Route exact path="*">
    <NotFound/>
     </Route>
     </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
