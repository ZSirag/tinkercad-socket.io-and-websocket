package serialCad;
import processing.core.*;
public class SerialStart {
	PApplet myParent;
	private String message ="";
	public SerialStart(PApplet theParent) {
		myParent = theParent;
	}
	public String read(){
		int len = message.length();
		if(len < 1) {
			message = "";
			return null;
		}
		else {			
			String pass = message;
			message = "";
			return pass;
		}
		
	}
	public Boolean available() {
		int len = message.length();
		if(len > 0) {
			return true;
		}else {			
			return false;
		}
	}
	public void send(String x){
		message = x;
	}
	
}

