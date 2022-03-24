import React, { useContext, useState } from 'react'
import { AppContext, FormsContext, useScreenSize } from '../App'
import { v4 as uuid } from 'uuid'

export default function AddDeviceForm() {
  const { setDevices, darkTheme, themeStyle } = useContext(AppContext)
  const { months, years, deviceTypes, roomTypes } = useContext(FormsContext)

  const screenSize = useScreenSize()

  const [deviceType, setDeviceType] = useState('')
  const [deviceName, setDeviceName] = useState('')
  const [deviceRoom, setDeviceRoom] = useState('')
  const [batteryExpMonth, setBatteryExpMonth] = useState('')
  const [batteryExpYear, setBatteryExpYear] = useState('')

  const handleDeviceType = e => setDeviceType(e.target.value)
  const handleDeviceName = e => setDeviceName(e.target.value)
  const handleDeviceRoom = e => setDeviceRoom(e.target.value)
  const handleBatteryExpMonth = e => setBatteryExpMonth(e.target.value)
  const handleBatteryExpYear = e => setBatteryExpYear(e.target.value)

  const addDevice = () => {
    const device = {
      id: uuid(),
      type: deviceType,
      name: deviceName,
      room: deviceRoom,
      exp: batteryExpMonth + ' ' + batteryExpYear
    }

    setDevices(prevDevices => [...prevDevices, device])
    localStorage.setItem(`device-${device.id}`, JSON.stringify(device))

    setDeviceType('')
    setDeviceName('')
    setDeviceRoom('')
    setBatteryExpMonth('')
    setBatteryExpYear('')
  }

  const themeBootstrap = () => {
    if (darkTheme) return ''
    else return 'bg-white'
  }

  return (
    <div className="form">
      { screenSize > 666 ? 
      <>
      <div className="input-group">
        <label className={'input-group-text ' + themeBootstrap()} style={themeStyle()} htmlFor="device-type">Device type:</label>
        <select className="form-select" id="device-type" value={deviceType} onChange={handleDeviceType}>
          <option></option>
          { deviceTypes.map(deviceType => <option key={deviceType} value={deviceType}>{deviceType}</option>) }
        </select>
      </div>

      <div className="input-group">
        <label className={'input-group-text ' + themeBootstrap()} style={themeStyle()} htmlFor="device-name">Device name (optional):</label>
        <input type="text" className="form-control" id="device-name" value={deviceName} onChange={handleDeviceName}></input>
      </div>

      <div className="input-group">
        <label className={'input-group-text ' + themeBootstrap()} style={themeStyle()} htmlFor="device-room">Room this device is in:</label>
        <select className="form-select" id="device-room" value={deviceRoom} onChange={handleDeviceRoom}>
          <option></option>
          { roomTypes.map(roomType => <option key={roomType} value={roomType}>{roomType}</option>) }
        </select>
      </div>

      <div className="input-group">
        <label className={'input-group-text ' + themeBootstrap()} style={themeStyle()} htmlFor="battery-exp">Battery expiration date (optional):</label>
        <select className="form-select" id="battery-exp-month" value={batteryExpMonth} onChange={handleBatteryExpMonth}>
          <option>Month</option>
          { months.map(month => <option key={month} value={month}>{month}</option>) }
        </select>
        <select className="form-select" id="battery-exp-year" value={batteryExpYear} onChange={handleBatteryExpYear}>
          <option>Year</option>
          { years.map(year => <option key={year} value={year}>{year}</option>) }
        </select>
      </div>
      </>
      :
      <>
      <label className={'input-group-text ' + themeBootstrap()} style={themeStyle()} htmlFor="device-type">Device type:</label>
      <select className="form-select" id="device-type" value={deviceType} onChange={handleDeviceType}>
        <option></option>
        { deviceTypes.map(deviceType => <option key={deviceType} value={deviceType}>{deviceType}</option>) }
      </select>

      <label className={'input-group-text ' + themeBootstrap()} style={themeStyle()} htmlFor="device-name">Device name (optional):</label>
      <input type="text" className="form-control" id="device-name" value={deviceName} onChange={handleDeviceName}></input>

      <label className={'input-group-text ' + themeBootstrap()} style={themeStyle()} htmlFor="device-room">Room this device is in:</label>
      <select className="form-select" id="device-room" value={deviceRoom} onChange={handleDeviceRoom}>
        <option></option>
        { roomTypes.map(roomType => <option key={roomType} value={roomType}>{roomType}</option>) }
      </select>

      <label className={'input-group-text ' + themeBootstrap()} style={themeStyle()} htmlFor="battery-exp">Battery expiration date (optional):</label>
      <div className="row">
        <div className="col-6">
          <select className="form-select" id="battery-exp-month" value={batteryExpMonth} onChange={handleBatteryExpMonth}>
            <option>Month</option>
            { months.map(month => <option key={month} value={month}>{month}</option>) }
          </select>
        </div>
        <div className="col-6">
          <select className="form-select" id="battery-exp-year" value={batteryExpYear} onChange={handleBatteryExpYear}>
            <option>Year</option>
            { years.map(year => <option key={year} value={year}>{year}</option>) }
          </select>
        </div>
      </div>
      </>
      }

      <div className="d-grid">
        <button className="btn btn-lg btn-primary" onClick={addDevice}>Add Device</button>
      </div>
    </div>
  )
}
