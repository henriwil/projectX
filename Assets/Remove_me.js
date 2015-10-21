#pragma strict

private var black_button:boolean;
private var white_button:boolean;
var door_number:int;
private var black_button_with_number:String;
private var white_button_with_number:String;


function Start () {
black_button_with_number="Black_Button_"+door_number;
white_button_with_number="White_Button_"+door_number;


}

function slett()
{
	Destroy(gameObject);
	Debug.Log("Slettet");
}

function Open(knapp:String)
{
	if(knapp== black_button_with_number) {black_button=true;Debug.Log("aktiverer sort");}
	else if(knapp== white_button_with_number) {white_button=true;Debug.Log("aktiverer hvit");}
	else{black_button=false;white_button=false;Debug.Log("Deaktivert_2");}
	
}

function Update () {
if(black_button&&white_button){slett();}
}