var toggleSkillsButton = document.getElementById('skills');
var skillsList = document.getElementById('skills-list');
if (toggleSkillsButton && skillsList) {
    toggleSkillsButton.addEventListener('click', function () {
        skillsList.classList.toggle('hidden');
        skillsList.classList.toggle('visible');
    });
}
else {
    console.error('Hehe');
}
// Generate Unique URL for the User
function generateUniqueURL(username) {
    var uniqueUrl = "".concat(username, ".vercel.app/resume");
    return uniqueUrl;
}
// Share Link Logic
var shareButton = document.getElementById('share-link');
shareButton.addEventListener('click', function () {
    var username = 'Iffat ul Fatima'; // Fetch the username dynamically as per your logic
    var uniqueUrl = generateUniqueURL(username);
    alert("Share this URL: ".concat(uniqueUrl));
});
document.addEventListener('DOMContentLoaded', function () {
    var downloadPDFButton = document.getElementById('downloadPDFButton');
    downloadPDFButton.addEventListener('click', function () {
        var element = document.getElementById('generatedResume');
        var options = {
            margin: 0.5,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(element).set(options).save();
    });
});
