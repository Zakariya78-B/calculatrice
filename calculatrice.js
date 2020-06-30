function rab(){
    var zak = document.getElementById("zone_affichage");
    zak.value = "";
  

}
function calcul(){
    var zakpop = document.getElementById("zone_affichage");
    try {
       zakpop.value=eval(zakpop.value);
    } catch(e) {
        console.log(e);
        alert(e);
    }
    
}
function init(){

var zak = document.getElementsByClassName("bouton_simple");
for(var i = 0  ; i<zak.length; i++){
    zak[i].setAttribute("onclick","affiche(this)")
}
    
     
    
}
function affiche(aff){
    var zak = document.getElementById("zone_affichage");
    zak.value += aff.value;
 
    
}