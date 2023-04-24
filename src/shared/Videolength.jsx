import React from "react";
import moment from "moment";

const Videolength = ({ time }) => {
  const VLIS = moment().startOf("day").second(time).format("H:mm:ss");

  return (
    <div className=" bg-transparent/40 absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {VLIS}
    </div>
  );
};

export default Videolength;
