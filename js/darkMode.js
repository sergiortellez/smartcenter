 // variables
 var darkMode;
 var getNav = document.getElementById("nav");
 var getLabelSwitch = document.getElementById('lightDarkLabel');
 var getLabelIcon = document.getElementById('lightDarkIcon');
 var logoUrl = document.getElementById('logo_up');
 //on load & listeners
 window.onload = function () {
     var darkMode = false;
     console.log("darkmode: " + darkMode);
 }

 document.getElementById("toggle").addEventListener("click", toggle);

 //functions
 function toggle() {
     if (darkMode) {
         //toggle colors
         document.documentElement.style.setProperty('--brColor', '#dfdfdf');
         document.documentElement.style.setProperty('--textColor', '#000');

         // navbar toogle
         getNav.classList.add('navbar-light');
         getNav.classList.remove('navbar-dark');
         getNav.classList.add('bg-light-custom');
         getNav.classList.remove('bg-dark');
         //change labels
         getLabelSwitch.innerHTML = "oscuro";
         getLabelIcon.classList.add('fa-moon');
         getLabelIcon.classList.remove('fa-sun');
         //toggle status
         darkMode = false;
         console.log("darkmode: " + darkMode);
         //toggle upLogo
         logoUrl.src = 'images/up_oscuro.webp';


     } else {
         //toggle colors
         document.documentElement.style.setProperty('--brColor', '#000');
         document.documentElement.style.setProperty('--textColor', '#fff');

         // navbar toogle
         getNav.classList.add('navbar-dark');
         getNav.classList.remove('navbar-light');
         getNav.classList.remove('bg-light-custom');
         getNav.classList.add('bg-dark');
         //change labels
         getLabelSwitch.innerHTML = "claro";
         getLabelIcon.classList.add('fa-sun');
         getLabelIcon.classList.remove('fa-moon');
         //toggle status
         darkMode = true;
         console.log("darkmode: " + darkMode);
         //dividers 
         //toggle upLogo
         logoUrl.src = 'images/up.webp';
         

     }
 };