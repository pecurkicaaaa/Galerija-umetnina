$(document).ready(function(){
    
    var nizIgraca=[],nizIgraca2=[];
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var ponuda={};
        console.log("j");
        ponuda["ime"]=$("#name").val();
        ponuda["cena"]=$("#price").val();
        ponuda["email"]=$("#email").val();
        ponuda["komentar"]=$("#comment").val();
        const opcije = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        ponuda["time"] = new Date().toLocaleDateString("sr-RS", opcije);
        ponuda["id"]=$("body").attr("id");
        nizIgraca.push(ponuda);
        nizIgraca2.push(ponuda);
        let artikli = document.getElementById("postojece");
        popunijedan(nizIgraca.length-1,artikli);
        localStorage.setItem("igraci",JSON.stringify(nizIgraca));
        sessionStorage.setItem("igraci",JSON.stringify(nizIgraca2));
    });

    

    function inicijalizujPodatke(){
        if(localStorage.getItem("igraci")!=null){
            nizIgraca=JSON.parse(localStorage.getItem("igraci"));
        }
        else
        {
            localStorage.setItem("igraci",JSON.stringify(nizIgraca));
        }
        if(sessionStorage.getItem("igraci")!=null){
            nizIgraca2=JSON.parse(sessionStorage.getItem("igraci"));
        }
        else
        {
            sessionStorage.setItem("igraci",JSON.stringify(nizIgraca2));
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
        adresa.innerHTML="Корисник: "+nizIgraca[i]["ime"];
        datum.innerHTML=nizIgraca[i]["time"];
        paragraf1.innerHTML="Понуда је "+nizIgraca[i]["cena"]+".";
        paragraf2.innerHTML=nizIgraca[i]["komentar"];
        
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
        for(let i=0;i<nizIgraca.length;i++){
            if(nizIgraca[i]["id"]!=$("body").attr("id")) continue;
            popunijedan(i,artikli);
        }
    }
    popuniPonude()
    
});