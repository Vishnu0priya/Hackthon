function showSemester(sem) {
    // Hide all semesters
    const semesters = document.querySelectorAll('.semester');
    semesters.forEach(semester => {
        semester.classList.remove('active');
    });
    // Show the selected semester
    document.getElementById(sem).classList.add('active');
}
function submitFeedback(feedback) {
    // Simulate the submission process (you can replace this with actual submission logic)
    let submissionStatus = "pending";

    // Assuming the submission is processed successfully
    setTimeout(() => {
        submissionStatus = "success";

        if (submissionStatus === "success") {
            console.log("Thank you! Your feedback has been successfully submitted.");
        } else {
            console.log("There was an error submitting your feedback. Please try again.");
        }
    }, 2000); // Simulates a 2-second delay for submission processing
}

// Example usage
const userFeedback = "This is my feedback about the service.";
submitFeedback(userFeedback);
