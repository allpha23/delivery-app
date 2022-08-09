import axios from 'axios';

const login = async (email, password) => {
  const loginReq = await axios.post(
    'http://localhost:3001/login',
    { email, password },
  );
  return loginReq;
};

export default login;
