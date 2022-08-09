const local = (res) => {
  localStorage.setItem('name', JSON.stringify(res.name));
  localStorage.setItem('email', JSON.stringify(res.email));
  localStorage.setItem('role', JSON.stringify(res.role));
  localStorage.setItem('token', JSON.stringify(res.token));
};

export default local;
