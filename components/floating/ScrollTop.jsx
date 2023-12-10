"use client";

import FeatherIcon from "../icons/FeatherIcon";

const ScrollTop = ({ visiblity, onClick = () => {} }) => {
  return (
    <div className={`fixed bottom-10 right-10 ${!visiblity && "hidden"}`}>
      <button className="btn btn-circle btn-primary" onClick={onClick}>
        <FeatherIcon icons={"arrow-up"} width={20} />
      </button>
    </div>
  );
};

export default ScrollTop;
