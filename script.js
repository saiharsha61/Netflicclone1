// Get all FAQ question buttons
const faqQuestions = document.querySelectorAll('.faq-question');

// Add a click event listener to each question
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // The parent <li> element contains both the question and answer
        const listItem = question.parentElement;

        // Toggle the 'active' class on the list item
        listItem.classList.toggle('active');
    });
});
