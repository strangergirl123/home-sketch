function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#dacbf2');
    
    let length= 800;
    let width= 550;
    let xDis= 400;
    let yDis= 25;
    
    backdrop(xDis,yDis,length,width);
    airCon(xDis,yDis,width,length);
    light(xDis,yDis,length, width);
    windowsill(xDis,yDis,length,width);
    curtain(xDis,yDis,length,width);
    clock(xDis,yDis,width);
    holder(xDis,yDis,width);
    ruler();
    flower(xDis,yDis,width);
    
}
 
 //background of a/c    
function backdrop(xDis,yDis,length, width){     
        fill('black');
        rect(xDis, yDis, length, width);
    }
    
    
    
    function light(xDis,yDis,length, width) {
        fill('white');
        rect(xDis+25, yDis, length-50, width/10);
    }
 
    
    //windowsill
    function windowsill(xDis,yDis,length,width){
        fill('#57c7de')
        quad(xDis+50, yDis+width-100, xDis, yDis+width, xDis+length, yDis+width, xDis+length, yDis+width-100);
    }
    
    function curtain(xDis,yDis,length,width){
        fill('#e89e1e')
        triangle(xDis+length, yDis+200, xDis+length, yDis+width, (xDis+length)-100, yDis+width);
    }
    
    //clock
    function clock(xDis,yDis,width){
        fill('#398ee3');
        let cLength=55;
        let cWidth=55;
        rect(xDis+120, yDis+width-150, cLength, cWidth);
        rect(xDis+100, yDis+width-140, cLength, cWidth);
        quad(xDis+120, yDis+width-150, xDis+100, yDis+width-140, xDis+100+cLength, yDis+width-140, xDis+120+cLength, yDis+width-150);
        quad(xDis+100+cLength, yDis+width-140, xDis+120+cLength, yDis+width-150, xDis+120+cLength, yDis+width-95, xDis+100+cLength, yDis+width-85);
        fill('white');
        ellipse(xDis+127, yDis+width-110, 50, 40);
    }
    
    //pencil holder
    function holder(xDis,yDis,width){
        fill('#F3CE54');
        rect(xDis+250, yDis+width-75, 100,50);
        rect(xDis+263, yDis+width-60, 75,35);
        rect(xDis+263, yDis+width-50, 75,10);
        line(xDis+300, yDis+width-60, xDis+300,yDis+width-60+20);
    }
 
    function airCon(xDis,yDis,width,length){
        fill('white');
        rect(xDis+450, yDis+200, length/3, width/3);
        rect(xDis+460, yDis+220, length/5, width/5);
        line(xDis+460, yDis+240, xDis+460+length/5, yDis+240);
        line(xDis+460, yDis+260, xDis+460+length/5, yDis+260);
        line(xDis+460, yDis+280, xDis+460+length/5, yDis+280);
        line(xDis+460, yDis+300, xDis+460+length/5, yDis+300);
        line(xDis+460, yDis+320, xDis+460+length/5, yDis+320);
    
        line(xDis+500, yDis+220, xDis+500, yDis+220+width/5);
        line(xDis+550, yDis+220, xDis+550, yDis+220+width/5);
    
        rect(xDis+630, yDis+220, length/10, width/5);
        line(xDis+630, yDis+240, xDis+630+length/10, yDis+240);
        line(xDis+630, yDis+260, xDis+630+length/10, yDis+260);
        line(xDis+630, yDis+280, xDis+630+length/10, yDis+280);
        line(xDis+630, yDis+300, xDis+630+length/10, yDis+300);
        line(xDis+630, yDis+320, xDis+630+length/10, yDis+320);
    
        fill('black');
        rect(xDis+645, yDis+340, length/14, width/30);
    }
    
    //ruler
    function ruler(){
        fill('#A9A2A2');
        rect(720, 435, 10, 100);
    }
 
    //flower
    function flower(xDis,yDis,width){
        fill('white');
        rect(675, 400, 10, 135);
        fill('#f7b7d4')
        translate(xDis+275, (yDis+width)-170);
        noStroke();
        for (let i = 0; i < 10; i++) {
            ellipse(0, 8, 50, 80);
            rotate(PI/3);
        }
    } 
