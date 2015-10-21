#pragma strict

private var timer=0.0;
private var varighet:double;
private var endring:double;
function Start () 
{
	this.varighet=0.5; //hvor lenge endrer den seg
	this.endring=0.03; //hvor mye endrer den seg i sekundet
}

function Update () 
{
timer+=Time.deltaTime;

if(timer<varighet&&timer>0){transform.localScale.y-=endring;}

if(timer<varighet*2&&timer>varighet){transform.localScale.y+=endring;}

if(timer>varighet*2){timer=0.0;}


}