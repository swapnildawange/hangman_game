import { motion } from "framer-motion";
import propTypes from "prop-types";
import React, { useState } from "react";

export default function Letter({
  letter,
  blank,
  isVisible,
  isSelected = false,
  handelLetterClick,
  id
}) {


  return (
    <button onClick={() => handelLetterClick({ letter, isVisible,id })}>
      <div
        className={`w-20 m-2 h-20 grid place-items-center border  relative
rounded-lg hover:border-8
 hover:border-gray-400 active:border-gray-400 focus:outline-none focus:ring focus:ring-gray-400
      ${isVisible ? "cursor-not-allowed" : "glass"} ${
          !isVisible && isSelected && "selected__glass"
        }`}
      >
        <h1 className={`text-3xl text-gray-200 `}>{isVisible && letter}</h1>
      </div>
    </button>
  );
}

Letter.propTypes = {
  letter: propTypes.string.isRequired,
  blank: propTypes.string,
  isVisible: propTypes.bool.isRequired,
  isSelected:propTypes.bool,
};
