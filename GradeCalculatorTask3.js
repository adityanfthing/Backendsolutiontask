function calculateGrade(scores, customScale = null) {
  const defaultScale = {
    A: 90,
    B: 80,
    C: 70,
    D: 60,
    F: 0,
  };

  const gradingScale = customScale || defaultScale; 

  const averageScore =
    scores.reduce((sum, score) => sum + score, 0) / scores.length;

  let finalGrade = "";
  for (const grade in gradingScale) {
    if (averageScore >= gradingScale[grade]) {
      finalGrade = grade;
      break;
    }
  }

  return finalGrade;
}

const inputScores = [85, 92, 78, 95, 88];
console.log(`Input Scores: ${inputScores.join(", ")}`);

const finalGrade = calculateGrade(inputScores);
console.log(`Final Grade: ${finalGrade}`);
