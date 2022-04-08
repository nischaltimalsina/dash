import React from "react";
import BgImg from "../assets/bg.png";
import "./style.css";
import Chart from "./cards/Chart";
import NoticeCard from "./cards/NoticeCard";
const Dashboard = () => {
  const date = new Date().toDateString();
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })
  return (
    <>
      <div className="dashboard">
        <div className=" top d-flex flex-wrap p-3 justify-content-between ">
          <div className="welcome flex-column col-md-12 col-sm-12 col-lg-6">
            {/* Welcome / Greeting Container */}

            <div
              className="card text-white mt-4 p-3"
              style={{
                borderRadius: "20px",
                height: "150px",
                backgroundImage: `url(${BgImg})`,
                backgroundSize: "100%",
              }}
            >
              <h2 className="mt-3">Hi, Jane Doe</h2>
              <p>
                Welcome. It's been a lovely day. Let's get to work, shall we?
              </p>
            </div>

            {/* TODO Lists and Buttons */}
            <div className="d-flex justify-content-between">
              <div
                className="card mt-4 p-3 text-white justify-content-center align-items-start me-2 "
                style={{
                  borderRadius: "20px",
                  height: "150px",
                  width: "150px",
                  backgroundColor: "#fb8884",
                }}
              >
                <br/>
                <h6>{date}</h6>
                <h3>{time}</h3>
              </div>
              <div
                className="card mt-4 p-3 align-items-center text-white justify-content-center  me-2"
                style={{
                  fontSize: "20px",
                  borderRadius: "20px",
                  height: "150px",
                  width: "150px",
                  backgroundColor: "#5eb3a8",
                }}
              >
                <i
                  class="bi bi-plus-lg mx-auto"
                  style={{ fontSize: "40px" }}
                ></i>
                <span>Add TODO</span>
              </div>
              <div
                className="card mt-4 p-3 align-items-center me-2"
                style={{
                  borderRadius: "20px",
                  height: "150px",
                  width: "150px",
                  backgroundColor: "#ffb55c",
                }}
              ></div>
              <div
                className="card mt-4 p-3 align-items-center"
                style={{
                  borderRadius: "20px",
                  height: "150px",
                  width: "150px",
                  backgroundColor: "#e87572",
                }}
              ></div>
            </div>
          </div>
          <div
            className="spotlight col-md-12 col-sm-12 col-lg-6 mt-4 "
            style={{ backgroundColor: "#fb8884", borderRadius: "20px", overflowY:"scroll", height:"324px", border:"20px solid transparent"}}
          >
            <NoticeCard/>
          </div>
        </div>

        <div className="d-flex flex-wrap p-3 justify-content-between">
          <div
            className="card  p-3"
            style={{
              borderRadius: "20px",
              height: "450px",
              width: "100%",
              backgroundColor: "#ffffff",
            }}
          >
            <p>SAMPLE CHART</p>
            <Chart />
          </div>
        </div>
        <div className="d-flex flex-wrap p-3 justify-content-between">
          <div
            className="card text-white p-3"
            style={{
              borderRadius: "20px",
              height: "250px",
              width: "100%",
              backgroundColor: "#fb8884",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
