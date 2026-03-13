import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.example.com',
});

const getMemberships = async () => {
  const response = await api.get('/memberships');
  return response.data;
};

const getClasses = async () => {
  const response = await api.get('/classes');
  return response.data;
};

export { getMemberships, getClasses };