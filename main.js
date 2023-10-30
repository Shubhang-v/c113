function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(335,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    fill(255,200,200);
    strokeWeight(10)
    rect(195, 110, 250, 250, 20);
    image(video,220,160,200,150);
    
}
function take_snapshot()
{
    save('student_name.jpg');
}