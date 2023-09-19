document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audioPlayer");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const showListBtn = document.getElementById("showListBtn");
    const loopBtn = document.getElementById("loopBtn");
    const albumArt = document.getElementById("albumArt");
    const songname=document.getElementById("songname");
    const listsong=document.getElementById("myDIV");

    const songs = ["downtown.mpeg", "lahore.mpeg","rani.mpeg"];
    const songTitles = ["Downtown", "Lahore","Nach meri Rani"];
    const albumArtPaths = ["downtown.jpg", "lahore.jpg","rani.jpg"];
    const songlist=["Downtown","Lahore","Nach meri rani"];
    let currentSongIndex = 0;

    function playPause() {
        if (audio.paused) {
            audio.play();
           ;
        } else {
            audio.pause();
          ;
        }
    }

    function playNext() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        audio.src = songs[currentSongIndex];
        audio.play();
        songname.innerHTML=songlist[currentSongIndex];
     
        albumArt.src = albumArtPaths[currentSongIndex];
    }

    function playPrevious() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        audio.src = songs[currentSongIndex];
        audio.play();
        songname.innerHTML=songlist[currentSongIndex];
        albumArt.src = albumArtPaths[currentSongIndex];
    }

 
    function toggleSongList() {
        const songList = document.getElementById("songList");
        if (songList.style.display === "none" || songList.style.display === ""|| listsong.style.display === "none") {
            listsong.style.display="block";
            songList.style.display = "block";
           
        } else {
            listsong.style.display="none";
            songList.style.display = "none";
            
        }
    }

    function displaySongList() {
        toggleSongList();
        const songList = document.getElementById("songList");
        songList.innerHTML = "";
        for (let i = 0; i < songs.length; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = songTitles[i];
            listItem.addEventListener("click", function () {
                currentSongIndex = i;
                audio.src = songs[currentSongIndex];
                audio.play();
                songname.innerHTML=songlist[currentSongIndex];
                albumArt.src = albumArtPaths[currentSongIndex];
            });
            songList.appendChild(listItem);
        }
    }

        function myFunction() {
            var element = document.getElementById("myDIV");
            element.classList.toggle("mystyle");
         
            }

    playPauseBtn.addEventListener("click", playPause);
    nextBtn.addEventListener("click", playNext);
    prevBtn.addEventListener("click", playPrevious);
  
    showListBtn.addEventListener("click", displaySongList);


});
