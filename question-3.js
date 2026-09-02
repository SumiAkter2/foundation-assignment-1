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

console.log(validateUsername("acbd"));
