import React, { useContext, useState, useEffect } from 'react'
import { AppContext, FormsContext, useScreenSize } from '../App'

export default function UpdateDeviceForm(props) {
  const { devices, getDevices } = useContext(AppContext)
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

  useEffect(() => {
    const device = devices.find(device => device.id === props.match.params.id)

    setDeviceType(device.type)
    setDeviceName(device.name)
    setDeviceRoom(device.room)
    if (device.exp !== '') {
      setBatteryExpMonth(device.exp.slice(0, 3))
      setBatteryExpYear(device.exp.slice(-4))
    }
  }, [devices, props.match.params.id])

  const updateDevice = () => {
    const device = {
      id: props.match.params.id,
      type: deviceType,
      name: deviceName,
      room: deviceRoom,
      exp: batteryExpMonth + ' ' + batteryExpYear
    }

    localStorage.setItem(`device-${props.match.params.id}`, JSON.stringify(device))
    getDevices()

    setDeviceType('')
    setDeviceName('')
    setDeviceRoom('')
    setBatteryExpMonth('')
    setBatteryExpYear('')

    console.log('localStorage:', localStorage)
  }

  return (
    <div className="form">
      { screenSize > 666 ? 
      <>
      <div className="input-group">
        <label className="input-group-text bg-white" htmlFor="device-type">Device type:</label>
        <select className="form-select" id="device-type" value={deviceType} onChange={handleDeviceType}>
          <option></option>
          { deviceTypes.map(deviceType => <option key={deviceType} value={deviceType}>{deviceType}</option>) }
        </select>
      </div>

      <div className="input-group">
        <label className="input-group-text bg-white" htmlFor="device-name">Device name (optional):</label>
        <input type="text" className="form-control" id="device-name" value={deviceName} onChange={handleDeviceName}></input>
      </div>

      <div className="input-group">
        <label className="input-group-text bg-white" htmlFor="device-room">Room this device is in:</label>
        <select className="form-select" id="device-room" value={deviceRoom} onChange={handleDeviceRoom}>
          <option></option>
          { roomTypes.map(roomType => <option key={roomType} value={roomType}>{roomType}</option>) }
        </select>
      </div>

      <div className="input-group">
        <label className="input-group-text bg-white" htmlFor="battery-exp">Battery expiration date (optional):</label>
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
      <label className="input-group-text bg-white" htmlFor="device-type">Device type:</label>
      <select className="form-select" id="device-type" value={deviceType} onChange={handleDeviceType}>
        <option></option>
        { deviceTypes.map(deviceType => <option key={deviceType} value={deviceType}>{deviceType}</option>) }
      </select>

      <label className="input-group-text bg-white" htmlFor="device-name">Device name (optional):</label>
      <input type="text" className="form-control" id="device-name" value={deviceName} onChange={handleDeviceName}></input>

      <label className="input-group-text bg-white" htmlFor="device-room">Room this device is in:</label>
      <select className="form-select" id="device-room" value={deviceRoom} onChange={handleDeviceRoom}>
        <option></option>
        { roomTypes.map(roomType => <option key={roomType} value={roomType}>{roomType}</option>) }
      </select>

      <label className="input-group-text bg-white" htmlFor="battery-exp">Battery expiration date (optional):</label>
      <select className="form-select" id="battery-exp-month" value={batteryExpMonth} onChange={handleBatteryExpMonth}>
        <option>Month</option>
        { months.map(month => <option key={month} value={month}>{month}</option>) }
      </select>
      <select className="form-select" id="battery-exp-year" value={batteryExpYear} onChange={handleBatteryExpYear}>
        <option>Year</option>
        { years.map(year => <option key={year} value={year}>{year}</option>) }
      </select>
      </>
      }

      <div className="d-grid">
        <button className="btn btn-lg btn-primary" onClick={updateDevice}>Update Device</button>
        </div>
    </div>
  )
}
