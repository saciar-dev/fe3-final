import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContextGlobal()

  const handleChangeTheme = () => {
    dispatch({ type: 'SWITCH_THEME' })
  }

  return (
    <div className={state.theme ? 'dark' : 'light'}>
      <nav >
        <div>
          <Link to='/'>Home</Link>
          <Link to='/favs'>Favs</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <button onClick={handleChangeTheme}>
          {state.theme ?
            <>
              🌞
            </> : <>
              🌙
            </>}
        </button>
      </nav>
    </div>
  )
}

export default Navbar