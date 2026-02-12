import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";

export default function Result() {
  const navigate = useNavigate();

  const {
    MAX_TIME,
    timeLeft,
    setStarted,
    setCompleted,
    setTimeLeft,
    setPaused,
    setIceActive,
    setIceStage
  } = useGame();

  const attempted = Number(sessionStorage.getItem("attempted")) || 0;
  const correctCount = Number(sessionStorage.getItem("correctCount")) || 0;
  const incorrectCount = Number(sessionStorage.getItem("incorrectCount")) || 0;

  // ✅ ACTUAL GAME QUESTIONS (C + Python + Society + Inspect)
  const questionOrder = JSON.parse(sessionStorage.getItem("questionOrder")) || [];
  const totalQuestions = questionOrder.length || 10 ;

  // ✅ TIME TAKEN ALWAYS MATCHES TIMER DISPLAY
  const timeTakenSeconds = MAX_TIME - timeLeft;

  const minutes = Math.floor(timeTakenSeconds / 60);
  const seconds = timeTakenSeconds % 60;

  const success = correctCount === totalQuestions && timeLeft > 0;

  const handleRestart = () => {
    sessionStorage.clear();

    setStarted(false);
    setCompleted(false);
    setTimeLeft(MAX_TIME);

    setPaused(false);
    setIceActive(false);
    setIceStage(0);

    navigate("/");
  };

  return (
    <div className="result">
      {success ? (
        <h1>🎉 Congratulations! 🎉</h1>
      ) : (
        <h1>🎉 Thankyou For Particiapating </h1>
      )}

      <div className="score-card">
        <h2>Score Card</h2>

        <div className="score-row">
          <span>Attempted</span>
          <span>
            {attempted} / {totalQuestions}
          </span>
        </div>

        <div className="score-row correct">
          <span>Correct</span>
          <span>{correctCount}</span>
        </div>

        <div className="score-row incorrect">
          <span>Incorrect</span>
          <span>{incorrectCount}</span>
        </div>

        <div className="score-row time">
          <span>Time Taken</span>
          <span>
            {minutes} min {seconds.toString().padStart(2, "0")} sec
          </span>
        </div>
      </div>

      <button
        className="restart-btn"
        onClick={handleRestart}
        style={{ marginTop: "28px" }}
      >
        Restart Challenge
      </button>
    </div>
  );
}
