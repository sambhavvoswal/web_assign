var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    MainImg.src = smallimg[0].src;
}

smallimg[1].onclick = function(){
    MainImg.src = smallimg[1].src;
}

smallimg[2].onclick = function(){
    MainImg.src = smallimg[2].src;
}


smallimg[3].onclick = function(){
    MainImg.src = smallimg[3].src;
}
function run()
{
    document.getElementById("small-img-group").innerHTML = `<div class="details">
        <h4>Shirt Size</h4>
        <p>Medium</p>

        <h4>Shirt Color</h4>
        <p>Multi-color</p>

        <h4>Manufacturer</h4>
        <p>Netplay Co.</p>

        <h4>Additional Details</h4>
        <p>Material: 100% Cotton</p>
        <p>Care Instructions: Machine wash cold with like colors, tumble dry low.</p>
    </div>`;
}   