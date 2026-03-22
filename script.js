// Page switch
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Login
function login(){
  if(document.getElementById("pass").value=="1234"){
    showPage("app");
  } else {
    alert("Wrong Password");
  }
}

// Save
function save(){
  let val=document.getElementById("secret").value;
  if(val==="") return;
  let li=document.createElement("li");
  li.textContent=val;
  document.getElementById("list").appendChild(li);
}

// Language system
function setLang(lang){

  let t=document.getElementById("aboutTitle");
  let a1=document.getElementById("about1");
  let a2=document.getElementById("about2");
  let a3=document.getElementById("about3");
  let a4=document.getElementById("about4");

  // default
  t.textContent="About My Secret Book";
  a1.textContent="My Secret Book is your personal safe space.";
  a2.textContent="Everyone has secrets they can't share.";
  a3.textContent="This website belongs to everyone.";
  a4.textContent="Simple and secure.";

  if(lang=="hi"){ t.textContent="मेरी सीक्रेट बुक"; a1.textContent="यह आपकी जगह है।"; a2.textContent="हर किसी के पास कुछ होता है।"; a3.textContent="यह सभी की है।"; a4.textContent="सुरक्षित।"; }
  if(lang=="od"){ t.textContent="ମୋ ସିକ୍ରେଟ ବୁକ"; a1.textContent="ଏହା ତୁମର ସ୍ଥାନ।"; a2.textContent="ପ୍ରତ୍ୟେକଙ୍କର ରହସ୍ୟ ଅଛି।"; a3.textContent="ଏହା ସମସ୍ତଙ୍କର।"; a4.textContent="ସୁରକ୍ଷିତ।"; }
  if(lang=="ta"){ t.textContent="ரகசிய புத்தகம்"; a1.textContent="இது உங்கள் இடம்."; a2.textContent="ஒவ்வொருவருக்கும் ரகசியங்கள் உள்ளன."; a3.textContent="இது அனைவருக்கும்."; a4.textContent="பாதுகாப்பானது."; }
  if(lang=="te"){ t.textContent="సీక్రెట్ బుక్"; a1.textContent="ఇది మీ స్థలం."; a2.textContent="ప్రతి ఒక్కరికి రహస్యాలు ఉన్నాయి."; a3.textContent="ఇది అందరిది."; a4.textContent="సురక్షితం."; }
  if(lang=="mr"){ t.textContent="सिक्रेट बुक"; a1.textContent="ही तुमची जागा आहे."; a2.textContent="प्रत्येकाकडे काहीतरी असतं."; a3.textContent="ही सर्वांची आहे."; a4.textContent="सुरक्षित."; }
  if(lang=="bn"){ t.textContent="সিক্রেট বুক"; a1.textContent="এটি আপনার স্থান।"; a2.textContent="প্রত্যেকের গোপন কিছু থাকে।"; a3.textContent="এটি সবার।"; a4.textContent="নিরাপদ।"; }
  if(lang=="gu"){ t.textContent="સિક્રેટ બુક"; a1.textContent="આ તમારી જગ્યા છે."; a2.textContent="દરેક પાસે કંઈક હોય છે."; a3.textContent="આ બધાની છે."; a4.textContent="સુરક્ષિત."; }
  if(lang=="pa"){ t.textContent="ਸੀਕ੍ਰੇਟ ਬੁੱਕ"; a1.textContent="ਇਹ ਤੁਹਾਡੀ ਜਗ੍ਹਾ ਹੈ."; a2.textContent="ਹਰ ਕਿਸੇ ਕੋਲ ਕੁਝ ਹੁੰਦਾ ਹੈ."; a3.textContent="ਇਹ ਸਭ ਦੀ ਹੈ."; a4.textContent="ਸੁਰੱਖਿਅਤ."; }
  if(lang=="kn"){ t.textContent="ಸೀಕ್ರೆಟ್ ಬುಕ್"; a1.textContent="ಇದು ನಿಮ್ಮ ಸ್ಥಳ."; a2.textContent="ಪ್ರತಿ ಒಬ್ಬರಿಗೂ ರಹಸ್ಯಗಳಿವೆ."; a3.textContent="ಇದು ಎಲ್ಲರದು."; a4.textContent="ಸುರಕ್ಷಿತ."; }
  if(lang=="ml"){ t.textContent="സീക്രെറ്റ് ബുക്ക്"; a1.textContent="ഇത് നിങ്ങളുടെ സ്ഥലം."; a2.textContent="ഓരോരുത്തർക്കും രഹസ്യങ്ങളുണ്ട്."; a3.textContent="ഇത് എല്ലാവരുടേത്."; a4.textContent="സുരക്ഷിതം."; }
}

// default load
setLang("en");
