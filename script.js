// Image Carousel

const images = [

    "https://picsum.photos/id/1015/600/300",

    "https://picsum.photos/id/1016/600/300",

    "https://picsum.photos/id/1018/600/300",

    "https://picsum.photos/id/1020/600/300",

    "https://picsum.photos/id/1024/600/300",

    "https://picsum.photos/id/1035/600/300",

    "https://picsum.photos/id/1043/600/300"

];

let index = 0;

function showImage(){

    document.getElementById("carouselImage").src = images[index];

}

function nextImage(){

    index++;

    if(index >= images.length){
        index = 0;
    }

    showImage();
}

function prevImage(){

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    showImage();
}



// Joke API

async function getJoke(){

    let response = await fetch("https://official-joke-api.appspot.com/random_joke");

    let data = await response.json();

    document.getElementById("joke").innerHTML =
    data.setup + "<br><br>" + data.punchline;
}