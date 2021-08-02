import os
import sys
import glob

files = glob.glob('../src/storages/content/2021/07/*')
count_down = 0
for temp_file in files:
    count_down += 1
    print(str(count_down)+'/'+str(len(files))+' '+temp_file)
