/**
 * NHAMULO | DIGITAL PRODUCTION 2026
 * Concept & Development: Nhlamulo Baloyi (itzurbouylilnb)
 */

const CONFIG = {
    year: "2026",
    creator: { name: "Nhlamulo Baloyi", nickname: "itzurbouylilnb" },
    defaultMusic: "music/default.mp3",

    database: [
        {
            displayName: "MOM",
            aliases: ["rirhandzu", "mom","rirhandzu baloyi","constance","rirhandzu constance baloyi"],
            songUrl: "music/U-tava-na-hina-Yehovha.mp3", 
            verse: [
                "“The Lord bless you and keep you;",
                "the Lord make His face shine upon you”,and give you peace..",
            ],
            message: [
                "Mom, may 2026 cover you with peace,",
                "restore your strength, and reward your love.",
                "You deserve every good thing. Happy New Year 🤍",
            ],
        },
        {
            displayName: "DAD",
            aliases: ["nhlamulo", "itzurbouylilnb", "boss"],
            songUrl: "music/creator-theme.mp3",
            verse: [
                "“Code is like poetry;",
                "it should be short, clean,",
                "and leave a mark.”",
            ],
            message: [
                "You built this for them.",
                "Now build the life you",
                "promised yourself for 2026.",
            ],
        },
    ],
    genericWishes: {
        verse: ["“Every end is a new beginning.”"],
        message: ["May 2026 bring you peace and purpose."],
    },
};

/**
 * UI CONTROLS
 */
const nameInput = document.getElementById("name-input");
const shareBtn = document.getElementById("share-btn");
const downloadBtn = document.getElementById("download-btn");
const audioPlayer = document.getElementById("bg-music");
const musicToggle = document.getElementById('music-toggle');
const iconMusic = document.getElementById('icon-music');
const iconMute = document.getElementById('icon-mute');

window.addEventListener("DOMContentLoaded", () => {
    runStudioCredits();
});

/**
 * 1. THE STUDIO CREDITS (Splash Screen)
 */
function runStudioCredits() {
    const tl = gsap.timeline();
    tl.to(".small-caps", { opacity: 1, duration: 1.5, delay: 0.5 })
      .to(".creator-name", { opacity: 1, y: -10, duration: 1.5 }, "-=0.5")
      .to(".nickname", { opacity: 1, duration: 1 }, "-=0.5")
      .to(".loader-line", { width: "100px", duration: 2, ease: "power2.inOut" })
      .to("#scene-splash", {
        opacity: 0,
        filter: "blur(20px)",
        duration: 1.5,
        delay: 1,
        onComplete: () => {
            document.getElementById("scene-splash").classList.remove("active");
            runHookSequence();
        },
    });
}

/**
 * 2. THE NARRATIVE HOOK
 */
function runHookSequence() {
    const introScene = document.getElementById("scene-intro");
    introScene.classList.add("active");
    const tl = gsap.timeline();
    tl.to("#intro-1", { opacity: 1, filter: "blur(0px)", duration: 1.5 })
      .to("#intro-1", { opacity: 0, filter: "blur(10px)", duration: 1, delay: 1 })
      .to("#intro-2", { opacity: 1, filter: "blur(0px)", duration: 1.5 })
      .to("#scene-intro", {
        opacity: 0,
        duration: 1.5,
        delay: 1,
        onComplete: () => {
            introScene.classList.remove("active");
            showInputScene();
        },
    });
}

function showInputScene() {
    const inputScene = document.getElementById("scene-input");
    inputScene.classList.add("active");
    gsap.to(inputScene, { opacity: 1, duration: 1 });
    nameInput.focus();
}

/**
 * 3. NAME HANDLING & SUBMISSION
 */
nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && nameInput.value.trim().length > 0) {
        processSubmission(nameInput.value.trim());
    }
});

function processSubmission(userName) {
    const normalized = userName.toLowerCase();
    let userData = CONFIG.database.find(
        (person) => person.aliases.includes(normalized) || person.displayName.toLowerCase() === normalized
    );

    if (!userData) {
        userData = {
            displayName: userName,
            verse: CONFIG.genericWishes.verse,
            message: CONFIG.genericWishes.message,
            songUrl: CONFIG.defaultMusic,
        };
    }

    audioPlayer.src = userData.songUrl || CONFIG.defaultMusic;
    audioPlayer.volume = 0;
    audioPlayer.play().catch((e) => console.log("Audio blocked: ", e));
    gsap.to(audioPlayer, { volume: 0.4, duration: 4 });

    gsap.to("#scene-input", {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            document.getElementById("scene-input").classList.remove("active");
            runCinematicSequence(userData);
        },
    });
}

