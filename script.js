function setLang(lang) {

  let title = document.getElementById("aboutTitle");
  let a1 = document.getElementById("about1");
  let a2 = document.getElementById("about2");
  let a3 = document.getElementById("about3");
  let a4 = document.getElementById("about4");

  // DEFAULT (English)
  title.textContent = "About My Secret Book";
  a1.textContent = "My Secret Book is not just a website — it’s a personal space where your secrets stay safe.";
  a2.textContent = "Everyone has something they cannot say out loud.";
  a3.textContent = "This website belongs to everyone who trusts it.";
  a4.textContent = "Simple and secure.";

  // Hindi
  if (lang === "hi") {
    title.textContent = "मेरी सीक्रेट बुक के बारे में";
    a1.textContent = "यह आपकी अपनी जगह है जहाँ आपके राज सुरक्षित रहते हैं।";
    a2.textContent = "हर किसी के पास कुछ होता है जो वो नहीं कह पाता।";
    a3.textContent = "यह वेबसाइट सभी की है।";
    a4.textContent = "सुरक्षित और व्यक्तिगत।";
  }

  // Odia
  if (lang === "od") {
    title.textContent = "ମୋ ସିକ୍ରେଟ ବୁକ ବିଷୟରେ";
    a1.textContent = "ଏହା ତୁମର ନିଜସ୍ୱ ସ୍ଥାନ।";
    a2.textContent = "ପ୍ରତ୍ୟେକଙ୍କ ପାଖରେ କିଛି ଅଛି।";
    a3.textContent = "ଏହା ସମସ୍ତଙ୍କର।";
    a4.textContent = "ସୁରକ୍ଷିତ।";
  }

  // Tamil
  if (lang === "ta") {
    title.textContent = "என் ரகசிய புத்தகம் பற்றி";
    a1.textContent = "இது உங்கள் ரகசியங்களுக்கான இடம்.";
    a2.textContent = "ஒவ்வொருவருக்கும் சொல்ல முடியாத விஷயங்கள் உள்ளன.";
    a3.textContent = "இந்த வலைத்தளம் அனைவருக்கும்.";
    a4.textContent = "பாதுகாப்பானது.";
  }

  // Telugu
  if (lang === "te") {
    title.textContent = "నా సీక్రెట్ బుక్ గురించి";
    a1.textContent = "ఇది మీ రహస్యాల కోసం ఒక స్థలం.";
    a2.textContent = "ప్రతి ఒక్కరికి చెప్పలేని విషయాలు ఉంటాయి.";
    a3.textContent = "ఈ వెబ్‌సైట్ అందరిది.";
    a4.textContent = "సురక్షితమైనది.";
  }

  // Marathi
  if (lang === "mr") {
    title.textContent = "माझ्या सिक्रेट बुक बद्दल";
    a1.textContent = "ही तुमच्या गुपितांसाठी जागा आहे.";
    a2.textContent = "प्रत्येकाकडे काहीतरी असतं.";
    a3.textContent = "ही वेबसाइट सगळ्यांची आहे.";
    a4.textContent = "सुरक्षित.";
  }

}
setLang("en");
