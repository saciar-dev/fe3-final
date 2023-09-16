import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useContextGlobal()

  const handleChangeTheme = () =>{
    dispatch({type:'SWITCH_THEME' })
  }

  return (
    <nav className={state.theme ? 'dark' : 'light'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <div >
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favs</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      
      <button onClick={handleChangeTheme}>
      {state.theme ? <>
            🌞
            </>: <>
            🌙
        </>}
      </button>
    </nav>
  )
}

export default Navbar