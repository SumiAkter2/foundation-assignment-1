// console.log("heelo");

function describeValue(data) {
  let checkingTruthiness;
  if (data) {
    checkingTruthiness = "truthy";
  } else {
    checkingTruthiness = "falsy";
  }
  return typeof data + " | " + checkingTruthiness;
}

console.log(describeValue(undefined));
