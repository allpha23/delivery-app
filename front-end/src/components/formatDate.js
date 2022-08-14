const formatDate = (data) => {
  const newDate = data.split('T', 1).join();
  const dateWithoutTime = newDate.split('-').reverse().join('/');
  return dateWithoutTime;
};

export default formatDate;
