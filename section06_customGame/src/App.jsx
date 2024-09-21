import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller' 
import { useState } from 'react'

function App() {

  const [status, setStatus] = useState({
    HP : 100,
    MP : 20
  });

  const hpAttack = (attackValue) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      HP: prevStatus.HP + attackValue // HP 업데이트
    }));
  }

  const mpAttack = (attackValue) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      MP: prevStatus.MP + attackValue
    }))
  }

  const hellFire = (attackValue) => {
    setStatus((orinStatus) => ({
      ...orinStatus,
      HP: 1,
      MP: 0
    }))
  }

  return (
    <>
      <div>
        <h1>My Custom Game</h1>
      </div>
      <div>
        <Viewer status = {status} />
        <Controller hpAttackButton = {hpAttack} mpAttackButton = {mpAttack} hellFire = {hellFire}  />
      </div>
    </>
  )
}

export default App
