import React from 'react'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home/Home'
import Header from './Pages/Shareed/Header/Header'
import NotFound from './Pages/NotFound/NotFound'
import Footer from './Pages/Shareed/Footer/Footer'
import Appoinment from './Pages/Home/Appoinment/Appoinment'
import Login from './Pages/Login/Login/Login'
import About from './Pages/Home/About/About'
import Services from './Pages/Home/Services/Services'
import Doctors from './Pages/Home/Doctors/Doctors'
import SingleDoctor from './Pages/SingleDoctor/SingleDoctor/SingleDoctor'
import AuthProvider from './contexts/AuthProvider'
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute'
import SingleService from './Pages/SingleService/SingleService'


const App = () => {
  return (
    <>
      <AuthProvider>
        <Router>
        <Header/>
        <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <PrivateRoute path="/SingleServices/:serveeId">
              <SingleService/>
            </PrivateRoute>
            <Route path="/doctors">
              <Doctors />
            </Route>
          <PrivateRoute path="/singledoctor/:singleId">
            <SingleDoctor/>
          </PrivateRoute>
            <PrivateRoute path="/appoinment">
              <Appoinment />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
        </Switch>
        <Footer/>
      </Router>
      </AuthProvider>
    </>
  )
}

export default App

// https://i.ibb.co/ch43ddf/doctor-1.jpg
// https://i.ibb.co/LrGfgDJ/doctor-2.jpg
// https://i.ibb.co/0jFyP1Z/doctor-3.jpg
// https://i.ibb.co/xCj7HZX/doctor-4.jpg
// https://i.ibb.co/vz87WbW/doctor-5.jpg
// https://i.ibb.co/HY9TVfm/doctor-6.jpg
// https://i.ibb.co/znpD9RT/doctor-7.jpg
// https://i.ibb.co/y5krZz2/doctor-8.jpg
// https://i.ibb.co/Z8LDsjH/doctor-9.jpg
// https://i.ibb.co/wgnQrX5/doctor-10.jpg
// https://i.ibb.co/C1F5K5n/doctor-11.jpg
// https://i.ibb.co/rfm0XFL/doctor-12.jpg
// https://i.ibb.co/r6wzQCr/doctor-13.jpg
