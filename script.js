// Friendship Day Greeting JavaScript

// DOM Elements
const floatingHearts = document.getElementById('floatingHearts');
const friendshipCard = document.getElementById('friendshipCard');
const cardFront = document.getElementById('cardFront');
const cardInside = document.getElementById('cardInside');
const memoryModal = document.getElementById('memoryModal');
const friendshipSong = document.getElementById('friendshipSong');

// Friendship Statistics
let friendshipYears = 0;
let memoriesCount = 0;
let laughterCount = 0;

// Memory Data
const memories = {
    1: {
        title: "First Meeting",
        description: "The day we first met and became friends. Little did we know this would be the beginning of a beautiful friendship that would last a lifetime!",
        emoji: "🤝"
    },
    2: {
        title: "Birthday Celebrations",
        description: "All those amazing birthday parties we celebrated together. The cake, the laughter, the surprises - every moment was magical!",
        emoji: "🎉"
    },
    3: {
        title: "Adventures Together",
        description: "Our exciting adventures and trips together. From road trips to hiking, every adventure made our friendship stronger!",
        emoji: "🌴"
    },
    4: {
        title: "Coffee Talks",
        description: "Those endless coffee conversations where we shared our dreams, fears, and everything in between. You always knew how to listen!",
        emoji: "☕"
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    animateStats();
    setupEventListeners();
    showWelcomeMessage();
});

// Create floating hearts animation
function createFloatingHearts() {
    const hearts = ['💖', '💝', '💕', '💗', '💓', '💞'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = Math.random() * 2 + 's';
        
        floatingHearts.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 6000);
    }, 300);
}

// Animate statistics
function animateStats() {
    const targetYears = 5; // Change this to your actual friendship years
    const targetMemories = 100;
    const targetLaughter = 1000;
    
    const yearsElement = document.getElementById('friendshipYears');
    const memoriesElement = document.getElementById('memoriesCount');
    const laughterElement = document.getElementById('laughterCount');
    
    let currentYears = 0;
    let currentMemories = 0;
    let currentLaughter = 0;
    
    const interval = setInterval(() => {
        if (currentYears < targetYears) currentYears++;
        if (currentMemories < targetMemories) currentMemories += 2;
        if (currentLaughter < targetLaughter) currentLaughter += 20;
        
        yearsElement.textContent = currentYears;
        memoriesElement.textContent = currentMemories;
        laughterElement.textContent = currentLaughter;
        
        if (currentYears >= targetYears && currentMemories >= targetMemories && currentLaughter >= targetLaughter) {
            clearInterval(interval);
        }
    }, 100);
}

// Setup event listeners
function setupEventListeners() {
    // Close modal when clicking outside
    memoryModal.addEventListener('click', function(e) {
        if (e.target === memoryModal) {
            closeMemory();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMemory();
        }
    });
}

// Show welcome message
function showWelcomeMessage() {
    setTimeout(() => {
        showNotification('Welcome to your Friendship Day greeting! 💖', 'success');
    }, 1000);
}

// Open friendship card
function openCard() {
    cardFront.style.display = 'none';
    cardInside.classList.add('active');
    
    // Add confetti effect
    createConfetti();
    
    showNotification('Opening your special message... 💝', 'info');
}

// Close friendship card
function closeCard() {
    cardInside.classList.remove('active');
    cardFront.style.display = 'block';
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#667eea', '#ffd700', '#28a745', '#ff4757'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            confetti.style.animation = 'confettiFall 3s linear forwards';
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 50);
    }
}

// Add confetti animation to CSS
const confettiCSS = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;

const style = document.createElement('style');
style.textContent = confettiCSS;
document.head.appendChild(style);

// Send virtual hug
function sendVirtualHug() {
    showNotification('🤗 Sending you a big virtual hug! 🤗', 'success');
    
    // Create hug animation
    const hug = document.createElement('div');
    hug.innerHTML = '🤗';
    hug.style.position = 'fixed';
    hug.style.fontSize = '4rem';
    hug.style.left = '50%';
    hug.style.top = '50%';
    hug.style.transform = 'translate(-50%, -50%)';
    hug.style.zIndex = '1000';
    hug.style.animation = 'hugAnimation 2s ease-out forwards';
    hug.style.pointerEvents = 'none';
    
    document.body.appendChild(hug);
    
    setTimeout(() => {
        if (hug.parentNode) {
            hug.parentNode.removeChild(hug);
        }
    }, 2000);
}

// Add hug animation to CSS
const hugCSS = `
    @keyframes hugAnimation {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
        }
    }
`;

const hugStyle = document.createElement('style');
hugStyle.textContent = hugCSS;
document.head.appendChild(hugStyle);

// Share memories
function shareMemories() {
    showNotification('📸 Sharing our beautiful memories together!', 'info');
    
    // Simulate sharing
    setTimeout(() => {
        showNotification('Memories shared successfully! 💕', 'success');
    }, 2000);
}

// Play friendship song
function playFriendshipSong() {
    if (friendshipSong.paused) {
        friendshipSong.play();
        showNotification('🎵 Playing our friendship song...', 'info');
    } else {
        friendshipSong.pause();
        showNotification('⏸️ Music paused', 'info');
    }
}

// Show memory modal
function showMemory(memoryId) {
    const memory = memories[memoryId];
    if (memory) {
        document.getElementById('memoryTitle').textContent = memory.title;
        document.getElementById('memoryDescription').textContent = memory.description;
        document.querySelector('.memory-image').textContent = memory.emoji;
        
        memoryModal.style.display = 'block';
        showNotification(`📸 Opening memory: ${memory.title}`, 'info');
    }
}

// Close memory modal
function closeMemory() {
    memoryModal.style.display = 'none';
}

// Share on social media
function shareOnSocial() {
    if (navigator.share) {
        navigator.share({
            title: 'Happy Friendship Day! 💖',
            text: 'Check out this beautiful Friendship Day greeting!',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        const text = 'Happy Friendship Day! 💖 Check out this beautiful greeting: ' + url;
        
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                showNotification('Link copied to clipboard! 📋', 'success');
            });
        } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            showNotification('Link copied to clipboard! 📋', 'success');
        }
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'error' ? '#ff4757' : type === 'info' ? '#667eea' : '#28a745'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add special effects on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.header');
    const speed = scrolled * 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add click effects
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('action-btn') || e.target.classList.contains('gallery-item')) {
        createRippleEffect(e);
    }
});

// Create ripple effect
function createRippleEffect(event) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = event.clientX + 'px';
    ripple.style.top = event.clientY + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '1000';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

// Add ripple animation to CSS
const rippleCSS = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const rippleStyle = document.createElement('style');
rippleStyle.textContent = rippleCSS;
document.head.appendChild(rippleStyle);

// Add loading screen
window.addEventListener('load', function() {
    const loading = document.querySelector('.loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 500);
    }
});

// Export functions for global access
window.openCard = openCard;
window.closeCard = closeCard;
window.sendVirtualHug = sendVirtualHug;
window.shareMemories = shareMemories;
window.playFriendshipSong = playFriendshipSong;
window.showMemory = showMemory;
window.closeMemory = closeMemory;
window.shareOnSocial = shareOnSocial; 