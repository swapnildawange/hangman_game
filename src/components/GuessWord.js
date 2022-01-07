import React, { useEffect, useState } from "react";
import { validateUserInputLetter } from "../utils/validation";
import Keyboard from "./Keyboard";
import Letter from "./Letter";
import Man from "./Man";
import Warning from "./Warning";
export default function GuessWord() {
  const [word, setWord] = useState("hello");
  //   const queryClient = useQueryClient();
  //   const {
  //     status,
  //     isLoading,
  //     data: wordArray,
  //     error,
  //     refetch,
  //   } = useQuery("word", wordApi, {
  //     manual: true,
  //   });

  //   useEffect(() => {
  //     if (status === "success" && isLoading === false) {
  //       let { data } = wordArray;
  //       setWord(data[0]);
  //       console.log("query", data[0]);
  //     } else if (status === "error") {
  //       console.log(error);
  //     }
  //   }, [wordArray]);

  const [hiddenLetters, setHiddenLetters] = useState([]);
  const [visibleLetters, setVisibleLetters] = useState([]);
  const [attemptNumber, setAttemptNumber] = useState(1);
  const [letters, setLetters] = useState([]);

  const [userInput, setUserInput] = useState("");

  const generateLetters = (word) => {
    let array = word.split("").map((letter) => {
      return {
        letter,
        blank: "-",
        isVisible: false,
        isSelected:false,
      };
    });
    setLetters(array);
  };

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
          isLetterPresent =true;

        } else {
          updatedLetters.push({
            ...currentLetter,
          });
        }
      });
      if(!isLetterPresent){
        setAttemptNumber((attemptNumber) => attemptNumber + 1);
      }

      setLetters(updatedLetters);
    } else {
      console.log("Wrong letter ", letter);
    }
  };

  const giveHint = ()=>{

  }
  const handelLetterClick=({letter,isVisible})=>{
console.log("letter",letter,isVisible)

  }


  useEffect(() => {
    generateLetters(word);
  }, [word]);
  return (
    <div>
      {/* <Warning/> */}
      <div className="con">
        <Man attemptNumber={attemptNumber} />
        <div style={{ display: "flex" }}>
          {letters.map((letter, index) => (
            <Letter
              key={index}
              {...letter}
              handelLetterClick={handelLetterClick}
            />
          ))}
        </div>
        <div>
          <Keyboard {...{ setUserInput, userInput, checkLetter }} />
        </div>
      </div>
    </div>
  );
}
