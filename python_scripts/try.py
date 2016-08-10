from threading import Timer

def getCommand():
	global stop
	stop = raw_input()

if __name__ == '__main__':
	global stop
	stop = ""
	Timer(10, getCommand).start()
	while stop == "":
		with open('a.txt', "a") as fp:
			fp.write("Hello\n")