import React, { useEffect, useState } from 'react';

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100); // Adjust the typing speed here (in milliseconds)

      return () => clearTimeout(timeoutId);
    }
  }, [index, text]);

  return <span><h3>{displayedText}</h3></span>;
};

export default Typewriter;