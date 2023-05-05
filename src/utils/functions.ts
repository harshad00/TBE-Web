const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
};

const formatTime = (time: number) => time.toString().padStart(2, '0');

export { formatDate, formatTime };
