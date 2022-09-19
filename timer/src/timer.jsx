import { useEffect, useState } from 'react';

const Timer = ({ data }) => {
  const [timer, setTimer] = useState(data.timer);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const x = setInterval(() => setTimer((timer) => timer - 1), 1000);
    if (timer === 0) {
      setDone(true);
    }
    return () => {
      clearInterval(x);
    };
  }, [timer]);

  if (timer === 0) {
    return;
  }

  return (
    <>
      <span>{data.title}</span>
      <span>{done ? 'selesai' : timer}</span>
    </>
  );
};

export default Timer;
