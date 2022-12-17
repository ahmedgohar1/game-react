import logo from './logo.svg';
import './App.css';
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider,Navigate } from 'react-router-dom';
import Latout from './components/layout/Latout';
import Register from './components/Register/Register';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Login from './components/Login/Login';
import '@fortawesome/fontawesome-free/css/all.min.css'
import "./index.css"
import Home from './components/Home/Home';
import Joi from 'joi';
import { useState } from 'react';
import jwt_decode from "jwt-decode";
import Details from './components/Details/Details';
import All from './components/All/All';
import Pc from './components/palatforms/Pc';
import Palatrowser from './components/palatforms/Palatrowser';
import Releasedate from './components/Sort_by/Releasedate';
import Popularity from './components/Sort_by/Popularity';
import Alphabetical from './components/Sort_by/Alphabetical';
import Relevance from './components/Sort_by/Relevance';
import Racing from './components/Categories/Racing';
import Sports from './components/Categories/Sports';
import Social from './components/Categories/Social';
import Shooter from './components/Categories/Shooter';
import Openworld from './components/Categories/Openworld';
import Zombie from './components/Categories/Zombie';
import Fantasy from './components/Categories/Fantasy';
import Action from './components/Categories/Action';
import Actiontwo from './components/Categories/Actiontwo';
import Flight from './components/Categories/Flight';
import Battleroyale from './components/Categories/Battleroyale';
import Notfound from './components/All/Notfound/Notfound';



function App() {
const [userdata, setdata] = useState(null)
const routers =createBrowserRouter([
  {path:"/",element:<Latout userdata={userdata}  logout={logout}/>,errorElement:<Notfound/>,children:[
    {index:true,element:<Register/> },
    {path:"login" ,element:<Login  saveUserData={ saveUserData}/>},
    {path:"home" ,element:<Home/>},
    {path:"details/:id" ,element:<Details/>},
    {path:"all" ,element:<All/>},
    {path:"pc" ,element:<Pc/>},
    {path:"browser" ,element:<Palatrowser/>},
    {path:"releasedate" ,element:<Releasedate/>},
    {path:"popularity" ,element:<Popularity/>},
    {path:"alphabetical" ,element:<Alphabetical/>},
    {path:"relevance" ,element:<Relevance/>},
    {path:"racing" ,element:<Racing/>},
    {path:"sports" ,element:<Sports/>},
    {path:"social" ,element:<Social/>},
    {path:"shooter" ,element:<Shooter/>},
    {path:"open-world" ,element:<Openworld/>},
    {path:"zombie" ,element:<Zombie/>},
    {path:"fantasy" ,element:<Fantasy/>},
    {path:"action-rpg" ,element:<Action/>},
    {path:"action" ,element:<Actiontwo/>},
    {path:"flight" ,element:<Flight/>},
    {path:"battle-royale" ,element:<Battleroyale/>},
  ]}
])


function saveUserData(){
  let eecoded= localStorage.getItem('user-token');
  let dncoded= jwt_decode(eecoded);
  setdata(dncoded);
}

function logout(){
   localStorage.removeItem('user-token');
   setdata(null);
  return <Navigate to='/login'  replace={true}/>
  
}

  return <>
  <RouterProvider router={routers}/>
  </>
}

export default App;
