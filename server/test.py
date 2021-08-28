import os
import sys
import glob

fr = open("./links.txt", "r")

temp_list = []
for line in fr:
    if(line not in temp_list):
        temp_list.append(line)
    else:
        print(line)
fr.close()

fw = open("./test.txt", 'w')

for line in temp_list:
    fw.write(line)
fw.close()
