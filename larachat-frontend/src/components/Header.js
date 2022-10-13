import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
    {" "}
    <a href="#menu-toggle" id="menu-toggle" className="navbar-brand">
      <span className="navbar-toggler-icon" />
    </a>{" "}
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExample02"
      aria-controls="navbarsExample02"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      {" "}
      <span className="navbar-toggler-icon" />{" "}
    </button>
    <div className="collapse navbar-collapse" id="navbarsExample02">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          {" "}
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>{" "}
        </li>
        <li className="nav-item">
          {" "}
          <a className="nav-link" href="#">
            Link
          </a>{" "}
        </li>
      </ul>
      <form className="form-inline my-2 my-md-0"> </form>
    </div>
  </nav>  )
}

export default Header
