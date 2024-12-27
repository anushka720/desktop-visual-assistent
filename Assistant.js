let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")


function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "en-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("good morning everyone")
    }
    else if (hours >= 12 && hours < 16) {
        speak("good afternoon everyone")
    } else {
        speak("good evening everyone")
    }
}
window.addEventListener('load', () => {
    wishMe()
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})
function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"

    if (message.includes("hello") || message.includes("hii")) {
        speak("hello, how can I help you?")
    }

    else if (message.includes("thank you") || message.includes("thanks")) {
        speak("welcome my dear you")
    }
        
    else if (message.includes("who is divyanshu") || message.includes("do you love divyanshu")) {
        speak("divyanshu is the love of mine but he is not good pagal hai wo")
    }

    else if (message.includes("introduce yourself") || message.includes("who are you")) {
        speak("I'm a virtual Assistant and designed by Anushka, I'm here to help you!!")
    }

    else if (message.includes("open YouTube")) {
        speak("opening youtube")
        window.open("https://www.youtube.com/")
    }
    else if (message.includes("open google") || message.includes("open chrome")) {
        speak("opening google")
        window.open("https://www.google.com/")
    }

    else if (message.includes("open calculator")) {
        speak("opening calculator")
        window.open("calculator://")
    }

    else if (message.includes("open whatsapp")) {
        speak("opening whatsapp")
        window.open("https://web.whatsapp.com/")
    }

    else if (message.includes("time")) {
        let time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })
        speak(time)
    }

    else if (message.includes("date")) {
        let date = new Date().toLocaleString(undefined, { day: "numeric", month: "short" })
        speak(date)
    }

    else {
        let finalText = "this is what I found on internet regarding" + message.replace("Era", "") || message.replace("tera", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message}`)
    }

}
