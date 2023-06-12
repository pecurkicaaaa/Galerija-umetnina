$(document).ready(function() {
    var nizIgraca=[],nizIgraca2=[];

    function inicijalizujPodatke(){
        if(sessionStorage.getItem("igraci")!=null){
            nizIgraca=JSON.parse(sessionStorage.getItem("igraci"));
        }
        else
        {
            sessionStorage.setItem("igraci",JSON.stringify(nizIgraca));
        }
        if(localStorage.getItem("igraci")!=null){
            nizIgraca2=JSON.parse(localStorage.getItem("igraci"));
        }
        else
        {
            localStorage.setItem("igraci",JSON.stringify(nizIgraca2));
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
        adresa.innerHTML="User: "+nizIgraca[i]["ime"];
        datum.innerHTML=nizIgraca[i]["time"];
        paragraf1.innerHTML="Offer is "+nizIgraca[i]["cena"]+".";
        paragraf2.innerHTML=nizIgraca[i]["komentar"];
        
        heder.appendChild(adresa);
        heder.appendChild(datum);
        div.appendChild(paragraf1);
        div.appendChild(paragraf2);
        artikal.appendChild(heder);
        artikal.appendChild(div);
        //clan.appendChild(artikal);
        //artikli.appendChild(clan);

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function() {
        
        for(let j=0;j<nizIgraca2.length;j++){
            if(nizIgraca[i]["ime"]==nizIgraca2[j]["ime"]&&nizIgraca[i]["time"]==nizIgraca2[j]["time"]&&nizIgraca[i]["cena"]==nizIgraca2[j]["cena"]&&nizIgraca[i]["email"]==nizIgraca2[j]["email"]){
                console.log("da");
                nizIgraca2.splice(j,1);
                localStorage.setItem("igraci", JSON.stringify(nizIgraca2));
                break;
            }
        }
        nizIgraca.splice(i, 1);
        // Save the updated array to sessionStorage
        sessionStorage.setItem("igraci", JSON.stringify(nizIgraca));
        // Remove the corresponding list item from the DOM
        artikli.removeChild(clan);
        location.reload();

        });

        artikal.appendChild(deleteButton);
        clan.appendChild(artikal);
        artikli.appendChild(clan);
    }
    function popuniPonude(){
        let artikli = document.getElementById("postojece")
        for(let i=0;i<nizIgraca.length;i++){
            popunijedan(i,artikli);
        }
    }
    popuniPonude();
});
      
  
    