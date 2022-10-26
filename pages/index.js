import { useState, useEffect } from "react";

export default function HomePage() {
  const [score, setScore] = useState(0);
  const increaseScore = () => setScore(score + 1);

  useEffect(() => {
    document.title = `the score is [ ${score} ]`;
  });

  return (
    <div className="container m-auto max-w-4xl flex flex-col gap-10">
      <h1>testing stuff</h1>

      <p>Increasing Number by value of ONE!</p>
      <p>Value = {score}</p>
      <button onClick={increaseScore}>
        Plus One! <b>{score}</b>
      </button>

      <a href="/account">
        <button className="w-full">Dashboard</button>
      </a>

      <a href="/articles">
        <button className="w-full">Articles</button>
      </a>
    </div>
  );
}
