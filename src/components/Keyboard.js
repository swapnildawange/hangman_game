import React, { useState } from 'react'
import { HammerHeadIcon, HammerIcon } from '../svg/HammerIcon';

const ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
function Keyboard({ userInput, setUserInput, checkLetter }) {
  const setLetter = (e) => {
let letter = e.toLocaleLowerCase()
    setUserInput(letter);
    checkLetter(letter)
  };
  return (
    <div className="border-slate-900 w-full h-full max-w-lg">
      <h1>hell</h1>
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
    </div>
  );
}

export default Keyboard
