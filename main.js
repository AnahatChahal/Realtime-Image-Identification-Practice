function setup()
{
    canvas = createCanvas(250, 250);
    canvas.center();
    video =createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aHpTMKYs1/model.json',modelLoaded);
}

function modelLoaded()
{
    console.log('modeLoaded');
}

function draw()
{
    image(video, 0, 0, 250, 250);
    classifier.classify(video, gotResult);
}

function gotResult()
{
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        document.getElementById("result_emotionname").innerHTML = results[0].label;
        document.getElementById("result_emotionaccuracy").innerHTML = results[0].confidence.toFixed(3);
      }
}