import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useQuery, useQueryClient } from "react-query";
import shortid from "shortid";
import wordApi from "../api/wordApi";
import useWindowSize from "../hooks/useWindowSize";
import { validateUserInputLetter } from "../utils/validation";
import Keyboard from "./Keyboard";
import Letter from "./Letter";
import Man from "./Man";
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

  const [hiddenLetters, setHiddenLetters] = useState([]);
  const [visibleLetters, setVisibleLetters] = useState([]);
  const [attemptNumber, setAttemptNumber] = useState(1);
  const [hintNumber, setHintNumber] = useState(0);
  const [letters, setLetters] = useState([]);
  const [isPlayerWon,setPlayerWon] = useState(false)
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

  const checkPlayerWon= ()=>{
   let a= letters.every(({letter,isVisible})=> isVisible)
   console.log("a",a)
  }

  const checkLetter = (letter) => {
    if (validateUserInputLetter(letter)) {
      console.log("checking letter");
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
    console.log("showHint", showHint);
    if (!showHint) return;
    console.log("letter", letter, isVisible);
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
  };

  // if lost show the word

  const handleLost = () => {
    let updatedLetters = letters.map((currentLetter) => ({
      ...currentLetter,
      isVisible: true,
    }));
    setLetters(updatedLetters);
    // restart the game
    setTimeout(handleRestart,1000)
  };



  useEffect(()=>{
    if(attemptNumber > 5){
      handleLost()
    }
  },[attemptNumber])
useEffect(()=>{
  checkPlayerWon()
},[setHintNumber,hintNumber,attemptNumber,setAttemptNumber])

  useEffect(() => {
    generateLetters(word);
  }, [word]);
  return (
    <div>
      {/* show confetti when player guess the word correctly */}
      <Confetti width={width} height={height} />

    {/* <Warning/> */}
      <div className="con">
        <Man attemptNumber={attemptNumber} />
        <div style={{ display: "flex" }}>
          {letters.map((letter, index) => (
            <Letter
              key={letter.id}
              {...letter}
              handelLetterClick={handelLetterClick}
            />
          ))}
        </div>
        <div>
          <Keyboard
            {...{
              setUserInput,
              userInput,
              checkLetter,
              showHint,
              setShowHint,
              hintNumber,
              handleRestart,
            }}
          />
        </div>
      </div>
    </div>
  );
}
