import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h6 className="mb-3">Awesome Todo List</h6>
                <App />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.StrictMode>,
  document.getElementById("root")
);
