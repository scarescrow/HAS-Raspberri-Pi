import RPi.GPIO as GPIO
import time
from threading import Timer

def getCommand():
	global stop
	stop = raw_input()

if __name__ == "__main__":
	GPIO.setmode(GPIO.BOARD)
	GPIO.setup(8, GPIO.OUT)
	
	global stop
	stop = ""

	Timer(1, getCommand).start()

	while stop == "":
		GPIO.output(8, True)
		time.sleep(0.5)
		GPIO.output(8, False)
		time.sleep(0.5)
