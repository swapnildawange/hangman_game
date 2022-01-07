export const validateUserInputLetter = (letter)=>{
    let reg = /^[a-zA-Z]+$/
    let res = reg.test(letter)
    if(!res) return res;
    if(letter.length <=1 && res){
        return res
    }
}