const formatDate = dateStr => {
  return dateStr && dateStr.split('-').reverse().join('.');
};

export default formatDate;
