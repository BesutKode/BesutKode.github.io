from md5 import md5 #for checksum
i = 0 #result
for x in range(1000):
	if (x % 3 == 0) | (x % 5 == 0): #check if x divide by 3 or 5 is 0
		i += x #and if true, that's the real number for 3 or 5, adding result to i


print "Hasil Akhir : " + str(i) #printing result
print "Checksum : " + md5(str(i)).hexdigest() #checksum for comparing answer to project_euler answer on wikimedia
