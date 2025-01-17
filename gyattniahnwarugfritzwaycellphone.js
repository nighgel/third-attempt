document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundColor = "#0d1b2a";  // Deep Blue
    document.body.style.color = "#f5f5f5";  // Light color for text

    const sections = document.querySelectorAll('section, header, footer, .section-content-justin, .section-content-newyear, .section-content-feastday, .section-content-presscon, .section-content-literature, .section-content-beforeliterature');
    
    sections.forEach(section => {
        section.style.backgroundColor = "#1b263b";  // Dark Blue for sections
        section.style.border = "2px solid gold";  // Gold border for sections
        section.style.padding = "20px";  // Padding for sections
        section.style.borderRadius = "10px";  // Rounded corners
    });
});
