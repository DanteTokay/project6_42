// div creation
const squareDiv = document.createElement('div');
// actual windows height
let windowHeigh = window.innerHeight;
//size our square
let size = 50;
let flag = true;

//div added to body like last child
document.body.appendChild(squareDiv);
// adding class square to div
squareDiv.classList.add('square');

squareDiv.style.height= size+"px";
squareDiv.style.width=`${size}px`;
// changing styles for div
// adding text to the square
squareDiv.textContent=size;
//changing positoin this text
squareDiv.style.textAlign="center";
squareDiv.style.lineHeight="250%";



document.addEventListener('scroll',function(){

  if(flag && size <= windowHeigh/2)
    size+=5;
  else
  { flag=1;
    size-=5;
    if(size>50)
      flag=0;
  }
  squareDiv.style.height= size+"px";
  squareDiv.style.width=`${size}px`;
  squareDiv.textContent=size;
});
