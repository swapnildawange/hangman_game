import React, { useState } from 'react'
import { HammerHeadIcon, HammerIcon } from '../svg/HammerIcon';

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

function Keyboard({
  userInput,
  setUserInput,
  checkLetter,
  showHint,
  setShowHint,
  hintNumber,
  handleRestart,
}) {
  const setLetter = (e) => {
    let letter = e.toLocaleLowerCase();
    setUserInput(letter);
    checkLetter(letter);
  };

  let isHintDisabled = hintNumber >= 3;
  return (
    <div className="border-slate-900 w-full h-full max-w-lg">
      <div className="flex flex-wrap justify-center ">
        {new Array(26).fill(0).map((_, index) => (
          <div key={index} className="relative">
            <h1 className="absolute left-8 top-7 text-2xl text-white">
              {ALPHABETS[index]}
            </h1>

            {/* <img src="assets/hammer.svg" alt={`hammer${index}`} /> */}
            <HammerHeadIcon letter={ALPHABETS[index]} handleClick={setLetter} />
          </div>
        ))}
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={() => setShowHint(true)}
          disabled={isHintDisabled}
          className="mr-5 ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <img className="pr-2 pl-2" src="assets/help.png" alt="" />
          <span>Hint</span>
        </button>
        <button
          onClick={handleRestart}
          className="mr-5 ml-5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <img className="pr-2 pl-2" src="assets/restart.png" alt="" />
          <span>restart</span>
        </button>
      </div>
    </div>
  );
}

export default Keyboard
