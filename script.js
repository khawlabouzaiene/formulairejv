function fenvoi()
{ 
    //variables
    var compteur=0
    var name=formulaire.name.value;
    var CIN=formulaire.CIN.value;
    var mail=formulaire.mail.value;
    var gabarit=new RegEXP("[A-Z0-9._-]+[@]{1}[A-Z0-9._-]+[.]{1}[A-Z]{2,10}");
    //test
    if (gabarit.test(name) )compteur++; //name correspondt-il augabarit?
    if (name== CIN)compteur++;
    if (compteur<8) {alert("champs mal renseigés");return false;}
    if (compteur==8) {alert("saisies correctes");return true;}
    if (CIN==mail) compteur++;
    if (compteur==30) {alert("saisies correctes");return true;}

}  //fin function


