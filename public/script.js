// DOM Elements
const chatMessages = document.getElementById('chatMessages');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const voiceBtn = document.getElementById('voiceBtn');
const voiceStatus = document.getElementById('voiceStatus');
const typingIndicator = document.getElementById('typingIndicator');

// State
let isListening = false;
let recognition = null;

// Initialize Web Speech API (placeholder - no actual logic)
function initializeSpeechRecognition() {
    // Check if browser supports Web Speech API
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        // Placeholder for SpeechRecognition initialization
        // const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        // recognition = new SpeechRecognition();
        
        console.log('Web Speech API is supported');
        // Additional configuration would go here
    } else {
        console.log('Web Speech API is not supported in this browser');
    }
}

// Voice Button Click Handler (UI only)
voiceBtn.addEventListener('click', () => {
    if (!isListening) {
        startListening();
    } else {
        stopListening();
    }
});

// Start Listening (UI changes only)
function startListening() {
    isListening = true;
    voiceBtn.classList.add('active');
    voiceStatus.style.display = 'flex';
    
    // Show mic-off icon
    const micIcon = voiceBtn.querySelector('.mic-icon');
    const micOffIcon = voiceBtn.querySelector('.mic-off-icon');
    micIcon.style.display = 'none';
    micOffIcon.style.display = 'block';
    
    // Placeholder for actual speech recognition start
    console.log('Started listening...');
    
    // Simulate voice input after 3 seconds (for demo purposes)
    setTimeout(() => {
        messageInput.value = 'This is a sample voice input';
        stopListening();
    }, 3000);
}

// Stop Listening (UI changes only)
function stopListening() {
    isListening = false;
    voiceBtn.classList.remove('active');
    voiceStatus.style.display = 'none';
    
    // Show mic icon
    const micIcon = voiceBtn.querySelector('.mic-icon');
    const micOffIcon = voiceBtn.querySelector('.mic-off-icon');
    micIcon.style.display = 'block';
    micOffIcon.style.display = 'none';
    
    // Placeholder for actual speech recognition stop
    console.log('Stopped listening...');
}

// Send Message Handler
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Send Message Function (UI only)
function sendMessage() {
    const message = messageInput.value.trim();
    
    if (message === '') return;
    
    // Add user message to chat
    addMessage(message, 'user');
    
    // Clear input
    messageInput.value = '';
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate bot response after 2 seconds (placeholder)
    setTimeout(() => {
        hideTypingIndicator();
        addMessage('This is a placeholder response. Actual AI logic would go here.', 'bot');
    }, 2000);
}

// Add Message to Chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const currentTime = new Date().toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
    });
    
    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            </div>
            <div class="message-content">
                <div class="message-bubble">${text}</div>
                <span class="message-time">${currentTime}</span>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">
                <div class="message-bubble">${text}</div>
                <span class="message-time">${currentTime}</span>
            </div>
            <div class="message-avatar user-avatar">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

// Show Typing Indicator
function showTypingIndicator() {
    typingIndicator.style.display = 'flex';
    scrollToBottom();
}

// Hide Typing Indicator
function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

// Scroll to Bottom of Chat
function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Text-to-Speech Function (placeholder)
function speakText(text) {
    // Placeholder for Web Speech API synthesis
    if ('speechSynthesis' in window) {
        console.log('Text-to-Speech would speak:', text);
        // const utterance = new SpeechSynthesisUtterance(text);
        // window.speechSynthesis.speak(utterance);
    } else {
        console.log('Text-to-Speech is not supported');
    }
}

// Settings Button Handler (placeholder)
document.querySelector('.settings-btn').addEventListener('click', () => {
    console.log('Settings clicked - placeholder for settings modal');
    alert('Settings functionality would be implemented here');
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeSpeechRecognition();
    console.log('AI Chatbot UI initialized');
    
    // Focus on input field
    messageInput.focus();
});

// Placeholder functions for Web Speech API integration
// These would be implemented with actual logic in production

function handleSpeechResult(transcript) {
    // Placeholder for handling speech recognition results
    messageInput.value = transcript;
    console.log('Speech result:', transcript);
}

function handleSpeechError(error) {
    // Placeholder for handling speech recognition errors
    console.error('Speech recognition error:', error);
    stopListening();
}

function handleSpeechEnd() {
    // Placeholder for handling speech recognition end
    console.log('Speech recognition ended');
    stopListening();
}