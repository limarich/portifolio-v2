function getAge() {
  const field = document.getElementById("ageDisplay");
  const birthDay = new Date("2001-03-06");
  const currentYear = new Date();

  let age = currentYear.getFullYear() - birthDay.getFullYear();

  if (
    currentYear.getMonth() < birthDay.getMonth() ||
    (currentYear.getMonth() === birthDay.getMonth() &&
      currentYear.getDay() < birthDay.getDay())
  ) {
    age--;
  }

  field.innerHTML = age;
}

window.addEventListener("load", getAge);
