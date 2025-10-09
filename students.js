let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  let scoreData = Object.keys(scores).map(student => scores[student].scores);

  // transform the above score objects into an array of arrays for exam scores
  let examData = scoreData.map(score => score.exams);

  return {
    studentGrades: scoreData.map(scoreObj => getStudentScore(scoreObj)),
    exams: getExamSummary(examData),
  };
}

function getStudentScore(scoreObj) {
  const examsAvg = scoreObj.exams.reduce((sum, n) => sum + n, 0) / scoreObj.exams.length;
  const exercisesSum = scoreObj.exercises.reduce((sum, n) => sum + n, 0);

  const percentage = Math.round(examsAvg * 0.65 + exercisesSum * 0.35);
  return `${percentage} (${generateLetter(percentage)})`
}

function generateLetter(number) {
  if (number >= 93) {
    return 'A'
  } else if (number >= 85) {
    return 'B'
  } else if (number >= 77) {
    return 'C'
  } else if (number >= 69) {
    return 'D'
  } else if (number >= 60) {
    return 'E'
  } else {
    return 'F'
  }
}

function getExamSummary(examData) {
  const examsCount = examData[0].length;

  return Array.from({ length: examsCount }, (_, i) => {
    const scores = examData.map(arr => arr[i]);
    const sum = scores.reduce((s, n) => s + n, 0);
    return {
      average: parseFloat((sum / scores.length).toFixed(1)),
      minimum: Math.min(...scores),
      maximum: Math.max(...scores),
    };
  });
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }