for(let contador in circuloX){
    circle(circuloX[contador],circuloY[contador],20);
  
   circuloX[contador]+= random(0,3);
   circuloY[contador]+= random(-3,3); 
 
  if(circuloX[contador] >= width){
    circuloX[contador]=0;
    circuloY[contador]= random(height);
 }
}
  if(mouseIsPressed) {
cor = color(random(0, 255), random(0, 255),random(0,255),
random(0, 100));
  }
}
