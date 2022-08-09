import axios from 'axios';

const register = async (name, email, password, role = 'customer') => {
  const regisReq = await axios.post(
    'http://localhost:3001/user',
    { name, email, password, role },
  );
  return regisReq;
};

export default register;
