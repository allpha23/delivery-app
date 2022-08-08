import axios from 'axios';

const login = async (email, password) => {
  const a = await axios.post(
    'http://localhost:3001/login',
    { email, password },
  );
  return a;
};

export default login;
