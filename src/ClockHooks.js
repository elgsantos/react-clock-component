import React, { useState, useEffect } from "react";

export default function ClockHooks() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    let timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  });
  return <h1>{date.toLocaleTimeString()}</h1>;
}
