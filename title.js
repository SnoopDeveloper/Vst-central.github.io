if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 400);

}

var x = 0;

var titleText = ["𝕾𝖓𝖆𝖐𝖊𝖁𝖊𝖓𝖔𝖒.𝖈𝖑𝖚𝖇", "🐉♥  Ⓢήα𝓚𝐞𝓿ᵉᶰ𝕠м.℃lυβ  ☯💎", "ꜱɴᴀᴋᴇᴠᴇɴᴏᴍ.ᴄʟᴜʙ", "🍌 ⋆ 🍒  🎀  𝒮𝓃𝒶𝓀𝑒𝒱𝑒𝓃💮𝓂.𝒸𝓁𝓊𝒷  🎀  🍒 ⋆ 🍌", "ₛₙₐₖₑᵥₑₙₒₘ.cₗᵤb ", "𝕾𝖓𝖆𝖐𝖊𝖁𝖊𝖓𝖔𝖒.𝖈𝖑𝖚𝖇 |"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}


