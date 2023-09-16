import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'
import axios from 'axios'

const Detail = () => {

  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  const { state, dispatch } = useContextGlobal()

  const { name, email, phone, website } = state.dentist

  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    axios(url)
      .then(res => {
        console.log(res.data)
        dispatch({ type: 'GET_DENTIST', payload: res.data })
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [])

  return (

    <div className={state.theme ? 'dark' : 'light'}>
      {loading ? 'Cargando...' : <>
        <h1>Detail Dentist id {id}</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{website}</td>
            </tr>
          </tbody>
        </table>
      </>}
    </div>
  )
}

export default Detail