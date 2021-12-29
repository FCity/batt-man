import React, { createContext, useState, useEffect, useMemo } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import DevicesTable from './components/DevicesTable'
import AddDeviceForm from './components/AddDeviceForm'
import UpdateDeviceForm from './components/UpdateDeviceForm'
import About from './components/About'
import './App.css'

// Contexts
export const AppContext = createContext(null)
export const FormsContext = createContext(null)

export default function App() {
  // Constants
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
  const deviceTypes = ['Remote', 'Pedal', 'Handheld', 'Flashlight', 'Watch', 'Clock', 'Other']
  const roomTypes = ['Living Room', 'Kitchen', 'Bedroom', 'Bathroom', 'Garage', 'Office', 'Other']

  // State
  const [devices, setDevices] = useState([])
  const [darkTheme, setDarkTheme] = useState(false)

  // Get Devices
  useEffect(() => {
    getDevices()
  }, [])

  const getDevices = () => {
    let storedDevices = []

    for (let item in localStorage) {
      if (/device/.test(item)) {
        storedDevices.push(JSON.parse(localStorage.getItem(item)))
      }
    }

    setDevices(storedDevices)

    console.log('localStorage:', localStorage)
    console.log('state:', devices)
  }

  // Context Values
  const data = useMemo(() => ({
    devices, setDevices, getDevices,
    darkTheme
  }), [devices, darkTheme])

  const options = { months, years, deviceTypes, roomTypes }

  const themeStyle = () => {
    return {
      backgroundColor: darkTheme ? '#000' : '#fff',
      color: darkTheme ? '#fff' : '#000'
    }
  }

  const themeBtnStyle = () => {
    if (darkTheme) return 'btn-light'
    else return 'btn-dark'
  }

  return (
    <Router>
      <div className="container-fluid" style={themeStyle()}>
        <div className="row">
          <div className="col-11">
            <h1 className="display-1">BattMan</h1>
          </div>
          <div className="col-1">
            <button
              className={'btn ' + themeBtnStyle()}
              title="Toggle Dark Theme"
              onClick={() => setDarkTheme(prev => !prev)}>
                { darkTheme ?
                <i className="fa fa-sun-o"></i>
                :
                <i className="fa fa-moon-o"></i>
                }
              </button>
          </div>
        </div>

        <nav>
          <Link to="/" className="btn btn-light" title="Homepage">Home</Link>
          <Link to="/table/devices" className="btn btn-light" title="Device and Room Tables">View Devices</Link>
          <Link to="/forms/add/device" className="btn btn-light" title="Add Room or Device">Add Device</Link>
          <Link to="/about" className="btn btn-light" title="About Page">About</Link>
        </nav>

        <div className="container">
          <AppContext.Provider value={data}>
            <Route exact path="/" component={Home} />
            <Route path="/table/devices" component={DevicesTable} />
            <FormsContext.Provider value={options}>
              <Route path="/forms/add/device" component={AddDeviceForm} />
              <Route path="/forms/update/device/:id" component={UpdateDeviceForm} />
            </FormsContext.Provider>
            <Route path="/about" component={About} />
          </AppContext.Provider>
        </div>
      </div>
    </Router>
  )
}
