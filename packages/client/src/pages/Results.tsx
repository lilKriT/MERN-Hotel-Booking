import Search from "../components/Search";

const Results = () => {
  return (
    <main className="flex justify-center bg-sky-300">
      <div className="container">
        <Search />
        Results
      </div>
    </main>
  );
};

export default Results;

// TODO: list of results
// TODO: sticky search params
// TODO: add results item
// TODO: navigate from home to list, passing state
// TODO: add destination to search
// TODO: useLocation in results to get state
// TODO: create a single hotel page
// TODO: maybe make a slider with lightbox?
