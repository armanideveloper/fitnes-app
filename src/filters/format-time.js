const formatTime = timeStr => {
  if (timeStr) {
    const [hours, minutes] = timeStr.split(':');
    return `${hours}:${minutes}`;
  }
};

export default formatTime;
