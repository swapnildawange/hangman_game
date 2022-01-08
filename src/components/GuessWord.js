import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useQuery, useQueryClient } from "react-query";
import shortid from "shortid";
import wordApi from "../api/wordApi";
import useWindowSize from "../hooks/useWindowSize";
import { DeadMan } from "../svg/ManSvg";
import getMaxHints from "../utils/getMaxHints";
import { validateUserInputLetter } from "../utils/validation";
import Keyboard from "./Keyboard";
import Letter from "./Letter";
import Man from "./Man";
import Popper from "./Popper";
export default function GuessWord() {
  const { width, height } = useWindowSize();

  const [word, setWord] = useState("");
  const queryClient = useQueryClient();
  const {
    status,
    isLoading,
    data: wordArray,
    error,
    refetch,
  } = useQuery("word", wordApi, {
    manual: true,
  });

  useEffect(() => {
    if (status === "success" && isLoading === false) {
      let { data } = wordArray;
      setWord(data[0]);
    } else if (status === "error") {
      console.log(error);
    }
  }, [wordArray]);

  const [attemptNumber, setAttemptNumber] = useState(0);
  const [hintNumber, setHintNumber] = useState(0);
  const [letters, setLetters] = useState([]);
  const [isPlayerWon, setPlayerWon] = useState(false);
  const [isPlayerLost, setPlayerLost] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [showHint, setShowHint] = useState(false);

  const generateLetters = (word) => {
    let array = word.split("").map((letter) => {
      return {
        id: shortid(),
        letter,
        blank: "-",
        isVisible: false,
        isSelected: false,
      };
    });
    setLetters(array);
  };

  const checkPlayerWon = () => {
    let status = letters.every(({ letter, isVisible }) => {
      return isVisible;
    });
    if (letters.length === 0 || isPlayerLost) status = false;
    setPlayerWon(status);
  };

  const checkLetter = (letter) => {
    if (validateUserInputLetter(letter)) {
      let updatedLetters = [];
      let isLetterPresent = false;
      letters.forEach((currentLetter) => {
        if (currentLetter.letter === letter) {
          updatedLetters.push({
            ...currentLetter,
            isVisible: true,
            isSelected: false,
          });
          isLetterPresent = true;
        } else {
          updatedLetters.push({
            ...currentLetter,
          });
        }
      });

      if (!isLetterPresent) {
        setAttemptNumber((attemptNumber) => attemptNumber + 1);
      }

      setLetters(updatedLetters);
    } else {
      console.log("Wrong letter ", letter);
    }
  };

  const giveHint = (letter) => {
    let updatedLetters = [];
    letters.forEach((currentLetter) => {
      if (currentLetter.letter === letter) {
        updatedLetters.push({
          ...currentLetter,
          isSelected: true,
          isVisible: true,
        });
      } else {
        updatedLetters.push({
          ...currentLetter,
          isSelected: false,
        });
      }
    });
    setLetters(updatedLetters);

    // set showHint to false
    setShowHint(false);
    // increase the hint count
    setHintNumber((hintNumber) => hintNumber + 1);
  };

  const handelLetterClick = ({ letter, isVisible, id }) => {
    if (!showHint) return;
    let updatedLetters = [];
    letters.forEach((currentLetter) => {
      if (currentLetter.id === id) {
        updatedLetters.push({
          ...currentLetter,
          isSelected: true,
        });
      } else {
        updatedLetters.push({
          ...currentLetter,
          isSelected: false,
        });
      }
    });
    setLetters(updatedLetters);
    giveHint(letter);
  };

  const handleRestart = () => {
    refetch();
    setAttemptNumber(0);
    setHintNumber(0);
    setLetters([]);
    setPlayerWon(false);
    setUserInput("");
    setPlayerLost(false);
  };

  // if lost show the word

  const handleLost = () => {
    let updatedLetters = letters.map((currentLetter) => ({
      ...currentLetter,
      isVisible: true,
    }));
    setLetters(updatedLetters);
  };

  useEffect(() => {
    if (attemptNumber >= 5) {
      handleLost();
      setPlayerLost(true);
    }
  }, [attemptNumber]);

  useEffect(() => {
    checkPlayerWon();
  }, [
    setHintNumber,
    hintNumber,
    attemptNumber,
    setAttemptNumber,
    checkLetter,
    setUserInput,
  ]);

  useEffect(() => {
    generateLetters(word);
  }, [word]);

  console.log("word", word);
  return (
    <div>
      {/* show confetti when player guess the word correctly */}
      {isPlayerWon && (
        <>
          <Confetti width={width} height={height} />
          <Popper
            text={"Congratulations you won the game"}
            open={isPlayerWon}
            onClose={handleRestart}
            children={
              <img
                className="w-5 h-5 "
                src="assets/confetti.png"
                alt="confetti"
              ></img>
            }
          ></Popper>
        </>
      )}
      {/* player lost */}
      <Popper
        text={"Better luck next time"}
        onClose={handleRestart}
        open={isPlayerLost}
      ></Popper>
      <div className="con">
        <div className="flex flex-col justify-items-center items-center ml-3 mr-4 ">
          {attemptNumber === 5 ? (
            <DeadMan />
          ) : (
            <Man attemptNumber={attemptNumber} />
          )}

          {isLoading ? (
            <div className="m-10">
              <CircularProgress />
            </div>
          ) : (
            <>
              <div
                className={`flex flex-wrap justify-center items-center ${
                  isPlayerLost && "drop"
                }`}
              >
                {letters.map((letter, index) => (
                  <Letter
                    key={letter.id}
                    {...letter}
                    handelLetterClick={handelLetterClick}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          <div className="flex flex-col justify-evenly mt-5 items-center">
            <h1 className="text-white font-bold lg:text-3xl text-xl">
              Number of hints remaining : {getMaxHints(word) - hintNumber}
            </h1>
            <h1 className="text-white font-bold  lg:text-3xl text-xl">
              Number of attempts remaining : {5 - attemptNumber}
            </h1>
          </div>

          <Keyboard
            {...{
              setUserInput,
              userInput,
              checkLetter,
              showHint,
              setShowHint,
              hintNumber,
              handleRestart,
              word,
              isLoading,
            }}
          />
        </div>
      </div>
    </div>
  );
}
