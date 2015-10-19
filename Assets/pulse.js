#pragma strict

var timer=0.0;
var varighet:double;
var endring:double;
function Start () {

}

function Update () 
{
timer+=Time.deltaTime;

Debug.Log(timer);
if(timer<varighet&&timer>0){transform.localScale.y-=endring;}

if(timer<varighet*2&&timer>varighet){transform.localScale.y+=endring;}

if(timer>varighet*2){timer=0.0;}


}