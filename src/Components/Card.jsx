import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";


const Card = ({ dentist }) => {

  const { state, dispatch } = useContextGlobal()

  const addFav = () => {
    if (state.favs.some((elem) => elem.id === dentist.id)) {
      if (confirm('Are you sure about deleting this favorite?'))
        dispatch({ type: 'REMOVE_FAV', payload: state.favs.filter((repetido) => repetido.id != dentist.id) })
    }
    else {
      dispatch({ type: 'ADD_FAV', payload: dentist })
      alert('The dentist was added successfully')
    }
  }

  const isAfavorite = () => {
    return state.favs.some((elem) => elem.id === dentist.id)
  }

  return (
    <div className={state.theme ? 'dark' : 'light'}>
      <div className="card">
        <Link to={'/dentist/' + dentist.id}>
          <img src="./images/doctor.jpg"></img>
          <h2>{dentist.name}</h2>
          <h3>{dentist.username}</h3>
        </Link>
        <button onClick={addFav} className="favButton">
          {isAfavorite() ? <>
            ❌
          </> : <>
            💖
          </>
          }
        </button>

      </div>
    </div>
  );
};

export default Card;