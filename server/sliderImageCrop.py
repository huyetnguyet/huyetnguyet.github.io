
# Importing Image class from PIL module
from PIL import Image
import os
import sys
import glob

import shutil

width = 640
height = 360

files = glob.glob('./temp_images/*')
count_down = 0

for temp_file in files:
    count_down += 1
    print(str(count_down)+'/'+str(len(files)))
    try:
        # Open an Image
        img = Image.open(temp_file)
        filename = temp_file.split('\\')[1]
        img = img.resize((width, height))
        shutil.move(temp_file, './temp_images/original_'+filename)
        img.save("./temp_images/"+filename)

    except Exception as e:
        print(e)
