import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Actor from './Actor.jsx'
import Friend from './Friend.jsx'
function App() {
  const acotrs = ['Sakib', 'Salman', 'Siam', 'Riaz', 'Ferdaus']
  let ages = [21, 43, 23, 41, 13, 34, 25, 54]
  ages = ages.slice(0, acotrs.length)
  console.log(ages)
  let actor_age;
  
  ages.map(age =>  actor_age = age)

  const friends = [
    {name: 'Sayem Bhuiyan', age: 21},
    {name: 'Akash Islam', age: 21},
    {name: 'Fahim Sarker', age: 22},
    {name: 'Shajib Sarker', age: 23},
    {name: 'Asif', age: 21},
    {name: 'Tipu Ahsan', age: 23},
  ]

  const singers = [
    {name: 'Sayem Bhuiyan', age: 21},
    {name: 'Akash Islam', age: 21},
    {name: 'Fahim Sarker', age: 22},
    {name: 'Shajib Sarker', age: 23},
    {name: 'Asif', age: 21},
    {name: 'Tipu Ahsan', age: 23},
  ]
  
  return (
    <>
      <h1>Vite + React</h1>

      {
        singers.map(singer=> <Singer singer={singer} />)
      }

      {
        friends.map(friend => <Friend singer= {friend} />)
      }

      <Actor name='Alomir' />
      {
        acotrs.map(actor => <Actor name={actor} age={actor_age}/>)
      }
      
    </>
  )
}

function Singer({singer}){
  return(
    <div style={{
      border: '1px solid tomato',
      textAlign: 'left',
      padding: '20px'
    }}>
      <p>Name: {singer.name} and age: {singer.age}</p>
    </div>
  )
}

export default App
