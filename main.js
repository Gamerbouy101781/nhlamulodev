/**
 * NHAMULO | DIGITAL PRODUCTION 2026
 * Concept & Development: Nhlamulo Baloyi (itzurbouylilnb)
 */

const CONFIG = {
    year: "2026",
    creator: { name: "Nhlamulo Baloyi", nickname: "itzurbouylilnb" },
    defaultMusic: "music/joy_is_coming.mp3",

    // --- FAVORITE SONGS MAPPING ---
    // Add names here in LOWERCASE. If a name isn't here, it plays defaultMusic.
    userMusic: {
        "nhlamulo": "music/shela-remix.mp3",
        "rirhandzu": "music/U-tava-nahinaa.mp3",
        "khazamula": "music/holy-forever.mp3",
        "mhluri": "music/when-lelo-was-born.mp3",
        "minkhenso": "music/shela-remix.mp3",
        "tsakani": "music/Hileka-xigangu-xame.mp3",
        "ringo": "music/Aerosmith.mp3",
        "rifumo": "music/M83.mp3",
        "ednah": "music/M83.mp3",
        "mission": "music/hotfurz.mp3",
        "ntlhari": "music/hotfurz.mp3",
        "muxe": "music/Dikgoro.mp3",
        "moshe": "music/Dikgoro.mp3",
        "marcus": "music/in-da-club.mp3",
        "nyiko": "music/in-da-club.mp3",
        "entle": "music/thandaza.mp3",
        "emoji": "music/thandaza.mp3",
        "nontle": "music/thandaza.mp3",
        "risuna": "music/pray-4-love.mp3",
        "avumile": "music/Rako-laka.mp3",
        "samkelisiwe": "music/Best-Part.mp3",
        "nontobeko": "music/Head-up.mp3",
        "ndalo": "music/Head-up.mp3",
        "asibonge": "music/Favourite-song.mp3",
        "dakaro": "music/Favourite-song.mp3",
        "mpumelelo": "music/is-it-a-crime.mp3",
        "mpumi": "music/is-it-a-crime.mp3",
        "mpumiey": "music/is-it-a-crime.mp3",
        "kea": "music/shela-remix.mp3",
        "itumelang": "music/O-mohao.mp3",
        "jo-ann": "music/joy_is_coming.mp3",
        "jojow": "music/joy_is_coming.mp3",
        "tara": "music/mood-swings.mp3",
        "itzurbouylilnb": "music/special.mp3"
    },

    // The Scripture & Message Pool
    contentPool: [
        {
            verse: ["“The Lord bless you and keep you;", "the Lord make His face shine upon you,", "and give you peace.”"],
            reference: "Numbers 6:24-26",
            wishes: ["May 2026 cover you with peace and restore your strength.", "You deserve every good thing. Happy New Year 🤍"]
        },
        {
            verse: ["“For I know the plans I have for you,”", "declares the Lord, “plans to prosper you,", "plans to give you hope and a future.”"],
            reference: "Jeremiah 29:11",
            wishes: ["May 2026 protect your heart and grow your confidence.", "Turn your dreams into beautiful reality. 🤍"]
        },
        {
            verse: ["“Be strong and courageous.", "Do not be afraid; for the Lord your God", "is with you wherever you go.”"],
            reference: "Joshua 1:9",
            wishes: ["May 2026 elevate you and reward your grind.", "Open doors that no one can shut. 🤍"]
        },
        {
            verse: ["“The Lord will open the heavens,", "the storehouse of His bounty,", "to bless all the work of your hands.”"],
            reference: "Deuteronomy 28:12",
            wishes: ["May 2026 bring success and fulfillment", "to everything you touch. You are blessed. 🤍"]
        },
        {
            verse: ["“Commit your work to the Lord,", "and your plans will succeed.”"],
            reference: "Proverbs 16:3",
            wishes: ["May 2026 sharpen your vision and lead to major wins.", "Keep pushing; your time is now. 🤍"]
        },
        {
            verse: ["“The righteous will flourish like a palm tree,", "they will grow like a cedar of Lebanon.”"],
            reference: "Psalm 92:12",
            wishes: ["May 2026 see you flourish in health and peace.", "Wishing you a year full of massive growth. 🤍"]
        },
        {
            verse: ["“I can do all things through Him", "who strengthens me.”"],
            reference: "Philippians 4:13",
            wishes: ["Enter 2026 with the strength of a lion.", "Nothing is impossible for you this year. 🤍"]
        },
        {
            verse: ["“Delight yourself in the Lord,", "and He will give you", "the desires of your heart.”"],
            reference: "Psalm 37:4",
            wishes: ["May 2026 be the year your deepest prayers", "are answered in abundance. Happy New Year. 🤍"]
        },
        {
            verse: ["“Trust in the Lord with all your heart", "and lean not on your own understanding;”"],
            reference: "Proverbs 3:5-6",
            wishes: ["May 2026 guide your steps and illuminate your path.", "Every decision you make this year is blessed. 🤍"]
        },
        {
            verse: ["“Cast all your anxiety on Him", "because He cares for you.”"],
            reference: "1 Peter 5:7",
            wishes: ["Let go of worries this year; 2026 is for peace.", "Rest easy knowing God’s got you. 🤍"]
        },
        {
            verse: ["“Even though I walk through the darkest valley,", "I will fear no evil,", "for You are with me.”"],
            reference: "Psalm 23:4",
            wishes: ["May 2026 give you courage in every challenge.", "You are never alone; blessings follow you. 🤍"]
        },
        {
            verse: ["“Peace I leave with you; my peace I give you.”"],
            reference: "John 14:27",
            wishes: ["May 2026 fill your life with true peace.", "No storm can shake your heart this year. 🤍"]
        },
        {
            verse: ["“I have overcome the world.”"],
            reference: "John 16:33",
            wishes: ["Step into 2026 knowing you are victorious.", "No obstacle can stand in your way. 🤍"]
        },
        {
            verse: ["“The Lord is my shepherd; I shall not want.”"],
            reference: "Psalm 23:1",
            wishes: ["May 2026 provide abundance in every area of life.", "Walk confidently knowing God guides you. 🤍"]
        },
        {
    verse: ["“Those who hope in the Lord", "will renew their strength;", "they will soar on wings like eagles.”"],
    reference: "Isaiah 40:31",
    wishes: ["May 2026 renew your strength and lift you higher than before.", "You are rising into a powerful season. 🤍"]
},
{
    verse: ["“The Lord will fight for you;", "you need only to be still.”"],
    reference: "Exodus 14:14",
    wishes: ["May 2026 remove battles you never need to fight.", "Rest—victory is already working for you. 🤍"]
},
{
    verse: ["“Weeping may stay for the night,", "but rejoicing comes in the morning.”"],
    reference: "Psalm 30:5",
    wishes: ["May 2026 turn past pain into unstoppable joy.", "Your mornings are about to be brighter. 🤍"]
},
{
    verse: ["“And we know that in all things", "God works for the good", "of those who love Him.”"],
    reference: "Romans 8:28",
    wishes: ["May 2026 align everything in your favor.", "Nothing you’ve been through was wasted. 🤍"]
},
{
    verse: ["“The Lord gives strength to His people;", "the Lord blesses His people with peace.”"],
    reference: "Psalm 29:11",
    wishes: ["May 2026 give you strength without stress.", "Peace will guard your heart all year. 🤍"]
},
{
    verse: ["“You will seek Me and find Me", "when you seek Me with all your heart.”"],
    reference: "Jeremiah 29:13",
    wishes: ["May 2026 draw you closer to clarity and purpose.", "Everything you seek is seeking you too. 🤍"]
},
{
    verse: ["“The Lord is close to the brokenhearted", "and saves those who are crushed in spirit.”"],
    reference: "Psalm 34:18",
    wishes: ["May 2026 heal what the past tried to break.", "You are deeply seen and protected. 🤍"]
},
{
    verse: ["“The Lord will guide you always;", "He will satisfy your needs.”"],
    reference: "Isaiah 58:11",
    wishes: ["May 2026 guide you without confusion.", "Your needs will be met right on time. 🤍"]
},
{
    verse: ["“Those who trust in the Lord", "are like Mount Zion, which cannot be shaken.”"],
    reference: "Psalm 125:1",
    wishes: ["May 2026 make you unshakable.", "Stand firm—nothing can move you. 🤍"]
},
{
    verse: ["“The Lord your God is with you,", "He will take great delight in you.”"],
    reference: "Zephaniah 3:17",
    wishes: ["May 2026 remind you how deeply loved you are.", "You are celebrated in heaven. 🤍"]
},
{
    verse: ["“Your word is a lamp for my feet,", "a light on my path.”"],
    reference: "Psalm 119:105",
    wishes: ["May 2026 light your path clearly.", "No more guessing—only direction. 🤍"]
},
{
    verse: ["“The name of the Lord is a strong tower;", "the righteous run to it and are safe.”"],
    reference: "Proverbs 18:10",
    wishes: ["May 2026 surround you with divine protection.", "You are always safe. 🤍"]
},
{
    verse: ["“The Lord is good,", "a refuge in times of trouble.”"],
    reference: "Nahum 1:7",
    wishes: ["May 2026 be gentler than the years before.", "You are covered even in storms. 🤍"]
},
{
    verse: ["“He gives wisdom to the wise", "and knowledge to the discerning.”"],
    reference: "Daniel 2:21",
    wishes: ["May 2026 sharpen your mind and judgment.", "You will choose wisely this year. 🤍"]
},
{
    verse: ["“My grace is sufficient for you,", "for My power is made perfect in weakness.”"],
    reference: "2 Corinthians 12:9",
    wishes: ["May 2026 show strength where you felt weak.", "Grace will carry you. 🤍"]
},

{
    verse: ["“The Lord watches over you;", "the Lord is your shade at your right hand.”"],
    reference: "Psalm 121:5",
    wishes: ["May 2026 guard you day and night.", "You are never exposed. 🤍"]
},
{
    verse: ["“The steps of a good person", "are ordered by the Lord.”"],
    reference: "Psalm 37:23",
    wishes: ["May 2026 align every step you take.", "You are moving correctly. 🤍"]
},
{
    verse: ["“In quietness and trust is your strength.”"],
    reference: "Isaiah 30:15",
    wishes: ["May 2026 teach you peaceful strength.", "You don’t need to rush. 🤍"]
},
{
    verse: ["“The Lord is my light and my salvation—", "whom shall I fear?”"],
    reference: "Psalm 27:1",
    wishes: ["May 2026 remove fear from your heart.", "Walk boldly. 🤍"]
},
{
    verse: ["“Blessed are those who trust in the Lord.”"],
    reference: "Jeremiah 17:7",
    wishes: ["May 2026 reward your faith.", "Trust will not disappoint you. 🤍"]
},
{
    verse: ["“The Lord gives wisdom;", "from His mouth come knowledge and understanding.”"],
    reference: "Proverbs 2:6",
    wishes: ["May 2026 bring clarity in every decision.", "You will understand when it matters. 🤍"]
},
{
    verse: ["“God is within her, she will not fall.”"],
    reference: "Psalm 46:5",
    wishes: ["May 2026 keep you standing through it all.", "You are held firmly. 🤍"]
},
{
    verse: ["“The Lord is compassionate and gracious,", "slow to anger, abounding in love.”"],
    reference: "Psalm 103:8",
    wishes: ["May 2026 surround you with mercy.", "Love will find you everywhere. 🤍"]
},
{
    verse: ["“He restores my soul.”"],
    reference: "Psalm 23:3",
    wishes: ["May 2026 restore what life drained.", "You will feel whole again. 🤍"]
},
{
    verse: ["“The Lord makes firm the steps", "of the one who delights in Him.”"],
    reference: "Psalm 37:24",
    wishes: ["May 2026 stabilize your journey.", "You will not slip. 🤍"]
},

{
    verse: ["“The Lord is faithful to all His promises.”"],
    reference: "Psalm 145:13",
    wishes: ["May 2026 prove every promise true.", "Faithfulness will surprise you. 🤍"]
},
{
    verse: ["“The Lord will keep you from all harm.”"],
    reference: "Psalm 121:7",
    wishes: ["May 2026 be a year of safety.", "You are divinely guarded. 🤍"]
},
{
    verse: ["“God is our refuge and strength,", "an ever-present help in trouble.”"],
    reference: "Psalm 46:1",
    wishes: ["May 2026 be easier to breathe.", "Help is always near. 🤍"]
},
{
    verse: ["“The Lord upholds all who fall.”"],
    reference: "Psalm 145:14",
    wishes: ["May 2026 lift you when you feel low.", "You will not fall alone. 🤍"]
},
{
    verse: ["“The Lord is gracious and righteous.”"],
    reference: "Psalm 116:5",
    wishes: ["May 2026 treat you gently.", "Grace will meet you daily. 🤍"]
},
{
    verse: ["“The Lord gives sight to the blind.”"],
    reference: "Psalm 146:8",
    wishes: ["May 2026 open your eyes to opportunity.", "You will see clearly. 🤍"]
},
{
    verse: ["“The Lord is near to all who call on Him.”"],
    reference: "Psalm 145:18",
    wishes: ["May 2026 deepen your connection with God.", "You are never unheard. 🤍"]
},
{
    verse: ["“The Lord satisfies the desires", "of every living thing.”"],
    reference: "Psalm 145:16",
    wishes: ["May 2026 fulfill your needs.", "You will not lack. 🤍"]
},
{
    verse: ["“The Lord protects the simplehearted.”"],
    reference: "Psalm 116:6",
    wishes: ["May 2026 protect your innocence.", "You are safe to be yourself. 🤍"]
},
{
    verse: ["“The Lord renews their strength.”"],
    reference: "Psalm 103:5",
    wishes: ["May 2026 energize your spirit.", "You are not running on empty. 🤍"]
},
{
    verse: ["“The Lord goes before you", "and will be with you;”"],
    reference: "Deuteronomy 31:8",
    wishes: ["May 2026 remove fear from your journey.", "You are never walking alone. 🤍"]
},
{
    verse: ["“The joy of the Lord", "is your strength.”"],
    reference: "Nehemiah 8:10",
    wishes: ["May 2026 restore joy to your soul.", "Your strength will surprise you. 🤍"]
},
{
    verse: ["“The Lord is close to the brokenhearted", "and saves those who are crushed in spirit.”"],
    reference: "Psalm 34:18",
    wishes: ["May 2026 heal places no one sees.", "Your heart is safe this year. 🤍"]
},
{
    verse: ["“He gives wisdom to the wise", "and knowledge to the discerning.”"],
    reference: "Daniel 2:21",
    wishes: ["May 2026 sharpen your mind and decisions.", "You will move with clarity. 🤍"]
},
{
    verse: ["“The Lord upholds all who fall", "and lifts up all who are bowed down.”"],
    reference: "Psalm 145:14",
    wishes: ["May 2026 lift you from every low place.", "You are rising again. 🤍"]
},
{
    verse: ["“The Lord is good,", "a refuge in times of trouble.”"],
    reference: "Nahum 1:7",
    wishes: ["May 2026 shelter you from chaos.", "Peace will find you. 🤍"]
},
{
    verse: ["“He refreshes my soul.", "He guides me along the right paths.”"],
    reference: "Psalm 23:3",
    wishes: ["May 2026 refresh your spirit completely.", "You are being guided well. 🤍"]
},
{
    verse: ["“Your word is a lamp for my feet,", "a light on my path.”"],
    reference: "Psalm 119:105",
    wishes: ["May 2026 light every step you take.", "No confusion this year. 🤍"]
},
{
    verse: ["“The Lord is my strength and my shield;”"],
    reference: "Psalm 28:7",
    wishes: ["May 2026 protect you from unseen harm.", "You are covered. 🤍"]
},
{
    verse: ["“God is within her,", "she will not fall.”"],
    reference: "Psalm 46:5",
    wishes: ["May 2026 keep you standing strong.", "Nothing will break you. 🤍"]
},
{
    verse: ["“The Lord will perfect", "that which concerns me.”"],
    reference: "Psalm 138:8",
    wishes: ["May 2026 complete what you started.", "Nothing remains unfinished. 🤍"]
},
{
    verse: ["“He heals the brokenhearted", "and binds up their wounds.”"],
    reference: "Psalm 147:3",
    wishes: ["May 2026 bring deep healing.", "Your scars will no longer hurt. 🤍"]
},
{
    verse: ["“Those who seek the Lord", "lack no good thing.”"],
    reference: "Psalm 34:10",
    wishes: ["May 2026 lack nothing you truly need.", "Provision follows you. 🤍"]
},
{
    verse: ["“The Lord watches over you", "both now and forevermore.”"],
    reference: "Psalm 121:8",
    wishes: ["May 2026 be guarded day and night.", "You are watched over. 🤍"]
},
{
    verse: ["“My grace is sufficient for you.”"],
    reference: "2 Corinthians 12:9",
    wishes: ["May 2026 teach you strength in weakness.", "Grace will carry you. 🤍"]
},
{
    verse: ["“The Lord delights in those", "who fear Him.”"],
    reference: "Psalm 147:11",
    wishes: ["May 2026 bring divine favor.", "You are seen and valued. 🤍"]
},
{
    verse: ["“The Lord makes firm", "the steps of the one who delights in Him.”"],
    reference: "Psalm 37:23",
    wishes: ["May 2026 stabilize your path.", "No more setbacks. 🤍"]
},
{
    verse: ["“He will cover you", "with His feathers.”"],
    reference: "Psalm 91:4",
    wishes: ["May 2026 wrap you in safety.", "You are protected. 🤍"]
},
{
    verse: ["“The Lord gives wisdom;", "from His mouth come knowledge.”"],
    reference: "Proverbs 2:6",
    wishes: ["May 2026 make you wiser than before.", "Your choices will prosper. 🤍"]
},
{
    verse: ["“The Lord is faithful", "to all His promises.”"],
    reference: "Psalm 145:13",
    wishes: ["May 2026 fulfill promises long awaited.", "Faithfulness surrounds you. 🤍"]
},
{
    verse: ["“Blessed are those", "who trust in the Lord.”"],
    reference: "Jeremiah 17:7",
    wishes: ["May 2026 reward your faith.", "Trust will pay off. 🤍"]
},
{
    verse: ["“He gives peace", "at all times and in every way.”"],
    reference: "2 Thessalonians 3:16",
    wishes: ["May 2026 silence every storm.", "Peace stays with you. 🤍"]
},
{
    verse: ["“The Lord is compassionate", "and gracious.”"],
    reference: "Psalm 103:8",
    wishes: ["May 2026 treat you gently.", "Grace flows freely. 🤍"]
},
{
    verse: ["“The Lord strengthens", "the bars of your gates.”"],
    reference: "Psalm 147:13",
    wishes: ["May 2026 fortify your life.", "Nothing breaks through. 🤍"]
},
{
    verse: ["“In quietness and trust", "is your strength.”"],
    reference: "Isaiah 30:15",
    wishes: ["May 2026 calm your spirit.", "Strength comes softly. 🤍"]
}
    ]
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

window.addEventListener("DOMContentLoaded", () => runStudioCredits());

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
        }
    });
}

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
        }
    });
}

