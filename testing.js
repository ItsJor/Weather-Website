/*window.onload = function()
 {
document.getElementById("searchbutton").onclick = searchClick;
   
};
  I needed to bring  this one line lower to work on commenting out  */

  but1 =document.querySelector("#searchbutton");
  but1.addEventListener('click',searchClick);
  
  
  // Called when the Search button is clicked.
  // Looks for paragraphs matching a search string and highlights them. 
  
  function searchClick() {
  var searchPhrase = document.querySelector("#searchtext").value;
  var main = document.querySelector("#main");
  var mainParas = main.querySelectorAll(" p ");
  
  for (var i = 0; i < mainParas.length; i++) {
  
  if (mainParas[i].textContent.indexOf(searchPhrase) >= 0)
   { mainParas[i].className = "highlighted";}    // highlight 
   else {
   mainParas[i].className = null;	// un-highlight
           }
  
                                                              }
  
                                   }