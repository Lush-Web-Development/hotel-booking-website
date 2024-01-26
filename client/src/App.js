import React from 'react'
import Navigation from './components/Navigation.js';
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import RoomsList from './screens/Rooms.js';
import Register from './screens/Register.js';
import Login from './screens/Login.js';
import Account from './screens/Account.js';
import BookRoom from './screens/BookRoom.js';

const App = () => {
  return (
    <div>
        <Navigation/>
        <Routes>
          <Route path='/' exact element={<HomeScreen/>}/>
          <Route path='/rooms' element={<RoomsList/>} />
          <Route path='/rooms/:id' element={<BookRoom/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/account' element={<Account/>} />
        </Routes>
    </div>
  )
}

export default App
