function speak(){
    let synth = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(`${textbox.value}`);
 
    synth.speak(voice);
}
const recognition =  new webkitSpeechRecognition();
recognition.lang = 'en-us';
recognition.interimResults = true;
recognition.continuous = true;

document.getElementById("start-btn")
.onclick = () => recognition.start();


document.getElementById("stop-btn")
.onclick = () => recognition.stop();

recognition.onresult = event => {
output.value = event.results[event.results.length - 1][0].transcript;
}
navigator.mediaDevices.getUserMedia({ audio: true });
