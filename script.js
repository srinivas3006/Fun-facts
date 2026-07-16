document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    const factText = document.getElementById('fact-text');
    const generateBtn = document.getElementById('generate-btn');
    const copyBtn = document.getElementById('copy-btn');

    const API_URL = 'https://uselessfacts.jsph.pl/api/v2/facts/random?language=en';

    async function fetchRandomFact() {
        // UI Loading State
        generateBtn.disabled = true;
        generateBtn.innerHTML = `<span>Loading...</span><i data-lucide="loader-2" class="spinner"></i>`;
        lucide.createIcons();
        
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Network response was not ok');
            
            const data = await response.json();
            
            // Update Text
            factText.textContent = data.text;
            
            // Enable Copy Button
            copyBtn.disabled = false;
        } catch (error) {
            factText.textContent = "Oops! Couldn't grab a fact right now. Check your connection and try again.";
            copyBtn.disabled = true;
            console.error('Error fetching fact:', error);
        } finally {
            // Restore Button State
            generateBtn.disabled = false;
            generateBtn.innerHTML = `<span>Generate Fact</span><i data-lucide="arrow-right"></i>`;
            lucide.createIcons();
        }
    }

    async function copyToClipboard() {
        const textToCopy = factText.textContent;
        try {
            await navigator.clipboard.writeText(textToCopy);
            
            // Temporary visual feedback
            const originalIcon = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i data-lucide="check" style="color: #22c55e;"></i>`;
            lucide.createIcons();
            
            setTimeout(() => {
                copyBtn.innerHTML = originalIcon;
                lucide.createIcons();
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }

    generateBtn.addEventListener('click', fetchRandomFact);
    copyBtn.addEventListener('click', copyToClipboard);
});
