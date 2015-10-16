#pragma strict
var scale:float=1;
var intensity:float=1.5;
var heightScale:float=1;
var direction:float=1; //1= y, 2=x

function Start () {

}

function Update () {
	if(direction==1)
	transform.position.y= heightScale*Mathf.PerlinNoise(Time.time+(transform.position.x*scale)*intensity,intensity*Time.time*(transform.position.z*scale));
	else{
		transform.position.x=  heightScale *Mathf.PerlinNoise(Time.time+(transform.position.y*scale),Time.time*(transform.position.z*scale));


	}
}