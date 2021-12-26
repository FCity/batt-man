import React from 'react'
import DevicesTable from './table/DevicesTable'

export default function Home() {
  return (
    <div className="home p-4">
      <h3 className="display-6 mt-4">Welcome to BattMan - The Battery Manager</h3>
      <div className="devices-table">
        <DevicesTable page="home" />
      </div>
    </div>
  )
}