/**
 * 4. THE MESSAGE REVEAL
 */
function runCinematicSequence(data) {
    const revealScene = document.getElementById("scene-reveal");
    const nameEl = document.getElementById("display-name");
    const msgContainer = document.getElementById("message-container");

    revealScene.classList.add("active");
    nameEl.textContent = data.displayName;
    msgContainer.innerHTML = "";

    const verseWrap = document.createElement("div");
    verseWrap.className = "verse-wrap";
    (data.verse || []).forEach(line => {
        const p = document.createElement("p");
        p.className = "verse-line";
        p.textContent = line;
        verseWrap.appendChild(p);
    });

    const personalWrap = document.createElement("div");
    personalWrap.className = "personal-wrap";
    (data.message || []).forEach(line => {
        const p = document.createElement("p");
        p.className = "message-line";
        p.textContent = line;
        personalWrap.appendChild(p);
    });

    msgContainer.appendChild(verseWrap);
    msgContainer.appendChild(personalWrap);

    const tl = gsap.timeline();

    tl.to("#scene-reveal", { opacity: 1, duration: 1 })
      .fromTo("#display-name", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: "power4.out" })
      .to("#display-name", { opacity: 0, filter: "blur(20px)", duration: 1.5, delay: 1.5 })
      .to(".verse-line", { opacity: 1, y: -10, stagger: 1.2, duration: 1.5, ease: "power2.out" })
      .to(".verse-wrap", { opacity: 0, filter: "blur(10px)", duration: 1, delay: 1.5 })
      .to(".message-line", { opacity: 1, y: -10, stagger: 1.2, duration: 1.5, ease: "power2.out" })
      .to("#scene-reveal", {
        opacity: 0,
        duration: 1.5,
        delay: 2.5,
        onComplete: () => showFinalScene(),
    });
}

/**
 * 5. FINAL SCENE
 */
function showFinalScene() {
    const final = document.getElementById("scene-final");
    final.classList.add("active");
    gsap.to(final, { opacity: 1, duration: 2 });
    gsap.from(".final-wrap > *", { opacity: 0, y: 20, stagger: 0.4, duration: 1.5 });
}

/**
 * IMAGE GENERATION (Verse Only)
 */
downloadBtn.addEventListener('click', () => {
    const verseArea = document.querySelector('.verse-wrap');
    if(!verseArea) return;

    const originalStyle = verseArea.style.cssText;
    verseArea.style.padding = "60px 40px";
    verseArea.style.background = "#050505";
    verseArea.style.display = "flex";
    verseArea.style.flexDirection = "column";
    verseArea.style.alignItems = "center";
    verseArea.style.justifyContent = "center";
    verseArea.style.opacity = "1";
    verseArea.style.filter = "none";
    verseArea.style.visibility = "visible";

    const lines = verseArea.querySelectorAll('.verse-line');
    lines.forEach(line => {
        line.style.opacity = "1";
        line.style.transform = "none";
    });

    html2canvas(verseArea, {
        backgroundColor: "#050505",
        scale: 3, 
        logging: false,
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `My-2026-Verse.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
        verseArea.style.cssText = originalStyle;
    });
});

/**
 * MUSIC TOGGLE LOGIC
 */
musicToggle.addEventListener('click', () => {
    if (audioPlayer.muted || audioPlayer.volume === 0) {
        audioPlayer.muted = false;
        audioPlayer.volume = 0.4;
        iconMusic.classList.remove('hidden');
        iconMute.classList.add('hidden');
    } else {
        audioPlayer.muted = true;
        iconMusic.classList.add('hidden');
        iconMute.classList.remove('hidden');
    }
});

/**
 * SHARE LINK LOGIC
 */
shareBtn.addEventListener("click", () => {
    const text = encodeURIComponent(
        `✨ This message from Nhlamulo found me. Not random. \n\nClick to reveal your personal 2026 verse here: `
    );
    const url = window.location.href;
    window.open(`https://wa.me/?text=${text}${url}`);
});
