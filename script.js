let currentQ = 0;
let userAnswers = [];

const questions = [
  { q: "Government should increase military spending.", opts: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
  { q: "India should focus more on renewable energy.", opts: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
  { q: "Privatization is good for the economy.", opts: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
  { q: "Subsidies on fuel should be increased.", opts: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] },
  { q: "Caste-based reservations should be continued.", opts: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"] }
];

function loadQuestion() {
  const container = document.getElementById("quiz-container");
  if (currentQ >= questions.length) {
    localStorage.setItem("userScores", JSON.stringify(userAnswers));
    window.location.href = "results.html";
    return;
  }
  const q = questions[currentQ];
  document.getElementById("question").innerText = q.q;
  const optsDiv = document.getElementById("options");
  optsDiv.innerHTML = "";

  q.opts.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      userAnswers.push(index + 1); // 1 to 5
      currentQ++;
      loadQuestion();
    };
    optsDiv.appendChild(btn);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("quiz-container")) loadQuestion();
});
