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
