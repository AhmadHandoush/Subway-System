import Search from "./components/search";
import Map from './components/map'

const All = () => {





  return (
    <div className="flex center column full-width">
      <Map handleMapClick={handleMapClick} />
      <Search />

    </div>
  );
};


export default All