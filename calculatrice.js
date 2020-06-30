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
function plusmoins(){
    var zone_affichage =document.getElementById('zone_affichage');
    var contenue = zone_affichage.value;
    if((contenue.split('')[0])=='-'){
        zone_affichage.value=contenue.slice(1, contenue.length);
    }
    else{
        zone_affichage.value='-'+contenue;
    }
        
    }
    function range_memory(){
        var zone_affichage =document.getElementById('zone_affichage');
    memory = zone_affichage.value;
        
    }
    function affiche_memory(){
        var zone_affichage =document.getElementById('zone_affichage');
    var contenue = zone_affichage.value;
    if(memory){
        zone_affichage.value=contenue+memory;
    }
        
    }
    function raz_memory(){
        if(memory){
            memory=undefined;
        }
    }