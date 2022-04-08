import React from "react";
import User from "../../assets/profile.png";
import { staffData } from "../../data/dummyData";
import "../style.css";

const LinkCard = () => {
  const staffCard = staffData.map((staff) => (
    <>
      <div
        class="p-2 m-2 justify-content-around"
        style={{
          width: "300px",
          backgroundColor: "#ffffff",
          overflow: "",
          borderRadius: "15px",
        }}
      >
        <div class=" d-flex mb-2">
          <img
            src={User}
            style={{
              height: "85px",
              width: "85px",
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "15px",
            }}
            alt="profile"
          />

          <div class=" flex-column align-items-start">
            <p className="mb-1 ms-2 fs-6" style={{ fontSize: "12px" }}>
              <strong>{staff.name}</strong>
            </p>
            <p className="mb-1 ms-2 text-danger" style={{ fontSize: "12px" }}>
              
              {staff.course}
            </p>
            <p className="mb-1 ms-2" style={{ fontSize: "12px" }}>
              {staff.phone}
            </p>
            <p className="mb-1 ms-2" style={{ fontSize: "12px" }}>
              {staff.email}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <a
            href="#call"
            class=" px-4 btn "
            style={{ borderRadius: "10px", fontSize: "10px" ,backgroundColor: "#fb8884",}}
          >
            Call
          </a>
          <a
            href="#message"
            class="px-4 ms-2 btn "
            style={{ borderRadius: "10px", fontSize: "10px",backgroundColor: "#ffb55c", }}
          >
            Message
          </a>
          <a
            href="#email"
            class="px-4 ms-2 btn"
            style={{ borderRadius: "10px", fontSize: "10px",backgroundColor: "#e87572", }}
          >
            e-Mail
          </a>
        </div>
      </div>
    </>
  ));
  return <>{staffCard}</>;
};

export default LinkCard;
