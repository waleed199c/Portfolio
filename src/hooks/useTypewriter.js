import { useEffect, useState } from "react";

export function useTypewriter(text, speed = 40) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    setDisplayedText("");
    setIsComplete(false);

    const typeInterval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(typeInterval);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, speed]);

  return { displayedText, isComplete };
}