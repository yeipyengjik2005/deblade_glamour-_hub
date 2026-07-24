//=================================
//Deblade Glamour Hub JavaScript
//=================================

document.addEventListener("DOMContentLoaded" , function(){
//================================
//SHOW /HIDE INFROMATION
//================================
  const toggleBtn =
  document.getElementById("toggleBtn");
  const infoBox =
  document.getElementById("infoBox");

  if (toggleBtn & infoBox) {
    infoBox.style.display =
    "none";
    infoBox.innerHTML =
      <h3>Deblade Glamour 
    Hub  </h3>

    <p>
        Welcome to Deblade Glamour Hub.
               We specialize in professional Makeup
            Bridal Glam,  Hair Styling,
            Wig Installion,    Gele Tying
            Hair Treatment and Beauty Consultation.
    </p> 
    ;
    toggleBtn.addEventListener("click"   
    ,function () {
        if (infoBox.style.display==="none") {
            infoBox.style.display="block";
            toggleBtn.textContent="Hide";  
        }else{
            infoBox.style.display="none";
            toggleBtn.textContent="Show"
        }
    });
  }

  //=============================
  //CONTACT FORM
  //=============================

  const form =
  document.getElementById("contactForm");
  const nameInput =
  document.getElementById("nameInput");
  const message =
  document.getElementById("message");
  if (form) {
    form.addEventListener("submit" , function(event) {
        event.preventDefault();
        const name =
        nameInput.ariaValueMax.trim();
        if (name==="") {
            message.style.color ="red";
            message.textContent ="Please enter your email.";
        }else{
            message.style.color =
            "Thank you! Your message has been submitted successfully.";
            form.reset ()
        }
    });
  }

  //===========================
  //BOOK NOW BUTTON
  //===========================
  const bookBtn =
  document.querySelector(".book-btn");
if (bookBtn) {
 bookBtn.addEventListener("click", function(){
    alert(
        "Thank you for choosing Deblade Glamour Hub. \n\nKindly contact us to book your appointment."
    );
 });
}
});
