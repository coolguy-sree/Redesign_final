export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

export const formatTime = (time: string): string => {
  return new Date(`1970-01-01T${time}`).toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

export const isEventPast = (date: string): boolean => {
  return new Date(date) < new Date();
};