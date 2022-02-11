import React, { useState, useEffect, FunctionComponent } from 'react';
import { formatTimeNumber } from '../utils';
import { MS_IN_HOUR, MS_IN_MINUTE } from '../constants';

export type CountfromProps = {
  targetDate: Date,
};


const Countfrom: FunctionComponent<CountfromProps> = ({ targetDate }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    const timerId: NodeJS.Timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return (): void => clearInterval(timerId);
  }, []);

  let timeDifferenceMs: number = currentDate.getTime() - targetDate.getTime();
  let hours: number = 0;
  let minutes: number = 0;

  while (timeDifferenceMs >= MS_IN_HOUR) {
    timeDifferenceMs -= MS_IN_HOUR;
    hours++;
  }

  while (timeDifferenceMs >= MS_IN_MINUTE) {
    timeDifferenceMs -= MS_IN_MINUTE;
    minutes++;
  }
  const seconds: number = Math.floor(timeDifferenceMs / 1000);

  return (
    <div>{`${formatTimeNumber(hours)}:${formatTimeNumber(
      minutes,
    )}:${formatTimeNumber(seconds)}`}</div>
  );
};

export default Countfrom;
