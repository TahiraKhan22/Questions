document.querySelectorAll(".question-btn").forEach(button => {
    button.addEventListener("click", () => {
        const questionText = button.closest(".question").querySelector(".question-text");
        questionText.style.display = questionText.style.display === "block" ? "none" : "block";

        const icons = button.querySelectorAll("i");
        icons.forEach(icon => icon.classList.toggle("hidden"));
    });
});

document.querySelectorAll(".question").forEach(question => {
    const plusIcon = question.querySelector(".plus-icon i");
    const minusIcon = question.querySelector(".minus-icon i");
    minusIcon.classList.add("hidden");
});
