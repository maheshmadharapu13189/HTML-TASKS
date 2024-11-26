let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice")


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text);
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1;
    text_speak.lang="en-GB";
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day =new Date()
    let hours=day.getHours()
    
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good After noon Sir")
    }
    else{
        speak("good eving sir")
    }

}
window.addEventListener('load', () => {
    wishMe();
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new speechRecognition();
recognition.onresult=(event)=>{
    let currentIndex= event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
//console.log(event)
takeCommand(transcript.toLowerCase())
}
btn.addEventListener('click',()=>{
    recognition.start()
    btn.style.display="none";
    voice.style.display="block";
})
function takeCommand(message){
    btn.style.display="flex";
    voice.style.display="none";
    if(message.includes("hello") || message.includes("hey") ||message.includes("hai") ){
        speak("hello sir, what can i help you")
    }else if(message.includes("who are you") ){
        speak("i am virtual Assistant , create by Mahesh")
    }else if(message.includes("open youtube") ){
        speak("opening youtube")
        window.open("https://www.youtube.com","_blank")
    }else if(message.includes("open google")){
        speak("opening goolgle")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("what is time")){
       let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
       speak(time)
    }
    else if(message.includes("what is date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
     }
    else{
        speak(`this is what i found on internet regarding ${message.replace("Mahi","")}`)
        window.open(`https://www.google.com/search?q=${message}`);
    }


}