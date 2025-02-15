document.getElementById("add").addEventListener("click", function() {
    let newSubject = document.createElement("div");
    newSubject.classList.add("subject");
    newSubject.innerHTML = `
        <input type="number" placeholder="Credits" class="credits">
        <select class="grade">
            <option value="10">O</option>
            <option value="9">A+</option>
            <option value="8">A</option>
            <option value="7">B+</option>
            <option value="6">B</option>
            <option value="5">C</option>
            <option value="0">F</option>
        </select>
        <button class="remove">✖</button>
    `;
    document.getElementById("subjects").appendChild(newSubject);

    newSubject.querySelector(".remove").addEventListener("click", function() {
        newSubject.remove();
    });
});

document.getElementById("calculate").addEventListener("click", function() {
    let subjects = document.querySelectorAll(".subject");
    let totalCredits = 0;
    let totalGradePoints = 0;

    subjects.forEach(subject => {
        let credits = parseFloat(subject.querySelector(".credits").value);
        let grade = parseFloat(subject.querySelector(".grade").value);

        if (!isNaN(credits) && !isNaN(grade)) {
            totalCredits += credits;
            totalGradePoints += credits * grade;
        }
    });

    let cgpa = totalGradePoints / totalCredits;
    document.getElementById("result").textContent = isNaN(cgpa) ? "0.00" : cgpa.toFixed(2);
});
