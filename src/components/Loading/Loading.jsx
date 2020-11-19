import React from "react";

import FadeLoader from "react-spinners/FadeLoader";

const Loading = ({ className }) => {
  return (
    <div className={className}>
      <FadeLoader size={50} color={"grey"} />
    </div>
  );
};
export default Loading;
