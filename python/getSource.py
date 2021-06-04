import string
import datetime
import html
import requests
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary
from selenium import webdriver
import time
import sys
import os

os.system("cls")

URL_link = input("URL: ")


# ------------------------------------------
# Get tags
def getTags(tags):
    newString = tags[12:len(tags)-2]
    new2String = newString.replace("\"", "")
    tags = new2String.split(",")
    newTags = []
    for item in tags:
        item = item.replace("-", " ")
        newTags.append(string.capwords(item))
    return newTags


r = requests.get(URL_link)

lines = html.unescape(r.text)

for i in range(0, len(lines)):
    if(lines[i:i+len("tagparam")] == "tagparam"):
        for j in range(i, len(lines)):
            if(lines[j:j+len(";")] == ";"):
                # print(lines[i:j])
                tags = lines[i:j+1]
                break
        break


print("Caregory:")
print("1. Games")
print("2. News")
print("3. Images")
print("4. Tech")
choice_category = int(input("category: "))
if(choice_category == 1):
    category = "games"
elif(choice_category == 2):
    category = "news"
elif(choice_category == 3):
    category = "images"
elif(choice_category == 4):
    category = "tech"
print(category)

print("\nTags: ")
tempTags = getTags(tags)
count = 1
for tag in tempTags:
    print(str(count)+". "+tag)
    count += 1
choice_alt = int(input("ALT_Image: "))
alt = tempTags[choice_alt-1]
print(alt)

# ------------------------------------------

# selenium
options = Options()
options.add_argument("--headless")

print("[!] Opening Firefox")
try:
    driver = webdriver.Firefox(options=options)
except Exception as e:
    try:
        binary = FirefoxBinary(
            "C:\\Program Files\\Mozilla Firefox\\firefox.exe")
        driver = webdriver.Firefox(
            firefox_binary=binary, executable_path=r"C:\\geckodriver.exe", options=options)
    except Exception as e:
        try:
            driver = webdriver.Firefox(
                executable_path='geckodriver/geckodriver')
        except Exception as e:
            try:
                driver = webdriver.Firefox(
                    executable_path='geckodriver\\geckodriver')
            except Exception as e:
                print("!!! ERROR: " + str(e))
                sys.exit()

print("[!] Opening URL")
driver.get(URL_link)
time.sleep(5)
element_detail = driver.find_element_by_class_name("detail")
element_title = element_detail.find_element_by_tag_name('h1')

element_author = element_detail.find_element_by_class_name("author")

element_rightdetail = driver.find_element_by_class_name("rightdetail")
element_rightdetail_content = element_rightdetail.find_element_by_class_name(
    "rightdetail_content")
element_description = element_rightdetail.find_element_by_tag_name(
    'h2')
element_ps = element_rightdetail_content.find_elements_by_tag_name('p')
element_imgs = element_rightdetail_content.find_elements_by_xpath(
    "//img[@type='photo']")
element_source = driver.find_element_by_class_name("link-source-text-name")


title = element_title.text
author = element_author.text
source = element_source.text
description = element_description.text
ps = []
for p in element_ps:
    ps.append(p.text)

images = []
for img in element_imgs:
    images.append(str(img.get_attribute("src")))

driver.close()
print("[!] Closed Firefox")

# shorten URL_link
for i in range(len(URL_link)-1, 0, -1):
    if(URL_link[i] == "-"):
        end = i
        for j in range(i, 0, -1):
            if(URL_link[j] == "/"):
                start = j+1
                break
        break
link = URL_link[start:end]


x = datetime.datetime.now()
format_date = x.strftime("%d")+"/"+x.strftime("%m")+"/"+x.strftime("%Y")
format_time = x.strftime("%I")+":"+x.strftime("%M")+" "+x.strftime("%p")


html = "const category = \""+category+"\";\nconst categoryLink = \"/"+category+"\";\nconst title = \""+title+"\";\nconst author = \""+author+"\";\nconst source = \""+source + \
    "\";\nconst date = \""+format_date+"\";\nconst time = \""+format_time+"\";\nconst description = \"" + \
    description+"\";\nconst link = \""+link+"\";\nconst "+tags

content_p = ""
for p in ps:
    content_p += "<p>"+p+"</p>\n"

content_images = ""
for img in images:
    content_images += "<ContentImage src=\"" + \
        img + "\" alt=\""+alt+"\" note=\"\"/>\n"


x = datetime.datetime.now()

timestamp = format_date+" "+format_time
filename = x.strftime("%Y")+x.strftime("%m")+x.strftime("%d") + \
    x.strftime("%I")+x.strftime("%M")+"-"+link+".js"

data = "<ContentItem title=\""+str(title)+"\"\ncontent=\""+str(description) + \
    "\" \nsrc=\"" + \
    str(images[0])+"\" \nalt=\""+alt+"\" \ncategory=\""+category + \
    "\" \ntime=\""+timestamp+"\" \nlink=\"/"+link+"\"/>"

data_output = "{title=\""+str(title)+"\"\ncontent=\""+str(description) + \
    "\" \nsrc=\"" + \
    str(images[0])+"\" \nalt=\""+alt+"\" \ncategory=\""+category + \
    "\" \ntime=\""+timestamp+"\" \nlink=\"/"+link+"\"},"

data_google_sheet = str(title)+"\n"+str(description)+"\n" + \
    str(images[0])+"\n"+alt+"\n"+category+"\n" + \
    format_date+"\n"+format_time+"\n/"+link+"\n"


component = "page_" + x.strftime("%Y")+x.strftime("%m")+x.strftime("%d") + \
    x.strftime("%I")+x.strftime("%M")+x.strftime("%S")

filePath = "\"../storages/content/"+filename+"\""

routeImport = "import "+component+" from "+filePath

routeItem = "<Route exact path=\"/"+link+"\" component={"+component+"}/>"

print("[!] Writing ...")
fw = open('./content/'+filename, 'w', encoding="utf-8")
print(filename)
print("\n\n")


fr = open('./parts/part01.txt', 'r')
for line in fr:
    fw.write(line)
fr.close()


fw.write(data)
print(data)
print("\n\n")


fr = open('./parts/part02.txt', 'r')
for line in fr:
    fw.write(line)
fr.close()


fw.write(html)
print(html)
print("\n\n")


fr = open('./parts/part03.txt', 'r')
for line in fr:
    fw.write(line)
fr.close()


fw.write(content_p)
fw.write(content_images)
print(content_p)
print("\n\n")
print(content_images)
print("\n\n")


fr = open('./parts/part04.txt', 'r')
for line in fr:
    fw.write(line)
fr.close()

fw.close()

fa = open('./import.js', 'a')
fa.write(routeImport+"\n")
fa.close()

fa = open('./route.js', 'a')
fa.write(routeItem+"\n")
fa.close()

fa = open('./data.txt', 'a', encoding="utf-8")
fa.write(data_google_sheet+"\n")
fa.close()

fa = open('./data_output.txt', 'a', encoding="utf-8")
fa.write(data_google_sheet+"\n")
fa.close()

fa = open('./data_google_sheet.txt', 'a', encoding="utf-8")
fa.write(data_google_sheet+"\n")
fa.close()

print(routeImport)
print("\n\n")
print(routeItem)
print("\n\n")
