previous_result=""

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", modelLoaded)
}

function draw() {
  image(video, 0, 0, 300, 300)
  classifier.classify(video, gotResults)

}

function modelLoaded() {
  console.log("Model Loaded")

}

function gotResults(error, results) {
  if (results) {
    console.log(results)
    if(results[0].confidence>0.3 && previous_result!=results[0].label){
      previous_result=results[0].label;
     document.getElementById("object").innerHTML=results[0].label;
     document.getElementById("accuracy").innerHTML=results[0].confidence;
  }}
   else(console.log(error))

}


