#pragma strict
//var Walls_to_delete:GameObject[];

var varighet_aktivator:float; //hvor lenge varer interacten
private var activated:int;
private var player_Interacting:String;
private var player:GameObject;
var player_name:String;

private var Timer = 0.0; //teller tid mellom interactions

function Start () 
{
    player = GameObject.Find(player_name);
}

function OnTriggerStay2D(collision: Collider2D)
{
	if(player_Interacting==player_name)//hvem interagerer
	{	
		if(collision.gameObject==player)//riktig spiller
		{
			Timer=0.0;
			activated=1;
																//Debug.Log("LYD: knapp aktivert");
			isActive("");
		}
		else
		{
																//Debug.Log("LYD: feil spiller");
		}
		player_Interacting=null;
	}	
}	

function isActive(x:String)
{
     var gos : GameObject[];
     gos = GameObject.FindGameObjectsWithTag("Door1"); 
     for(var i = 0; i<gos.length; i++){
     gos[i].SendMessage("Open", gameObject.name+""+x);
     }
 }

function Interacting(status:String )
{
	player_Interacting=status;
}

function Update () 
{
	Timer += Time.deltaTime;
	if(Timer>varighet_aktivator&&Timer<varighet_aktivator+0.2)
	{
		activated=0;
		isActive("Off");
	}
}