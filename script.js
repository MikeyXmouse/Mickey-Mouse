// script.js carousel image
const image = [
    "./img/heroProduct.png",
    "./img/headphone13.jpg",
    "./img/headphone15.jpg"
];
let curentIndex = 0;
const carouselImage = document.getElementById("carouselImage");
const prevBtn = documentById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
function updateImage() {
    carouselImage.src = Image[currentIndex];
}
//function to move to the next image
function nextImage() {
    currentIndex = (currentIndex < image.length - 1) ? currentIndex + 1 : 0;
    updateImage();
}
//Event listeners for buttons
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : image.length - 1;
    updateImage();
});
nextBtn.addEventListener("click", nextImage);
// Auto move the carousel every 4 seconds
setInterval(nextImage, 4000);
