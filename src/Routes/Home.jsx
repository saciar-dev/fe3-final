import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {

  const { state } = useContextGlobal()

  return (
    <main className={state.theme ? 'dark' : 'light'}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.map(dent => <Card dentist={dent} key={dent.id} />)}
      </div>
    </main>
  )
}

export default Home