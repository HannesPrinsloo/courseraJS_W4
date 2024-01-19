/*Name this external file gallery.js*/

imagesArray = document.querySelectorAll('img');
imagesArray.forEach(function(number, index) {
  number.setAttribute("tabindex", index + 1);
  console.log("Image " + (index + 1) + " tabindex: " + number.getAttribute("tabindex"));
})

  // console.log("Image " + (index + 1) + " tabindex: " + img.getAttribute("tabindex"));

function upDate(previewPic){
    document.getElementById("image").style.backgroundImage = "url(" + previewPic.src + ")";
        
    document.getElementById("image").innerHTML = previewPic.alt;
  }
       function unDo(){
        document.getElementById("image").style.backgroundImage = "url('')";
      
        document.getElementById("image").innerHTML = "Hover over an image below to display here.";
      }


