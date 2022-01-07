import axios from "axios";

const API = "https://random-word-api.herokuapp.com/word?number=1";

const wordApi =()=>{
    return axios.get(API)
}
export default wordApi