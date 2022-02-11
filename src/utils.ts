export const formatTimeNumber = (timeNumber: number): string =>
  timeNumber < 10 ? `0${timeNumber}` : timeNumber.toString();
