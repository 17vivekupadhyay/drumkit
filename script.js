const sounds = ["boo", "clap", "tada", "wrong"]

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML = sound;

    btn.addEventListener("click", () => {
        document.getElementById(sound).play()
    })

    document.getElementById('boxes').append(btn);
})

function stopPlaying(){
    sounds.forEach(sound =>{
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    })
}