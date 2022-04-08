import React from "react";
import LinkCard from "./cards/LinkCard";

const Links = () => {
  
  return (
    <>
      <div className="links flex-column">
        <h2 className="mt-4 mb-4 text-center">Faculty</h2>
        <div
          className="h-50 "
          style={{ overflowY: "scroll", backgroundColor:"" }}
        >
          <div className="d-flex flex-wrap justify-content-around mt-4 ">
            <LinkCard />
          </div>
        </div>
        <div className="justify-content-around h-25">
          <h1>Faculty</h1>
          <div className="d-flex flex-wrap justify-content-between"> </div>
        </div>
      </div>
    </>
  );
};

export default Links;
