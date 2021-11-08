
# Importing the PIL library
from PIL import Image
from PIL import ImageDraw
from PIL import ImageFont
import os
import sys
import glob

import shutil

if not os.path.exists("./temp_images/original"):
    os.system("mkdir ./temp_images/original")
if not os.path.exists("./temp_images/edited"):
    os.system("mkdir ./temp_images/edited")

files = glob.glob('./temp_images/*')
count_down = 0
for temp_file in files:
    count_down += 1
    print(str(count_down)+'/'+str(len(files)))
    try:
        # Open an Image
        img = Image.open(temp_file)

        filename = temp_file.split('\\')[1]

        # Call draw Method to add 2D graphis in an image
        I1 = ImageDraw.Draw(img)

        # Cutom font style and font size
        myFont = ImageFont.truetype('./geckodriver/OpenSans-Bold.ttf', 20)

        # Add Text to an image
        I1.text((10, 5), "huyetnguyet.com", font=myFont, fill=(255, 0, 0))

        # Display edited image
        # img.show()

        if not os.path.exists("./temp_images/edited/"+filename):
            # Save the edited image
            img.save("./temp_images/edited/"+filename)
            shutil.move(temp_file, './temp_images/original/'+filename)
        else:
            count = 0
            while(True):
                if not os.path.exists("./temp_images/edited/"+str(count)+filename):
                    img.save("./temp_images/edited/"+str(count)+filename)
                    shutil.move(temp_file, './temp_images/original/'+filename)
                    break
                count += 1
    except Exception as e:
        print(e)
