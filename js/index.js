

$(document).ready(function() {

  var savedOption = localStorage.getItem("selectedOption");
  if (savedOption) {
    $('#select-box1').val(savedOption);
  }
  $('#select-box1').on('change', function() {
    var selectedOption = $(this).find(':selected').text();
    console.log(selectedOption);
    if (selectedOption === "Српски") {
      window.location.href = window.location.href.replace("stranice_engleski", "stranice_srpski");
    } else if (selectedOption === "English") {
      window.location.href = window.location.href.replace("stranice_srpski", "stranice_engleski");
    }

    localStorage.setItem("selectedOption", $(this).val());
  });


  const pdfButton1 = document.getElementById("d1");
  pdfButton1.addEventListener('click', function() {
  pdfButton1.blur();
  });
  const pdfButton2 = document.getElementById("d2");
  pdfButton2.addEventListener('click', function() {
    pdfButton2.blur();

  
  });


  const pdfButton3 = document.getElementById("d3");
  pdfButton3.addEventListener('click', function() {
  pdfButton3.blur();
  });

  const pdfButton4 = document.getElementById("d4");
  pdfButton4.addEventListener('click', function() {
  pdfButton4.blur();
  });

  const pdfButton5 = document.getElementById("d5");
  pdfButton5.addEventListener('click', function() {
  pdfButton5.blur();
  });

  const pdfButton6 = document.getElementById("d6");
  pdfButton6.addEventListener('click', function() {
  pdfButton6.blur();
  });

  const pdfButton7 = document.getElementById("d7");
  pdfButton7.addEventListener('click', function() {
  pdfButton7.blur();
  });

  const pdfButton8 = document.getElementById("d8");
  pdfButton8.addEventListener('click', function() {
  pdfButton8.blur();
  });

});
    

  