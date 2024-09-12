
const toggleSkillsButton = document.getElementById('skills');
const skillsList = document.getElementById('skills-list');

if (toggleSkillsButton && skillsList) {
    toggleSkillsButton.addEventListener('click', () => {
        skillsList.classList.toggle('hidden');
        skillsList.classList.toggle('visible');
    });
} else {
    console.error('Hehe');
}
// Generate Unique URL for the User
function generateUniqueURL(username: string) {
    const uniqueUrl = `${username}.vercel.app/resume`;
    return uniqueUrl;
}

// Share Link Logic
const shareButton = document.getElementById('share-link') as HTMLButtonElement;
shareButton.addEventListener('click', () => {
    const username = 'Iffat ul Fatima'; // Fetch the username dynamically as per your logic
    const uniqueUrl = generateUniqueURL(username);
    alert(`Share this URL: ${uniqueUrl}`);
});
