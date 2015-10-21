#pragma strict

var nedover:KeyCode;
var oppover:KeyCode;
var venstre:KeyCode;
var hoyre:KeyCode;
var interact:KeyCode;
var player_color:String;

var interact_varighet:float; //hvor lenge varer interacten
var interact_ladetid:float;	//tid mellom når du kan bruke interact igjen
var speed:int;

var Timer = 0.0; //teller tid mellom interactions
var interacting:int; // sier om statusen til spiller, er 1, hvis interact knapp trykkes, ellers er den 0.




function Start () 
{
	interacting=0;
	
}

function OnCollisionEnter2D(colInfo:Collision2D)
{
	if (colInfo.collider.tag=="DangerZone")
	{
				Debug.Log("Kræsj i vegg");
	}
	if((interacting==1)&&colInfo.collider.tag=="Enemy")
	{
		Debug.Log("Fiende angrepet");
	}
	
}

function Open_doors(status:boolean ){
			
		if(status)
		{	
	         var gos : GameObject[];
	         gos = GameObject.FindGameObjectsWithTag("Knapp"); 
	 
	         for(var i = 0; i<gos.length; i++){
	         gos[i].SendMessage("Interacting", gameObject.name);
	         }
         }
     }

function Update () 
{
	Timer += Time.deltaTime;
	if (Input.GetKey(interact))
	{
		if(Timer>interact_ladetid) //if not attack the last 3 seconds
		{
			Open_doors(true);
			transform.localScale=new Vector3(2F,2F,1F);
			Timer = 0.0;	//reseter tiden
		} 
	}

	if(Timer>interact_varighet)	//gjør den liten igjen etter 0,5 sekunder
	{
			Open_doors(false);
			transform.localScale=new Vector3(1F,1F,1F);
			interacting=0;
	}
	
	if( Input.GetKey(nedover)&&Input.GetKey(venstre))
	{
			GetComponent.<Rigidbody2D>().velocity.y =speed*-1;
			GetComponent.<Rigidbody2D>().velocity.x =speed*-1;
	}
	else if( Input.GetKey(nedover)&&Input.GetKey(hoyre))
	{
		GetComponent.<Rigidbody2D>().velocity.y =speed*-1;
		GetComponent.<Rigidbody2D>().velocity.x =speed;
	}
	else if( Input.GetKey(oppover)&&Input.GetKey(hoyre))
	{
		GetComponent.<Rigidbody2D>().velocity.y =speed;
		GetComponent.<Rigidbody2D>().velocity.x =speed;
	}
	else if( Input.GetKey(oppover)&&Input.GetKey(venstre))
	{
		GetComponent.<Rigidbody2D>().velocity.y =speed;
		GetComponent.<Rigidbody2D>().velocity.x =speed*-1;
	}
	else if( Input.GetKey(oppover))
	{
		GetComponent.<Rigidbody2D>().velocity.y =speed;
	}
	else if( Input.GetKey(nedover))
	{
		GetComponent.<Rigidbody2D>().velocity.y =speed*-1;
	}
	else if( Input.GetKey(venstre))
	{
		GetComponent.<Rigidbody2D>().velocity.x =speed*-1;
	}
	else if( Input.GetKey(hoyre))
	{
		GetComponent.<Rigidbody2D>().velocity.x =speed;
	}
	else
	{
		GetComponent.<Rigidbody2D>().velocity.y = 0;
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
	
	
}