import React from "react";
import "./style.css";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar close">
        <div className=" mt-3 mx-auto">
          <img className="logo" src={Logo} alt="logo" />
        </div>

        <ul className="nav nav-pills nav-flush flex-column mb-auto mt-5 mx-auto fs-5 text-black">
          <li className="nav-item mb-3 mx-4">
            <NavLink to="/dashboard" className="nav-link text-dark">
              <i className="bi bi-house"></i>
              <span className="list-item ms-2">Dashboard</span>
            </NavLink>
          </li>

          <li className="nav-item mb-3 mx-4 ">
            <NavLink to="/overview" className="nav-link text-dark">
              <i className="bi bi-bar-chart"></i>
              <span className="list-item ms-2">Overview</span>
            </NavLink>
          </li>

          <li className="nav-item mb-3 mx-4">
            <NavLink to="/courses" className="nav-link text-dark">
              <i className="bi bi-mortarboard"></i>
              <span className="list-item ms-2">Courses</span>
            </NavLink>
          </li>

          <li className="nav-item mb-3 mx-4">
            <NavLink to="/examination" className="nav-link text-dark">
              <i className="bi bi-clipboard-check"></i>
              <span className="list-item ms-2">Examination</span>
            </NavLink>
          </li>

          <li className="nav-item mb-3 mx-4">
            <NavLink to="/calendar" className="nav-link text-dark">
              <i className="bi bi-calendar-event"></i>
              <span className="list-item ms-2">Calendar</span>
            </NavLink>
          </li>

          <li className="nav-item mb-3 mx-4">
            <NavLink to="/links" className="nav-link text-dark">
              <i className="bi bi-link-45deg"></i>
              <span className="list-item ms-2">Links</span>
            </NavLink>
          </li>
        </ul>
        <div className=" footer flex-column justify-content-center">
          <div
            className="d-flex justify-content-center"
            style={{ height: "15px" }}
          >
            <a
              href="/terms-of-use"
              className="text-uppercase text-decoration-none text-dark me-1"
              style={{ fontSize: "12px" }}
            >
              Terms of Use
            </a>
            <p style={{ fontSize: "12px" }}> |</p>
            <a
              href="/privacy-policy"
              className="text-uppercase text-decoration-none text-dark ms-1"
              style={{ fontSize: "12px" }}
            >
              Privacy Policy
            </a>
          </div>
          <div
            className="d-flex justify-content-center mb-3"
            style={{ height: "15px" }}
          >
            <p style={{ fontSize: "12px" }}>
              <strong>&copy;</strong> 2022. eScholarly
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
