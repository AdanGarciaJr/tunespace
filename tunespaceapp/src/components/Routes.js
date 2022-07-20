import React from 'react';
import { Routes,Route  } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Login from '../pages/Login';
import Create from '../pages/Create';
import UserForm from '../pages/UserForm';
import GroupForm from '../pages/GroupForm'
import UserAccount from '../pages/UserAccount';
import About from '../pages/About';

const Routers = () => {
    return(
        <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route path='/LogIn' element={<Login/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Profile' element={<Profile/>} />
            <Route path='/Create' element={<Create/>} />
            <Route path='/UserForm' element={<UserForm/>} />
            <Route path='/GroupForm' element={<GroupForm/>} />
            <Route path='/UserAccount' element={<UserAccount/>} />
            <Route path='/About' element={<About/>} />
        </Routes>
    );
}
export default Routers;