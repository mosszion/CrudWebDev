export default function NavBar({ onOpen, onSearch }) {

  const handleSearchChange = (event) => {
    const query = event.target.value;
    onSearch(query); // Pass the search query to the parent component
  };
  return (
    <>
      <div className="navbar bg-base-100 p-4">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Clients</a>
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-48 md:w-auto"
              onChange={handleSearchChange} // Handle search input changes 
            />
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary" onClick={() => onOpen("add")}>
            Add Client
          </a>
        </div>
      </div>
    </>
  );
}
