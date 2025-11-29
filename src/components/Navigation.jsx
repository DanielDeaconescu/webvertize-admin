import React from 'react';

function Navigation() {
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');

    // Redirect to login page
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Webvertize Admin
        </a>

        <div className="d-flex">
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
