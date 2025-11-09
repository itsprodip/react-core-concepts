import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [fours, setFours] = useState(0);
  const [sixes, setSixes] = useState(0);
  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns);
  };
  const handleFours = () => {
    const updatedRuns = runs + 4;
    setRuns(updatedRuns);
    setFours(fours + 1);
  };

  const handleSix = () => {
    const updatedRuns = runs + 6;
    setRuns(updatedRuns);
    setSixes(sixes + 1);
  };

  return (
    <div>
      <h2>Score Board</h2>
      <h3>Player: Rohit Sharma</h3>
      {runs >= 50 && <h2>You have made a half century.</h2>}
      {runs >= 100 && (
        <h2>Congratulations!! You have reached golden three figures..</h2>
      )}
      <h4>Score: {runs}</h4>
      <h5>Fours: {fours}</h5>
      <h5>Sixes: {sixes}</h5>
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFours}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
