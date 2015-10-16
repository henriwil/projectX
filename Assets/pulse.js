#pragma strict
var scale:float=1;
var varighet:float=1.5;
var direction:float=1; //1= y, 2=x
var Timer=0.0;
var intensitet:double;

function Start () {

}

function Update () 
{
	while(Timer<5)
	{
		transform.localScale.y-=Timer;
		Timer+=1;
		Debug.Log(Timer+"midnre");
	}	
	Timer=0.0;
	
	while(Timer<5)
	{
		transform.localScale.y+=Timer;
		Timer+=1;
		Debug.Log(Timer+"storre");
	}	
	Timer=0.0;
}