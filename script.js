 function playsound(e){
    Function(e){
     const Audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key"[data-key=${e.keyCode}"]`)
    if (!Audio) return; // stop function from running all together 
 Audio.currentTime=0 // rewind to start
 Audio.play();
 key.classList.add('playing');
  }
}
 function removeTransition(e)
 { if (e.propertyName !=='transform') return; //skip if it is not a transform 
 this.classList.remove('playing') 
     }
 const keys = document.querySelectorAll('.key');
 keys.forEach(key => key.addEventListener('transitionend', removetransition));
 window.addEventListener('keydown',playsound)