// question-1:

function describeValue(data) {
  let checkingTruthiness;
  if (data) {
    checkingTruthiness = "truthy";
  } else {
    checkingTruthiness = "falsy";
  }
  return typeof data + " | " + checkingTruthiness;
}

// question-2 :

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

//question-3:

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

// question-4:

function getCngFare(distance, isNight = false, waitingMinutes) {
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
