import axios from 'axios';

const login = async (email, password) => (await axios.post(
  'http://localhost:3001/login',
  { email, password },
));

export default login;
