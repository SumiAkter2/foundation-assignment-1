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
  if ((isNight == true)) {
    fare = fare + (fare * 20) / 100;
  }
  return fare;
}

console.log(getCngFare( 1));
