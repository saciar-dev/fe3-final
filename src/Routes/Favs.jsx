import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Favs = () => {

  const { state } = useContextGlobal()

  return (
    <>
      <div className={state.theme ? 'dark' : 'light'}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {state.favs.map(fav => <Card dentist={fav} key={fav.id} />)}
        </div>
      </div>
    </>
  );
};

export default Favs;