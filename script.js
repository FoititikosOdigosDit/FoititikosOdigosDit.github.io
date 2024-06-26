document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});


// Function to open the popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Open the popup when the page loads
window.onload = function() {
    openPopup();
};
