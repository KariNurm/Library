import axios from 'axios';

const booksUrl = "http://localhost:3001/books";
const usersUrl = "http://localhost:3001/users";

// Get list of books
const getBooks = () => {
  return axios
            .get(booksUrl)
            .then((response) => response.data);
}

// Get list of users
const getUsers = () => {
  return axios
            .get(usersUrl)
            .then((response) => response.data);
}

const addUser = (newUser) => {
  return axios
            .post(usersUrl, newUser)
            .then((response) => response.data);
}

export {getBooks, getUsers, addUser};