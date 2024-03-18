import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="container">

      <div className="row">
        <div className="col-md-10">
          <h1 className="mt-3">Go watch Movies</h1>

        </div>

        <div className="col-md-2 text-end">
          <Link to="/login"><span className="badge bg-success">Login</span></Link>
        </div>
      </div>

      <hr className="mb-3"></hr>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-action">Home</Link>
              <Link to="/movies" className="list-group-item list-group-action">Movies</Link>
              <Link to="/genres" className="list-group-item list-group-action">Genres</Link>
              <Link to="/admin/movies/0" className="list-group-item list-group-action">Add Movie</Link>
              <Link to="/manage-catalogue" className="list-group-item list-group-action">Manage Catalogue</Link>
              <Link to="/graphql" className="list-group-item list-group-action">GraphQL</Link>
            </div>
          </nav>
        </div>

        <div className="col-md-10">
          <Outlet />
        </div>
      </div>

    </div>
  );
}

export default App;