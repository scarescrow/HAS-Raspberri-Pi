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

	p = GPIO.PWM(8, 50)
	p.start(0)
	while stop == "":
		for dc in range(0, 101, 5):
			p.ChangeDutyCycle(dc)
			time.sleep(0.1)
		for dc in range(100, -1, -5):
			p.ChangeDutyCycle(dc)
			time.sleep(0.1)