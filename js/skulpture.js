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
        artikal.style.height="650px";
  
        let slika = document.createElement("img");
        slika.src = "../images/demo/sk" + i + ".jpg";
        slika.style.objectFit = "cover";
        slika.style.width = "100%";
        slika.style.height = "70%";
        
  
        let naslov=document.createElement("h6");
        naslov.className="heading font-x1";
  
        let link=document.createElement("a");
        link.href="../stranice_srpski/sk"+i+".html";
        link.innerHTML="dffffffffff";
  
        let paragraf=document.createElement("p");
        paragraf.innerHTML="aa";
  
        if(i==1){
            link.innerHTML="<br>Давид</a>";
            paragraf.innerHTML="Микеланђело&hellip;";
            clan.id="Mikelandjelo David";
            artikal.id="David Mikelandjelo Давид Микеланђело mikelanđelo";
        }
        else if(i==2){
            link.innerHTML="<br>Мислилац</a>";
            paragraf.innerHTML="Огист Роден&hellip;";
            clan.id="Ogist Mislilac";
            artikal.id="Mislilac Ogist Roden Мислилац Огист Роден";
        }
        else{
            link.innerHTML="<br>Човек који хода</a>";
            paragraf.innerHTML="Алберто Ђакомети&hellip;";
            clan.id="Alberto Covek";
            artikal.id="Covek koji hoda Alberto Djakometi čovek đakometi Човек који хода Алберто Ђакомети";
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