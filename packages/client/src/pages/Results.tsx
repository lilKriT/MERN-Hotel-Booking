import { useLocation } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const Results = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <main className="flex justify-center bg-sky-300">
      <div className="container">
        <SearchBar />
        Results
      </div>
    </main>
  );
};

export default Results;

// TODO: list of results
// TODO: sticky search params
// TODO: add results item
// TODO: useLocation in results to get state
// TODO: create a single hotel page
// TODO: maybe make a slider with lightbox?
