
//afficher image picsum

/* async function loadImage() {
    const res = await fetch("https://picsum.photos/id/237/info");
    const data = await res.json();
    document.getElementById("photo1").src = data.download_url;
}

loadImage(); */


//afficher image dog.ceo
/* async function loadImage2() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    document.getElementById("photo2").src = data.message;
}

loadImage2(); */



//afficher les deux images en même temps

async function loadImages() {
    // image Picsum
    const res1 = await fetch("https://picsum.photos/id/237/info");
    const data1 = await res1.json();
    document.getElementById("photo1").src = data1.download_url;

    // image Dog CEO
    const res2 = await fetch("https://dog.ceo/api/breeds/image/random");
    const data2 = await res2.json();
    document.getElementById("photo2").src = data2.message;
}

loadImages();


//paramètres de chemin de l'image Picsum
// - "https://picsum.photos"
// - "https://picsum.photos/id/237/"
