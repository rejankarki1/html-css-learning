const songList = [
    { id: 1, title: "Top 50 - Global", artist: "Global Hits", img: "./assets/card1img.jpeg", file: "song1.mp3" },
    { id: 2, title: "Top 50 - Nepal", artist: "Nepal Charts", img: "./assets/nepal.png", file: "song2.mp3" },
    { id: 3, title: "Top 50 - USA", artist: "USA Hot 100", img: "./assets/usa.png", file: "song3.mp3" }
];
let isPlaying = false;
let currentSongIndex = 0;
const audio = new Audio(); // Modern JS Audio API
const cardContainer = document.querySelector(".cards-container");

const renderCards = () => {
    cardContainer.innerHTML = songList.map((song, index) => `
        <div class="card" onclick="playSong(${index})">
            <img src="${song.img}" class="card-img">
            <p class="card-title">${song.title}</p>
            <p class="card-info">${song.artist}</p>
        </div>
    `).join('');
};

const playSong = (index) => {
    currentSongIndex = index;
    const { title, artist, img, file } = songList[index];

    // Update the UI at the bottom
    document.querySelector(".track-name").innerText = title;
    document.querySelector(".track-artist").innerText = artist;
    document.querySelector(".album-cover").src = img;

    // Play the audio
    audio.src = file;
    audio.play();
    isPlaying = true;
    updatePlayButton();
};

const playBtn = document.querySelector(".play-btn");

const updatePlayButton = () => {
    if (isPlaying) {
        playBtn.classList.replace("fa-circle-play", "fa-circle-pause");
    } else {
        playBtn.classList.replace("fa-circle-pause", "fa-circle-play");
    }
};

playBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying; // Toggle state
    updatePlayButton();
});

// Initialize the app
renderCards();
