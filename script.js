// Page switch
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// About language function
function setLang(lang) {

  if (lang === "en") {
    document.getElementById("aboutTitle").textContent = "About My Secret Book";

    document.getElementById("about1").textContent =
      "My Secret Book is not just a website — it’s a personal space where your secrets stay safe and truly yours.";

    document.getElementById("about2").textContent =
      "In today’s world, everyone has something they cannot say out loud.";

    document.getElementById("about3").textContent =
      "This website does not belong to me alone. Whoever trusts it, owns it.";

    document.getElementById("about4").textContent =
      "Simple, secure, and personal — just like a real diary, but smarter.";
  }

  else if (lang === "hi") {
    document.getElementById("aboutTitle").textContent = "मेरी सीक्रेट बुक के बारे में";

    document.getElementById("about1").textContent =
      "यह सिर्फ एक वेबसाइट नहीं है — यह आपकी अपनी जगह है जहाँ आपके राज सुरक्षित रहते हैं।";

    document.getElementById("about2").textContent =
      "आज की दुनिया में हर किसी के पास कुछ ऐसा होता है जो वो किसी से नहीं कह पाता।";

    document.getElementById("about3").textContent =
      "यह वेबसाइट सिर्फ मेरी नहीं है। जो इसे अपना समझेगा, यह उसकी हो जाएगी।";

    document.getElementById("about4").textContent =
      "साधारण, सुरक्षित और व्यक्तिगत — एक असली डायरी की तरह, लेकिन और भी बेहतर।";
  }

  else if (lang === "od") {
    document.getElementById("aboutTitle").textContent = "ମୋ ସିକ୍ରେଟ ବୁକ ବିଷୟରେ";

    document.getElementById("about1").textContent =
      "ଏହା କେବଳ ଏକ ୱେବସାଇଟ୍ ନୁହେଁ — ଏହା ତୁମର ନିଜସ୍ୱ ଜଗା।";

    document.getElementById("about2").textContent =
      "ପ୍ରତ୍ୟେକ ଲୋକଙ୍କ ପାଖରେ କିଛି ଅଛି ଯାହା ସେ କହିପାରେ ନାହିଁ।";

    document.getElementById("about3").textContent =
      "ଏହି ୱେବସାଇଟ୍ ସମସ୍ତଙ୍କର।";

    document.getElementById("about4").textContent =
      "ସରଳ ଏବଂ ସୁରକ୍ଷିତ।";
  }
}

// default load
setLang("en");
showPage("home");
