let image = [
    "./img/baum_sonnenuntergang.jpg",
    "./img/bäume_sonnenuntergang.jpg",
    "./img/berg_sonnenuntergang.jpg",
    "./img/blume_sonnenuntergang.jpg",
    "./img/brücke_sonnenuntergang.jpg",
    "./img/gewitter.jpg",
    "./img/gras_sonnenuntergang.jpg",
    "./img/meer_sonnenuntergang.jpg",
    "./img/see_sonnenuntergang.jpg",
    "./img/sonnenuntergang_mit_nebel.jpg",
];

let currentIndex = 0;

function render() {
    const contentRef = document.getElementById("content");
    for (let index = 0; index < image.length; index++) {
        contentRef.innerHTML += getNotesHtml(index);
    }
}

function getNotesHtml(index) {
    return `<span><img onclick="toggleOverlay(${index}, event)" class="album_img" src="${image[index]}" alt="${image[index]}"></span>`;
}

function toggleOverlay(index, event) {
    event.stopPropagation();
    let overlayRef = document.getElementById("overlay");
    let overlayWrapperRef = document.getElementById("overlay_wrapper");
    let overlayImgRef = document.getElementById("overlay_img");
    overlayImgRef.src = image[index];
    overlayRef.classList.toggle("d_none");
    overlayWrapperRef.classList.toggle("d_none");
    currentIndex = index;
    updateImageCounter();
}

function imgForward(event) {
    event.stopPropagation();
    currentIndex++;
    if (currentIndex >= image.length) {
        currentIndex = 0;
    }
    document.getElementById("overlay_img").src = image[currentIndex];
    updateImageCounter();
}

function imgBackward(event) {
    event.stopPropagation();
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = image.length - 1;
    }
    document.getElementById("overlay_img").src = image[currentIndex];
    updateImageCounter();
}

function updateImageCounter() {
    let imageCounterRef = document.getElementById("image_counter");
    imageCounterRef.textContent = `${currentIndex + 1} / ${image.length}`;
}
