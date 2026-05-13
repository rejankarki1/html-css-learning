// 1. Mock Data (Simulating a database)
const songLibrary = [
    { name: "Top 50 - Global", artist: "Spotify", img: "./assets/card1img.jpeg" },
    { name: "Trending #1", artist: "Kendrick Lamar", img: "./assets/card1.png" },
    { name: "After Hours", artist: "The Weeknd", img: "./assets/card2.png" },
    { name: "Drive Mix", artist: "Nightly", img: "./assets/card3.png" },
    { name: "Rock Classics", artist: "Various Artists", img: "./assets/card4.png" }
];

// 2. Select Elements
const playBtn = document.querySelector('.play-btn');
const albumCover = document.querySelector('.album-cover');
const trackName = document.querySelector('.track-name');
const trackArtist = document.querySelector('.track-artist');
const cards = document.querySelectorAll('.card');

// 3. Play/Pause Toggle Logic
let isPlaying = false;

function setPlayState(playing) {
    isPlaying = playing;

    if (isPlaying) {
        playBtn.classList.replace('fa-circle-play', 'fa-circle-pause');
        console.log('Music started');
    } else {
        playBtn.classList.replace('fa-circle-pause', 'fa-circle-play');
        console.log('Music stopped');
    }
}

playBtn.addEventListener('click', () => {
    setPlayState(!isPlaying);
});

// 4. "Now Playing" Switcher
cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Grab data from the clicked card's elements
        const newImg = card.querySelector('.card-img').src;
        const newTitle = card.querySelector('.card-title').textContent;

        // Update the bottom player DOM
        albumCover.src = newImg;
        trackName.textContent = newTitle;
        trackArtist.textContent = 'Playing from Library';

        // Auto-play when a song is selected
        setPlayState(true);
    });
});

// 5. Quit shortcut:
// Press "q" or "Escape" to stop playback quickly.
document.addEventListener('keydown', (event) => {
    const pressedKey = event.key.toLowerCase();

    if (pressedKey === 'q' || event.key === 'Escape') {
        setPlayState(false);
        console.log('Quit action: playback stopped');
    }
});

// 6. Async/Await Example: Simulating a "Loading" effect
async function loadApp() {
    console.log('Fetching songs...');

    // Create a custom delay (Promise)
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));

    try {
        await delay(1500); // Wait 1.5 seconds
        console.log('Songs loaded successfully!');
        // Here you could dynamically generate HTML cards,
        // but for now, we'll just fade the body in.
        document.body.style.opacity = '1';
    } catch (error) {
        console.error('Failed to load songs', error);
    }
}

// Set initial opacity to 0 in JS (or CSS) to see the effect
document.body.style.transition = 'opacity 1s ease';
loadApp();
