"use client"

export default function Home() {
  var y=645
  var x=0
  var xx=0
  var vx=3
  let color=0
  var playing;
  var isplaying=false
  var colors=["red","orange","yellow","green","blue","lightblue","purple"]
  function bouncing(){
    let ball = document.getElementById("ball")
      if(xx+x>1400){
          xx=0
          x=0
          y=645
          color=0;
          document.getElementById("bg").style.background=colors[(color+1)%7]
          ball.style.backgroundColor=colors[color]
      }
      x+=vx
      y=645-( (5*4*x/3) - 0.3*(x*x/9))
      ball.style.left = String(xx+x)+"px"
      ball.style.top= String(y)+"px"
      if(y>645){
          xx+=x
          x=0
          color+=1;
          color%=7
          document.getElementById("bg").style.background=colors[(color+1)%7]
          ball.style.backgroundColor=colors[color]
      }
  }

  function play(){
      if(!isplaying){
          isplaying=true
          playing=setInterval(bouncing, 5);
      }
  }
  function stop(){
      if(isplaying){
          clearInterval(playing);
          isplaying=false
      }
      
  }
  return (
    <main>
      <button id="btn" onClick={play}>play</button>
      <button id="btn" onClick={stop}>stop</button>
      <div id="ball"></div>
    </main>
  );
}
