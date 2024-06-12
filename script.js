document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPassword);
document.getElementById('refreshBtn').addEventListener('click', () => location.reload());
document.getElementById('darkModeSwitch').addEventListener('change', toggleDarkMode);


function generatePassword() {
    const length = document.getElementById('length').value;
    const useLetters = document.getElementById('letters').checked;
    const useMixedCase = document.getElementById('mixedCase').checked;
    const usePunctuation = document.getElementById('punctuation').checked;
    const useSpecialChars = document.getElementById('specialChars').checked;
    
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const punctuation = '.,;:?!';
    const specialChars = '!@#$%^&*()_+[]{}|;:<>,.?/';


    let charSet = '';
    
    if (useLetters) {
        charSet += lowerCaseLetters;
        if (useMixedCase) {
            charSet += upperCaseLetters;
        }
    }
    if (usePunctuation) {
        charSet += punctuation;
    }
    if (useSpecialChars) {
        charSet += specialChars;
    }
    
    if (charSet === '') {
        alert('Please select at least one character type.');
        return;
    }
    
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    
    document.getElementById('passwordOutput').textContent = password;
}


function copyPassword() {
    const passwordOutput = document.getElementById('passwordOutput').textContent;
    if (passwordOutput) {
        navigator.clipboard.writeText(passwordOutput).then(() => {
            alert('Password copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy password: ', err);
        });
    } else {
        alert('No password to copy');
    }
}


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

