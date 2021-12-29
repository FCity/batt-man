import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

export default function DevicesTable(props) {
  const { devices, setDevices, getDevices, darkTheme } = useContext(AppContext)
  
  const removeBattery = d => {
    const device = {
      id: d.id,
      type: d.type,
      name: d.name,
      room: d.room,
      exp: ''
    }

    localStorage.setItem(`device-${d.id}`, JSON.stringify(device))
    getDevices()
  }

  const deleteDevice = deviceId => {
    setDevices(prevDevices => prevDevices.filter(device => device.id !== deviceId))
    localStorage.removeItem(`device-${deviceId}`)
  }

  const themeStyle = () => {
    if (darkTheme) return 'bg-dark text-white'
    else return ''
  }

  return (
    <div className="devices-table">
      <h3>Devices:</h3>
        <table className={'table ' + themeStyle()}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Room</th>
              <th>Expires</th>
              { props.page !== 'home' &&
              <th>Actions</th>
              }
            </tr>
          </thead>
          <tbody>
            { devices && devices.map(device => (
            <tr key={device.id} className="device">
              <td>{device.type}</td>
              <td>{device.name || 'no name'}</td>
              <td>{device.room}</td>
              { device.exp ?
              <td className="exp">{device.exp}
                <span className="exp-tooltip">
                  <button
                    type="button"
                    className="btn btn-danger"
                    title="Remove Battery"
                    onClick={() => removeBattery(device)}>
                    Pop <i className="fa fa-battery"></i>
                  </button>
                </span>
              </td>
              :
              <td>no battery</td>
              }
              { props.page !== 'home' &&
              <td>
                <Link to={'/forms/update/device/' + device.id} className="btn btn-primary">Update</Link>
                <button type="button" className="btn btn-danger" onClick={() => deleteDevice(device.id)}>Delete</button>
              </td>
              }
            </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
