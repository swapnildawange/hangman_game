import propTypes from "prop-types";
import React from "react";

export default function LetterInput({
  userInput,
  setUserInput,
  checkLetter,
}) {
  const handleInputChange = (e) => {
    let letter = e.target.value;

    setUserInput(letter);
  };
  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange}></input>
      <button onClick={checkLetter} className="text-3xl font-bold underline">
        Check
      </button>
    </div>
  );
}

LetterInput.propTypes = {
  userInput: propTypes.string.isRequired,
  setUserInput: propTypes.func.isRequired,
  checkLetter: propTypes.func.isRequired,
};
