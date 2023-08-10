function Display(img){
    let section= document.getElementById("displayImage")
    let displayImage= document.createElement('img')
    displayImage.src= img.src;
    displayImage.className="displayImage"
    section.appendChild(displayImage);
}

