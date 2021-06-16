import axios from 'axios';

const url = 'http://localhost:5000';

export async function loginUser(values) {
  try {
    const response = await axios.post(`${url}/user/login`, values);
    const data = response.data;
    if (data.user) {
      localStorage.clear();
      localStorage.setItem('user', data.token);
      return { data: data };
    }
    if (data.errors) {
      const error = data.errors;
      return { error };
    }
  } catch (error) {
    console.log(error.message);
  }
}

export async function createUser(user) {
  try {
    const response = await axios.post(`${url}/user/create`, user);
    const data = response.data;
    console.log(response.data);
    if (data.user) {
      localStorage.clear();
      localStorage.setItem('user', data.token);
      return { data: data.user };
    }
    if (data.errors) {
      const error = data.errors.email;
      return { error };
    }
  } catch (error) {
    console.log(error);
  }
}
