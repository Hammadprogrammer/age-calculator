function calculateAge() {
    var dob = new Date(document.getElementById("dob").value);
    var currentDate = new Date(document.getElementById("currentDate").value);
    var age = currentDate.getFullYear() - dob.getFullYear();
    var m = currentDate.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById("result").innerHTML = "Your age is: " + age + " years old.";
}