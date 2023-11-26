Webcam.set({
    width:350,
    heigh:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camera")
function take_pic() {
    Webcam.snap(function (img) {
        document.getElementById("result").innerHTML = '<img id="pic" src="'+img+'">';
    });
}
image_model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/yW4_ax5ar/",modelOtis);
function modelOtis() {
    console.log("model loaded successfully");
}

function check() {
    cam_pic = document.getElementById("pic");
    image_model.classify(cam_pic,getResults)
}

function getResults(e,r) {
    if (e) {
        console.error(e);
    }
    else{
        console.log(r)
        document.getElementById("result_object_name").innerHTML = r[0].label;
        document.getElementById("result_object_accuracy").innerHTML =( r[0].confidence).toFixed(2)
    }
}