#pragma strict
var scale:float;
var varighet:float;
var Timer=0.0;
var intensitet:double;

function Start () {

}

function Update () 
{
	while(transform.localScale.y>0)
	{
		transform.localScale.y -= Timer;
		Debug.Log(Timer);
	}	
	Timer=0.0;
	
	while(transform.localScale.y<1)
	{
		
	}	
	Timer=0.0;
}