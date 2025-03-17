const Header = ({ setSearchInput }) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container border-bottom pb-4">
            <a
              href="/"
              className="navbar-brand text-danger fst-italic fw-medium fs-1"
            >
              Meetup
            </a>

            <form className="d-flex" role="search">
              <input
                type="search"
                className="form-control form-control-sm me-2 text-secondary border-0 rounded"
                placeholder="&#x1f50d;&#xFE0E;  Search by title and tags"
                onChange={(event) => {
                  setSearchInput(event.target.value);
                }}
              />
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
