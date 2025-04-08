document.getElementById("videoUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const videoUrl = URL.createObjectURL(file);
        const videoPlayer = document.getElementById("videoPlayer");
        
        // Set video source
        videoPlayer.src = videoUrl;
        
        // Show video section, hide upload section
        document.getElementById("uploadSection").style.display = "none";
        document.getElementById("videoSection").classList.remove("hidden");

        // Sync seek bar with video
        videoPlayer.addEventListener("timeupdate", updateSeekBar);
    }
});

// Play & Pause Controls
function playVideo() {
    document.getElementById("videoPlayer").play();
}

function pauseVideo() {
    document.getElementById("videoPlayer").pause();
}

// Restart Video
function restartVideo() {
    const videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.currentTime = 0;
    videoPlayer.play();
}

// Seek Bar Control
function updateSeekBar() {
    const videoPlayer = document.getElementById("videoPlayer");
    const seekBar = document.getElementById("seekBar");

    seekBar.max = videoPlayer.duration;
    seekBar.value = videoPlayer.currentTime;
}

// Seek Bar Interaction
document.getElementById("seekBar").addEventListener("input", function() {
    document.getElementById("videoPlayer").currentTime = this.value;
});