function showInputScene() {
    const inputScene = document.getElementById("scene-input");
    inputScene.classList.add("active");
    gsap.to(inputScene, { opacity: 1, duration: 1 });
    nameInput.focus();
}

nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && nameInput.value.trim().length > 0) {
        processSubmission(nameInput.value.trim());
    }
});

function processSubmission(userName) {
    const randomContent = CONFIG.contentPool[Math.floor(Math.random() * CONFIG.contentPool.length)];
    
    // Check for personalized music
    const cleanName = userName.toLowerCase().trim();
    const songUrl = CONFIG.userMusic[cleanName] ? CONFIG.userMusic[cleanName] : CONFIG.defaultMusic;

    const userData = {
        displayName: userName.toUpperCase(),
        songUrl: songUrl,
        verse: [...randomContent.verse, `— ${randomContent.reference}`],
        message: randomContent.wishes
    };

    audioPlayer.src = userData.songUrl;
    audioPlayer.volume = 0;
    audioPlayer.play().catch(e => console.log("Audio Init Required"));
    gsap.to(audioPlayer, { volume: 0.4, duration: 4 });

    gsap.to("#scene-input", {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            document.getElementById("scene-input").classList.remove("active");
            runCinematicSequence(userData);
        }
    });
}

function runCinematicSequence(data) {
    const revealScene = document.getElementById("scene-reveal");
    const nameEl = document.getElementById("display-name");
    const msgContainer = document.getElementById("message-container");

    revealScene.classList.add("active");
    nameEl.textContent = data.displayName;
    msgContainer.innerHTML = "";

    const verseWrap = document.createElement("div");
    verseWrap.className = "verse-wrap";
    data.verse.forEach(line => {
        const p = document.createElement("p");
        p.className = "verse-line";
        p.textContent = line;
        verseWrap.appendChild(p);
    });

    const personalWrap = document.createElement("div");
    personalWrap.className = "personal-wrap";
    data.message.forEach(line => {
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
      .to("#display-name", { opacity: 0, filter: "blur(20px)", duration: 1.5, delay: 2 })
      .to(".verse-line", { opacity: 1, y: -10, stagger: 1.2, duration: 1.5 })
      .to(".verse-wrap", { opacity: 0, filter: "blur(10px)", duration: 1, delay: 5 })
      .to(".message-line", { opacity: 1, y: -10, stagger: 1.2, duration: 1.5 })
      .to("#scene-reveal", {
        opacity: 0,
        duration: 1.5,
        delay: 8,
        onComplete: () => showFinalScene()
    });
}

function showFinalScene() {
    const final = document.getElementById("scene-final");
    final.classList.add("active");
    gsap.to(final, { opacity: 1, duration: 2 });
    gsap.from(".final-wrap > *", { opacity: 0, y: 20, stagger: 0.4, duration: 1.5 });
}

downloadBtn.addEventListener('click', () => {
    const verseArea = document.querySelector('.verse-wrap');
    if (!verseArea) return;

    const originalStyle = verseArea.style.cssText;

    // Force container styles
    verseArea.style.cssText = `
        padding: 80px 60px;
        background: #050505;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        opacity: 1;
        visibility: visible;
    `;

    // Force verse lines visible
    verseArea.querySelectorAll('.verse-line').forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
    });

    // ✅ FORCE reference visible (THIS IS THE FIX)
    verseArea.querySelectorAll('.verse-ref, .verse-reference, small').forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
        el.style.marginTop = "40px";
        el.style.fontSize = "38px";
        el.style.fontStyle = "italic";
        el.style.color = "#cfcfcf";
        el.style.display = "block";
    });

    html2canvas(verseArea, {
        backgroundColor: "#050505",
        scale: 3,
        useCORS: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = '2026-Verse.png';
        link.href = canvas.toDataURL('image/png');
        link.click();

        // Restore original styles
        verseArea.style.cssText = originalStyle;
    });
});

musicToggle.addEventListener('click', () => {
    audioPlayer.muted = !audioPlayer.muted;
    iconMusic.classList.toggle('hidden');
    iconMute.classList.toggle('hidden');
});

shareBtn.addEventListener("click", () => {
    const text = encodeURIComponent("✨ This 2026 message found me. Click to reveal yours: ");
    window.open(`https://wa.me/?text=${text}${window.location.href}`);
});
