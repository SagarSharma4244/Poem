import axios from "axios";

const POEM_API = "https://poetrydb.org/random,linecount/10;4";
export async function randomPoemApi() {
  return await axios
    .get(POEM_API)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
