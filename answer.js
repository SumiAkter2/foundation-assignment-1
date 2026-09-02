// question-1: 1111111111111111111111111111111111111111111111111111111

function describeValue(data) {
  let checkingTruthiness;
  if (data) {
    checkingTruthiness = "truthy";
  } else {
    checkingTruthiness = "falsy";
  }
  return typeof data + " | " + checkingTruthiness;
}

// question-2 :222222222222222222222222222222222222222222222222222222222222222

function getDayType(dayName) {
  switch (dayName.toLowerCase()) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}

//question-3:33333333333333333333333333333333333333333333333333333333333333

function validateUsername(userName) {
  if (userName.length < 4) {
    return "Too Short";
  } else if (userName.includes(" ")) {
    return "No Space Allowed";
  } else if (userName.toLowerCase().includes("admin")) {
    return "Reserved Word";
  }
  return "Available";
}

// question-4:444444444444444444444444444444444444444444444444444444444444

function getCngFare(distance, isNight = false, waitingMinutes=0) {
  let fare;
  if (distance <= 2) {
    fare = 50;
  } else {
    fare = 50 + (distance - 2) * 15;
  }

  if (waitingMinutes) {
    fare = fare + waitingMinutes * 2;
  }
  if (isNight == true) {
    fare = fare + (fare * 20) / 100;
  }
  return fare;
}

//question-5 :55555555555555555555555555555555555555555555555555555555555555555555
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
