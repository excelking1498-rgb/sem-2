function calculateResult() {
    let n= document.getElementById("subject").value;
    let total  = 0;
    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for student " + i));
        total= total+ marks;
    }
    let average = total / n;
    let grade;
    let result;
    if (average >= 90) {
        grade = "A+";
    }
    else if (average >= 75) {
        grade = "A";
    }
    else if (average >= 60) {
        grade = "B";
    }
    else if (average >= 50) {
        grade = "C";
    }
    else if (average >= 40) {
        grade = "D";
        result = "pass";
    }
    else {
        grade = "F";
        result = "fail";
    }
    document.getElementById("result").innerHTML =
    "Total Marks: " + total + "<br>" +
     "Average Marks: " + average.toFixed(2) + "<br>" + "Grade: " + grade + "<br>" + "Result: " + result;
}