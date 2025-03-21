import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const texts = [
    "Search for Indian Cuisine...",
    "Search for Japanese Cuisine...",
    "Search for Korean Cuisine...",
    "Search for Thai Cuisine...",
    "Search for American Cuisine...",
    "Search for French Cuisine..."
  ];

  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < texts[textIndex].length) {
        setText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
        } else {
          setTextIndex((prev) => (prev + 1) % texts.length); // Move to next text
          setCharIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [charIndex, isDeleting, textIndex]);

  return <h1 className="typewriter">{text}</h1>;
};

export default Typewriter;
