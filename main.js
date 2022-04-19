
function setup() {
    canvas = createCanvas(300,300)
    canvas.position(550,200);

    video = createCapture(VIDEO);
    video.position(200,200);
    video.size(300,300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses() {}
function modelLoaded() {
    console.log('Model has been loaded'); }