private var buttonWidth = 200;
private var buttonHeight = 80;
private var micIn : boolean = false;
private var getAudioSource;
private var deviceName : String;

function Start() {
	if(Microphone.devices.Length <= 0){ // check if there is at least 1 microphone
		Debug.Log("Microphone not Connected");
	}else{
		micIn = true; 
		deviceName = Microphone.devices[0]; // 0 element is the default microphone
	}
	 Debug.Log(deviceName);
	 getAudioSource = this.GetComponent("AudioSource"); /* the object where u attach this script must have an AudioSource attached */
	}	


function Update(){
}
// Audio Recorder
function registerAudio() {
	Debug.Log("Recording BlackAudio");
	getAudioSource.clip = Microphone.Start(deviceName, true, 20, 44100); 
	GetComponent.<AudioSource>().loop = true;
	getAudioSource.Play();
	

}

function stopRecording(){
	Debug.Log("Stop Recording");
	Microphone.End(deviceName);
}

function playAudio(){
	getAudioSource.Play(); 
}

function OnGUI(){

	if(micIn){
		if(!Microphone.IsRecording(deviceName)){
			if(GUI.Button(Rect ( 10, (buttonHeight)+10 , buttonWidth, buttonHeight), "Record black")){
				registerAudio();
			}
		}else{
			if(GUI.Button(Rect ( 10, (buttonHeight)+10 , buttonWidth, buttonHeight), "Stop Recording")){
				stopRecording();
			}
		}

		if(GUI.Button(Rect ( 10, 2*(buttonHeight)+10 , buttonWidth, buttonHeight), "PlayAudio")){
			playAudio();
		}

		if(Microphone.IsRecording(deviceName)){
			GUI.Label(Rect(buttonWidth +50, 10, buttonWidth, buttonHeight), "Recording");
		}else{
			GUI.Label(Rect(buttonWidth +50, 10, buttonWidth, buttonHeight), "Not Recording");
		}
	}
}