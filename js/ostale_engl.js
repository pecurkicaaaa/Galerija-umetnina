$(document).ready(function(){


    let artikli = document.getElementById("artikli")
    let niz=[]
    for (let i = 1; i <= 3; i++) {
        console.log("okej");
        let clan = document.createElement("li");
        if(i==1){
            clan.className="one_third first btmspace-30";
        }
        else clan.className= "one_third btmspace-30";
  
        let artikal=document.createElement("article");
        artikal.className="bgded overlay pret";
        artikal.style.height="450px";
        artikal.style.margin
  
        let slika = document.createElement("img");
        slika.src = "../images/demo/ostale" + i + ".png";
        
        slika.style.objectFit = "cover";
        slika.style.width = "100%";
        slika.style.height = "70%";
        
  
        let naslov=document.createElement("h6");
        naslov.className="heading font-x1";
  
        let link=document.createElement("a");
        link.href="../stranice_engleski/ostale"+i+".html";
        link.innerHTML="dffffffffff";
  
        let paragraf=document.createElement("p");
        paragraf.innerHTML="aa";
  
        if(i==1){
            link.innerHTML="<br>Stranded Mermaid of Trsat</a>";
            paragraf.innerHTML="Nadezda Djukanovic Pantelic&hellip;";
            clan.id="Nadezda Stranded";
            artikal.id="Nadezda Djukanovic Pantelic nadežda đukanović pantelić stranded mermaid of trsat";
        }
        else if(i==2){
            link.innerHTML="<br>Alphabet plate</a>";
            paragraf.innerHTML="Nadezda Djukanovic Pantelic&hellip;";
            clan.id="Nadezda Alphabet";
            artikal.id="Nadezda Djukanovic Pantelic nadežda đukanović pantelić alphabet plate";
        }
        else{
            link.innerHTML="<br>Santa Claus</a>";
            paragraf.innerHTML="Thomas Nast&hellip;";
            clan.id="Thomas Santa";
            artikal.id="thomas nast santa claus";
            slika.src = "../images/demo/ostale" + i + ".jpg";
        }
  
        naslov.appendChild(link);
        artikal.appendChild(slika);
        artikal.appendChild(naslov);
        artikal.appendChild(paragraf);
        clan.appendChild(artikal);
        niz.push(clan);
        
    }
    popuni();
    function popuni(){
        for(let i=0;i<3;i++)
        artikli.appendChild(niz[i]);
    }
    $("#sortiraj").click(function(){
        var imageContainer = document.querySelector('#artikli');
        var images = Array.from(imageContainer.getElementsByTagName('li'));
  
        if($("#ime").prop("checked")==true){

            if($("#umetnik").prop("checked")==true){
                images.sort(function(a, b) {
                  var altA = a.getAttribute('id').toUpperCase();
                  var altB = b.getAttribute('id').toUpperCase();
                  if (altA < altB) {
                    return -1;
                  }
                  if (altA > altB) {
                    return 1;
                  }
                  return 0;
                });
            }
            else {
                images.sort(function(a, b) {
                  var altA = (a.getAttribute('id').split(" "))[1];
                  var altB = (b.getAttribute('id').split(" "))[1];
                  if (altA < altB) {
                    return -1;
                  }
                  if (altA > altB) {
                    return 1;
                  }
                  return 0;
                
              });
            }
            
              
        }
        else  if($("#umetnik").prop("checked")==true){
            images.sort(function(a, b) {
                var altA = (a.getAttribute('id').split(" "))[0];
                var altB = (b.getAttribute('id').split(" "))[0];
                if (altA < altB) {
                  return -1;
                }
                if (altA > altB) {
                  return 1;
                }
                return 0;
            });
        }
        
        images[0].setAttribute("class","one_third first btmspace-30");
        images[1].setAttribute("class","one_third btmspace-30");
        images[2].setAttribute("class","one_third btmspace-30");
        images.forEach(function(image) {
        imageContainer.appendChild(image);
      });
    });
  
    $("#pretrazi").click(function(){
      let zaPretragu=$("#name").val().toUpperCase();
      if(zaPretragu==null) return;
      let nizBrendovaZaSakrivanje = [];
      let poljaZaStikliranje = document.querySelectorAll("article[class = 'bgded overlay pret']");
      
      poljaZaStikliranje.forEach(element => {
        //console.log(element.getAttribute('id').toUpperCase());
          if((element.getAttribute('id').toUpperCase().indexOf(zaPretragu) )!==-1)
          {console.log("Da");nizBrendovaZaSakrivanje.push(element.id);}
      });
  
      let nizSlika = document.querySelectorAll("article[class = 'bgded overlay pret']");
      nizSlika.forEach(slika => {
        console.log(slika.className);
          if (nizBrendovaZaSakrivanje.includes(slika.id)) {
              slika.style.display = "inline-block";
          } else {
              slika.style.display = "none";
          }
      });
    });
  });