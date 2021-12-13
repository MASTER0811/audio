var btndark = document.querySelector("#btndark");
var btnlight = document.querySelector("#btnlight");

btndark.onclick = function(){
    document.body.classList.toggle("darkmode")
    btndark.style.display = "none";
    btnlight.style.display = "block"
}

btnlight.onclick = function(){
    document.body.classList.toggle("darkmode");
    btndark.style.display = "block";
    btnlight.style.display = "none";
}


var vid = document.getElementById("vid")
var btnplay = document.getElementById("btnplay")
var btnpause = document.getElementById("btnpause")
var btnstop = document.getElementById("btnstop")
var btnfullscreen = document.getElementById("btnfullscreen")
var progress = document.getElementById("progress")
var flur = document.querySelector(".flur")



btnplay.onclick = function(){
    if(vid.paused){
        vid.play()
        btnplay.style.display = "none"
        btnpause.style.display = "block"
    }
    
}
btnpause.onclick = function(){
    if(vid.play()){
        vid.pause()
        btnplay.style.display = "block"
        btnpause.style.display = "none"
    }
}
flur.onclick = function(){
    if(vid.paused){
        vid.play()
        btnplay.style.display = "none"
        btnpause.style.display = "block"
    }else{
        vid.pause()
        btnplay.style.display = "block"
        btnpause.style.display = "none"
    }
}

btnstop.onclick = function(){
    vid.currentTime = 0;
    vid.pause()
    btnplay.style.display = "block"
    btnpause.style.display = "none"
}

btnfullscreen.onclick = function(){
    vid.requestFullscreen()
}
flur.addEventListener("dblclick",function(){
    vid.requestFullscreen()
    if(vid.paused){
        vid.pause()
        btnpause.style.display = "none"
        btnplay.style.display = "block"
    }else{
        vid.play()
        btnpause.style.display = "block"
        btnplay.style.display = "none"
    }
})

vid.addEventListener("timeupdate",function(event){
    progress.value = vid.currentTime / vid.duration;
})



// ==**==          
function intializePlayer(){
	// Set object references
	var seekslider = document.getElementById("seekslider");
	var curtimetext = document.getElementById("curtimetext");
	var durtimetext = document.getElementById("durtimetext");
	// Add event listeners
	seekslider.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
}
window.onload = intializePlayer;
function vidSeek(){
	var seekto = vid.duration * (seekslider.value / 100);
	vid.currentTime = seekto;
}
function seektimeupdate(){
	var nt = vid.currentTime * (100 / vid.duration);
	seekslider.value = nt;
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
}




// var list = ["video/vid0.mp4","video/vid1.mp4","video/vid2.mp4"]

// vid.src = list[0];

const fileupload = document.getElementById("fileupload")
fileupload.addEventListener("change",function(){
    const files = this.files;
    vid.src = URL.createObjectURL(files[0]);
})

