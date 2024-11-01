import React, { useState, useEffect } from 'react';

const facts = [
    "The first computer was the size of a room!",
    "JavaScript was created in just 10 days.",
    "Email existed before the web!",
    "Python is named after Monty Python, not the snake.",
    "Google was originally called 'Backrub.'",
    "The first hard drive weighed over 500 pounds.",
    "The first 1GB drive cost $40,000 in 1980.",
    "The Firefox logo isn’t a fox; it’s a red panda.",
    "Wi-Fi doesn’t stand for 'Wireless Fidelity.'",
    "The first computer bug was an actual insect.",
    "NASA still uses 90s tech on spacecraft.",
    "Google processes over 5 billion searches daily.",
    "The first iPhone prototype was made in 2004.",
    "More than 700 programming languages exist!",
    "The first domain name ever registered was symbolics.com.",
    "HTML was created in 1993.",
    "The first website is still online.",
    "Amazon started as an online bookstore.",
    "Apple’s first logo featured Isaac Newton under a tree.",
    "Bill Gates wrote Microsoft’s first code himself.",
    "The word 'robot' means 'forced labor' in Czech.",
    "People check their phones on average 96 times a day.",
    "Around 90% of the world’s currency is digital.",
    "The first email was sent in 1971.",
    "There are more than 1.8 billion websites today!",
    "Typing 'Google in 1998' gives you a retro Google look.",
    "The original PlayStation was a Nintendo project.",
    "A single Google search uses about 0.0003 kWh of energy."
  ];
  
  

const FunFact: React.FC = () => {
  const [factIndex, setFactIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentFact = facts[factIndex];
      
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(50); // faster deleting speed
      } else {
        setDisplayedText((prev) => currentFact.slice(0, prev.length + 1));
        setTypingSpeed(100); // normal typing speed
      }

      if (!isDeleting && displayedText === currentFact) {
        setTimeout(() => setIsDeleting(true), 2000); // hold the fact for 2 seconds before deleting
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setFactIndex((prevIndex) => (prevIndex + 1) % facts.length); // cycle to the next fact
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayedText, isDeleting, factIndex, typingSpeed]);

  return (
      <p className="text-[10px] md:text-xs">
        {displayedText}
        <span className="border-r-2 border-white animate-pulse ml-1"></span>
      </p>
  );
};

export default FunFact;
