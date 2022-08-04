/*Quando l'utente clicka sul bottone switcha tra mostra e nascondi il contenuto */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Chiudi dropdown se l'utente clicka in qualsiasi altro punto della finestra
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
