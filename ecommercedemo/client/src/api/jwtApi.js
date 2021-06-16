import axios from 'axios';

const url = 'http://localhost:5000';

export async function jwtAuthCheck(localStorageJwt) {
  try {
    const response = await axios.post(`${url}/auth`, localStorageJwt);
    const data = response.data;
    return data.page;
  } catch (error) {
    console.log(error.message);
  }
}
