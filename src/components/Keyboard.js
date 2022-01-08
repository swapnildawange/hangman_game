import React, { useState } from "react";
import { HammerHeadIcon } from "../svg/HammerIcon";
import getMaxHints from "../utils/getMaxHints";
import Popper from "./Popper";

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function Keyboard({
  userInput,
  setUserInput,
  checkLetter,
  showHint,
  setShowHint,
  hintNumber,
  handleRestart,
  word,
  isLoading,
}) {
  const setLetter = (e) => {
    let letter = e.toLocaleLowerCase();
    setUserInput(letter);
    checkLetter(letter);
  };
  const [openHintPopper, setOpenHintPopper] = useState(showHint);
  const [isShown, setIsShown] = useState(false);
  const onClose = () => {
    setOpenHintPopper(false);
  };

  let isHintDisabled = hintNumber >= getMaxHints(word);

  return (
    <div className="mb-5 lg:pl-5 lg:pr-5  w-full h-full max-w-lg">
      <div className="flex flex-wrap justify-center  m-4">
        {new Array(26).fill(0).map((_, index) => (
          <button
            disabled={isLoading}
            key={index}
            onClick={() => setLetter(ALPHABETS[index])}
            className={`relative  flex justify-center items-center `}
          >
            <h1
              className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 lg:text-2xl md:text-base text-white "
            >
              {ALPHABETS[index]}
            </h1>

            <div className=" grid place-items-center">
              <HammerHeadIcon />
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-evenly">
        {!isShown && (
          <Popper
            {...{ isShown, setIsShown }}
            text="Click on any block to reveal the hidden letter"
            open={openHintPopper}
            onClose={onClose}
          />
        )}
        <button
          onClick={() => {
            setShowHint(true);
            setOpenHintPopper(true);
          }}
          disabled={isHintDisabled}
          className={`${
            isHintDisabled && "cursor-not-allowed"
          } bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-4 rounded inline-flex items-center`}
        >
          <img className="pr-2 w-10" src="assets/help.png" alt="" />
          <span>Hint</span>
        </button>
        <button
          onClick={handleRestart}
          className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <img className="pr-2 w-10 " src="assets/restart.png" alt="" />
          <span>restart</span>
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
