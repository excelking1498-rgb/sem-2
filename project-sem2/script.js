let isPlaying = false;

function playPause(){

    const btn = document.getElementById("playBtn");

    if(isPlaying){
        btn.innerHTML = "▶";
        isPlaying = false;
    }
    else{
        btn.innerHTML = "⏸";
        isPlaying = true;
    }
}

function nextSong(){
    alert("Next Song");
}

function prevSong(){
    alert("Previous Song");
}