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

  return (
    <tbody>
      <tr className="bg-green-300 text-center border-2 text-white">
        <td className="p-1">{data.title}</td>
        <td>{done ? 'Waktu Habis' : timer}</td>
      </tr>
    </tbody>
  );
};

export default Timer;
