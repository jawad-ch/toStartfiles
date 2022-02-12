import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <form className="d-flex justify-content-center align-items-center mb-4">
          <div className="form-outline flex-fill">
            <input
              type="text"
              id="form3"
              className="form-control form-control-lg"
            />
            <label className="form-label" htmlFor="form3">
              What do you need to do today?
            </label>
          </div>
          <button type="submit" className="btn btn-primary btn-lg ms-2">
            Add
          </button>
        </form>

        <ul className="list-group mb-0">
          <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
            <div className="d-flex align-items-center">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                aria-label="..."
              />
              Cras justo odio
            </div>
            <a href="#!" data-mdb-toggle="tooltip" title="Remove item">
              <i className="fas fa-times text-primary"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
