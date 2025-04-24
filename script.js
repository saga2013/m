let audio = document.getElementById('audio')
let title = document.getElementById('title')
let select = document.getElementById('select')
let progress = document.getElementById('prog')
let cover = document.getElementById('cover');

let music = [
    {
        name:  'world war me.mp3',
        img: 'world.jpg'
    },
    {
        name:  'Black Sunrise.mp3',
        img: 'black sunrise.jpg'
    }, 
    {
        name:  'Discord.mp3',
        img: 'discord.jpg'
    },
]

function updateTitle(){
    title.textContent = music[i].name.replace('.mp3', '');
}

function updateCover() {
  cover.src = music[i].img;
}


let i = 0
let inter;
function playAudio(){
    audio.src = music[i].name;
    audio.play();
    updateCover()
    updateTitle()
    clearInterval(inter)
    inter=setInterval(() => {
        const percent = (audio.currentTime / audio.duration) * 100; progress.style.width = `${percent}%`;
    }, 1000)
    


}
function song(index) {
    i = parseInt(index);
    playAudio();
}



function pauseAudio(){
    audio.pause()

    console.log(audio.currentTime);
    console.log(audio.duration);
    const percent = (audio.currentTime / audio.duration) * 100; progress.style.width = `${percent}%`;
    console.log(percent);

}

function nextAudio(){
    i++;
    audio.src= music[i].name;
    audio.play()
    updateTitle()
    updateCover()
}

function previous(){
    i--;
    audio.src= music[i].name;
    audio.play()
    updateTitle()
    updateCover()
}
