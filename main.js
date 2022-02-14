function preload() {

}
function setup() {
    canvas = createCanvas(640, 490);
    canvas.position(480, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
     image(video, 230, 150, 220, 200);
     fill("green");
     rect(100, 100, 460, 20);
     rect(100, 430, 460, 20);
     rect(100, 120, 20, 320);
     rect(550, 120, 20, 320);
     fill("red");
     circle(110, 110, 50);
     circle(110, 440, 50);
     circle(560, 110, 50);
     circle(560, 440, 50);
     
}
function take_snapshot() {
    save("myPicture.png");
}