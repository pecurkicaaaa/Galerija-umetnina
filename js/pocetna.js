$(document).ready(function(){
    
    var nizIgraca=[];
    var selectedOption = $('#select-box1').find(':selected').text();
    function inicijalizujPodatke(){
        if(localStorage.getItem("igraci")!=null){
            nizIgraca=JSON.parse(localStorage.getItem("igraci"));
        }
        else
        {
            localStorage.setItem("igraci",JSON.stringify(nizIgraca));
        }
    }
    inicijalizujPodatke();

    function popunijedan(i,artikli){
        let clan = document.createElement("li");
        let artikal=document.createElement("article");
        let heder=document.createElement("header");
        let adresa=document.createElement("address");
        let datum=document.createElement("time");
        let div=document.createElement("div");
        let paragraf1=document.createElement("p");
        let paragraf2=document.createElement("p");

        div.className="comcont";
        if (selectedOption === "Српски") {
            adresa.innerHTML="Корисник: "+nizIgraca[i]["ime"];
            paragraf1.innerHTML="Понуда је "+nizIgraca[i]["cena"]+".";
          } 
          else if (selectedOption === "English") {
            adresa.innerHTML="User: "+nizIgraca[i]["ime"];
            paragraf1.innerHTML="The offer is "+nizIgraca[i]["cena"]+".";  
          }

        paragraf2.innerHTML=nizIgraca[i]["komentar"];
        //datum.innerHTML=nizIgraca[i]["time"];
        
        
        heder.appendChild(adresa);
        heder.appendChild(datum);
        div.appendChild(paragraf1);
        div.appendChild(paragraf2);
        artikal.appendChild(heder);
        artikal.appendChild(div);
        clan.appendChild(artikal);
        artikli.appendChild(clan);
    }

    function popuniPonude(){
        let artikli = document.getElementById("postojece")
        for(let i=0;i<3&&i<nizIgraca.length;i++){
            popunijedan(nizIgraca.length-1-i,artikli);
        }
    }
    popuniPonude()
    
});