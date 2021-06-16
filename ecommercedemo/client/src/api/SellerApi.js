import axios from 'axios';

const url = 'http://localhost:5000';

export async function showSellers(id) {
  try {
    const response = await axios.get(`${url}/seller/show`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
