document.addEventListener("DOMContentLoaded", function () {
    var arrowIcons = document.getElementsByClassName("arrow-icon");

    for (var i = 0; i < arrowIcons.length; i++) {
        arrowIcons[i].addEventListener('click', function () {
            var currentQuestionIndex = Number(this.id) - 1;
            var allHiddenAnswers = document.getElementsByClassName("answer");
            var allQuestions = document.getElementsByClassName("title");
            if (allHiddenAnswers[currentQuestionIndex].style.display == "none") {
                allHiddenAnswers[currentQuestionIndex].style.display = "block";
                this.style.transform = "rotate(180deg)";
                allQuestions[currentQuestionIndex].style.fontWeight = "900";
            }
            else {
                allHiddenAnswers[currentQuestionIndex].style.display = "none";
                this.style.transform = "rotate(0deg)";
                allQuestions[currentQuestionIndex].style.fontWeight = "400";

            }
        });
    }
});
