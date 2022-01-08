import React from 'react'

export default function Header() {
    return (
      <div className="flex items-center w-full h-20 bg-stone-50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 ">
        <img
          className="w-14 h-14 p-2  rounded-2xl"
          src="assets/hangman.png"
          alt="hangman-img"
          srcset=""
        />
        <h1 className=" heading absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl text-bold font-bold text-red-500">
          Hangman
        </h1>
      </div>
    );
}
