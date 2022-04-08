import React from "react";
import { noticeData } from "../../data/dummyData";

const NoticeCard = () => {
  const notices = noticeData.map((notice) => (
    <>
      <div className=" m-3 text-wrap" >
        <p className="fs-6 text-white mb-1">{notice.noticeInfo}</p>
        <p className="mb-1" style={{ color: "#d1e3f6" }}>
          {notice.noticeDate}
        </p>
        <p className="mb-1">Event Date: {notice.eventDate}</p>
        <hr />
      </div>
    </>
  ));
  return <>{notices}</>;
};

export default NoticeCard;
