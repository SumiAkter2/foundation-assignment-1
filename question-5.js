const getChaseVerdict = (target, scored, ballsLeft) => {
  let runsNeeded = target - scored;
  let requiredRate;
  let verdict;
  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  } else {
    requiredRate = (runsNeeded / ballsLeft) * 6;
    if (requiredRate <= 6) {
      verdict = "Comfortable";
    } else if (requiredRate > 6 && requiredRate <= 12) {
      verdict = "Tough";
    } else {
      verdict = "Almost Impossible";
    }
  }
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
console.log(getChaseVerdict(100, 60, 12));
