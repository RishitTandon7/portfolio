// Array of designations to loop through
const designations = ['Full Stack Developer'];

// Function to handle typing animation
function typeDesignation() {
    let index = 0;
    const typingAnimation = document.querySelector('.typing-animation');

    function typeWords(words) {
        let i = 0;
        const interval = setInterval(() => {
            typingAnimation.textContent += words[i];
            i++;
            if (i === words.length) {
                clearInterval(interval);
                setTimeout(() => {
                    typingAnimation.textContent = '';
                }, 2000); // Time to display each designation before removing
            }
        }, 500); // Time interval between typing each word
    }

    const interval = setInterval(() => {
        const designation = designations[index].split(' ');
        typeWords(designation);
        if (index === designations.length - 1) {
            index = 0;
        } else {
            index++;
        }
    }, 4000); // Total time including typing and removing animation
}

// Start the typing animation
typeDesignation();