function iniciar() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/YVcr7GLaw/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("tagh3").innerHTML = "Posso ouvir " + results[0].label;
        document.getElementById("tagh4").innerHTML = "Precisão: " + (results[0].confidence * 100).toFixed(2) + "%";
        
        document.getElementById("tagh3").style.color = "rgb(" + r + ", " + g + ", " + b + ")"; 
        document.getElementById("tagh3").style.color = "rgb(" + r + ", " + g + ", " + b + ")";

        img1 = document.getElementById("img1");
        img2 = document.getElementById("img2");
        img3 = document.getElementById("img3");
        img4 = document.getElementById("img4");

        if(results[0].label == "Background Noise"){
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "Latido"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "Mugido"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "Pássaro"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}