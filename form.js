document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("surveyForm");
    const submitButton = document.querySelector("button");

    // Create a popup message box
    const popup = document.createElement("div");
    
    // Style the popup dynamically
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#3E357D"; // Dark purple background
    popup.style.color = "white";
    popup.style.padding = "20px 40px";
    popup.style.borderRadius = "12px"; // Rounded corners
    popup.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.3)";
    popup.style.fontFamily = "'Poppins', sans-serif";
    popup.style.fontSize = "18px";
    popup.style.textAlign = "center";
    popup.style.display = "none"; // Hidden by default
    popup.style.opacity = "0";
    popup.style.transition = "opacity 0.5s ease-in-out";
    document.body.appendChild(popup);

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true; // Flag to check validation
        const formElements = Array.from(form.elements);

        // Validate required fields (text inputs, selects, and checkboxes)
        formElements.forEach((element) => {
            if (
                (element.type === "select-one" && element.hasAttribute("required") && !element.value) ||
                (element.type === "text" && element.hasAttribute("required") && element.value.trim() === "") ||
                (element.type === "checkbox" &&
                    element.name === "content" &&
                    !formElements.some((el) => el.type === "checkbox" && el.checked))
            ) {
                isValid = false;
            }
        });

        if (!isValid) {
            // Show error popup if validation fails
            popup.innerText = "❌ Oops! You have missed something.";
            popup.style.background = "red"; // Red background for error
        } else {
            // Disable button & change appearance for loading effect
            submitButton.innerText = "Submitting...";
            submitButton.style.background = "#888";
            submitButton.style.cursor = "not-allowed";
            submitButton.disabled = true;

            setTimeout(() => {
                submitButton.innerText = "Submit";
                submitButton.style.background = "black";
                submitButton.style.cursor = "pointer";
                submitButton.disabled = false;

                // Show success popup
                popup.innerText = "✅ Well done! Form has been submitted.";
                popup.style.background = "#3E357D"; // Dark purple background for success
                form.reset(); // Reset form after submission
            }, 1500);
        }

        // Show and fade in popup
        popup.style.display = "block";
        setTimeout(() => (popup.style.opacity = "1"), 100);

        // Hide popup after 2.5 seconds
        setTimeout(() => {
            popup.style.opacity = "0"; // Fade-out effect
            setTimeout(() => (popup.style.display = "none"), 500); // Hide after fade-out
        }, 2500);
    });
});
