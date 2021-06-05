from tqdm import tqdm
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
from urllib import request

from methods_json import load_json, write_json

os.system("cls")

database_json = []

if not os.path.exists("database"):
    os.system("mkdir database")
if not os.path.exists("content"):
    os.system("mkdir content")


filepath_data_json = "database/data_json.json"
if(os.path.exists(filepath_data_json)):

    database_json = load_json(filepath_data_json)

    # print(database_json)
    print("database length: "+str(len(database_json)))


class GetSource:
    def __init__(self):
        self.initValues()

    def initValues(self):
        self.title = ""
        self.author = ""
        self.source = ""
        self.time = ""
        self.date = ""
        self.ps = []
        self.images = []
        self.category = ""
        self.tags = ""
        self.link = ""
        self.timestamp = ""

    def main(self):

        self.openBrowser()
        fr = open("links.txt", 'r')
        for line in fr:
            self.initValues()
            print("\n\n"+line)
            tempList = line.split(',')
            self.category = tempList[0]
            self.check_download = tempList[1]
            self.URL_link = tempList[2]

            # while True:
            # self.URL_link = input("\nURL: ")
            # self.initCategory()
            self.initAltImages()
            tempList2 = tempList[2].split('/')
            # print(tempList2)
            for part in tempList2:
                if(part == "gamek.vn" or part == "m.gamek.vn"):
                    print("Source From: " + part)
                    self.getSourceFrom_Gamek()
                    break
                elif(part == "kenh14.vn" or part == "m.kenh14.vn"):
                    print("Source From: " + part)
                    self.getSourceFrom_Kenh14()
                    break
            self.setupContent()
            self.writing2files()
            if self.check_download == 'y':
                self.downloadImages()

    def openBrowser(self):
        # selenium
        options = Options()
        # options.add_argument("--headless")

        print("[*] Opening Firefox")
        try:
            self.driver = webdriver.Firefox(options=options)
        except Exception as e:
            try:
                print("    [!] Open on Windows")
                binary = FirefoxBinary(
                    "C:\\Program Files\\Mozilla Firefox\\firefox.exe")
                self.driver = webdriver.Firefox(
                    firefox_binary=binary, executable_path=r"C:\\geckodriver.exe", options=options)
            except Exception as e:
                try:
                    print("    [!] Open on Linux")
                    self.driver = webdriver.Firefox(
                        executable_path='geckodriver/geckodriver')
                except Exception as e:
                    try:
                        print("    [!] Trying open last chance")
                        self.driver = webdriver.Firefox(
                            executable_path='geckodriver\\geckodriver')
                    except Exception as e:
                        print("!!! ERROR: " + str(e))
                        sys.exit()
        self.driver.set_window_position(0, 0)
        self.driver.set_window_size(100, 100)

    def exit_handler(self):
        print("exit_handler")
        self.driver.close()
        self.driver.quit()

    def __exit__(self):
        print("__exit__")
        self.driver.close()
        self.driver.quit()

    def __del__(self):
        print("__del__")
        self.driver.close()
        self.driver.quit()

    def initAltImages(self):
        '''
        print("\nTags: ")
        self.getTagsFromLink()
        tempTags = self.getTagsFromString(self.tags)
        count = 1
        for tag in tempTags:
            print(str(count)+". "+tag)
            count += 1
        choice_alt = int(input("ALT_Image: "))
        self.alt = tempTags[choice_alt-1]
        print("[#] Alt Images = "+self.alt)
        '''
        self.getTagsFromLink()
        tempTags = self.getTagsFromString(self.tags)
        self.alt = ""
        for tag in tempTags:
            if len(tag) < 3:
                tag = self.category
            self.alt += tag + ", "
        print("[#] Alt Images = "+self.alt)

    def getSourceFrom_Gamek(self):
        print("[!] Opening URL")
        self.driver.get(self.URL_link)
        time.sleep(5)
        element_detail = self.driver.find_element_by_class_name("detail")
        element_title = element_detail.find_element_by_tag_name('h1')

        element_author = element_detail.find_element_by_class_name("author")

        element_rightdetail = self.driver.find_element_by_class_name(
            "rightdetail")
        element_rightdetail_content = element_rightdetail.find_element_by_class_name(
            "rightdetail_content")
        element_description = element_rightdetail.find_element_by_tag_name(
            'h2')
        element_ps = element_rightdetail_content.find_elements_by_tag_name('p')
        element_imgs = element_rightdetail_content.find_elements_by_tag_name(
            "img")
        element_source = self.driver.find_element_by_class_name(
            "link-source-text-name")

        self.title = element_title.text
        self.author = element_author.text
        self.source = element_source.text
        self.description = element_description.text
        self.ps = []
        for p in element_ps:
            self.ps.append(p.text)

        self.images = []
        for img in element_imgs:
            self.images.append(str(img.get_attribute("src")))

    def getSourceFrom_Kenh14(self):
        print("[!] Opening URL")
        self.driver.get(self.URL_link)
        time.sleep(5)

        element_body = self.driver.find_element_by_class_name("klw-body-top")
        element_title = element_body.find_element_by_tag_name('h1')
        element_author = element_body.find_element_by_class_name(
            "kbwcm-author")
        element_description = element_body.find_element_by_class_name(
            "knc-sapo")
        element_ps = element_body.find_elements_by_tag_name('p')
        element_imgs = element_body.find_elements_by_tag_name("img")

        element_source = self.driver.find_element_by_class_name(
            "link-source-text-name")

        self.title = element_title.text
        self.author = element_author.text
        self.source = element_source.text
        self.description = element_description.text
        self.ps = []
        for p in element_ps:
            self.ps.append(p.text)

        self.images = []
        for img in element_imgs:
            temp = str(img.get_attribute("src"))
            if(len(temp) > 10):
                self.images.append(temp)

        try:
            element_videos = element_body.find_elements_by_tag_name(
                'video')
            if len(element_videos) > 0:
                try:
                    for video in element_videos:
                        temp = str(video.get_attribute("src"))
                        if(len(temp) > 10 and temp not in self.images):
                            self.images.append(temp)
                except Exception as e:
                    print(e)
                    time.sleep(10)
        except:
            None

    def getTagsFromString(self, tags):
        newString = tags[12:len(tags)-2]
        new2String = newString.replace("\"", "")
        tags = new2String.split(",")
        newTags = []
        for item in tags:
            item = item.replace("-", " ")
            newTags.append(string.capwords(item))
        return newTags

    def getTagsFromLink(self):
        '''
        r = requests.get(self.URL_link, headers={'User-Agent': 'Custom'})
        lines = html.unescape(r.text)
        '''

        response = request.urlopen(self.URL_link)
        lines = response.read().decode('utf-8')

        # print(lines)
        # print(len(lines))
        # print(self.URL_link)

        for i in range(0, len(lines)):
            if(lines[i:i+len("tagparam")] == "tagparam"):
                # print(i)
                for j in range(i, len(lines)):
                    if(lines[j:j+1] == ";"):
                        # print(lines[i:j])
                        self.tags = lines[i:j+1]
                        break
                break

    def makeNewURL_link(self, URL_link):
        for i in range(len(URL_link)-1, 0, -1):
            if(URL_link[i] == "-"):
                end = i
                for j in range(i, 0, -1):
                    if(URL_link[j] == "/"):
                        start = j+1
                        break
                break
        self.link = URL_link[start:end]

    def getDateTime(self):
        x = datetime.datetime.now()
        self.format_date = x.strftime(
            "%d")+"/"+x.strftime("%m")+"/"+x.strftime("%Y")
        self.format_time = x.strftime(
            "%I")+":"+x.strftime("%M")+" "+x.strftime("%p")
        self.timestamp = self.format_date+" "+self.format_time
        self.timeCombine = x.strftime("%Y")+x.strftime("%m")+x.strftime("%d") + \
            x.strftime("%I")+x.strftime("%M")+x.strftime("%S")

    def setupContent(self):
        self.makeNewURL_link(self.URL_link)
        self.getDateTime()
        self.title = self.title.replace("\"", "'")
        self.description = self.description.replace("\"", "'")

        self.pageConstValue = "const category = \""+self.category+"\";\nconst categoryLink = \"/"+self.category+"\";\nconst title = \""+self.title+"\";\nconst author = \""+self.author+"\";\nconst source = \""+self.source + \
            "\";\nconst date = \""+self.format_date+"\";\nconst time = \""+self.format_time+"\";\nconst description = \"" + \
            self.description+"\";\nconst link = \""+self.link+"\";\nconst "+self.tags

        self.content_p = ""
        for p in self.ps:
            self.content_p += "<p>"+p+"</p>\n"

        self.content_images = ""
        for img in self.images:
            self.content_images += "<ContentImage src=\"" + \
                img + "\" alt=\""+self.alt+"\" note=\"\"/>\n"

        self.filename = self.timeCombine+"-"+self.link+".js"
        self.imagename = self.timeCombine+"-"+self.link

        self.component = "page_" + self.timeCombine

        filepath = "../storages/content/"+self.filename

        self.routeImport = "export { default as  " + \
            self.component+" } from \""+filepath+"\""

        self.routeItem = "<Route exact path=\"/" + \
            self.link+"\" component={"+self.component+"}/>"

        self.data = "<ContentItem title=\""+self.title+"\"\description=\""+self.description + \
            "\" \nsrc=\"" + \
            self.images[0]+"\" \nalt=\""+self.alt+"\" \ncategory=\""+self.category + \
            "\" \ntime=\""+self.timestamp+"\" \nlink=\"/"+self.link+"\"/>"

        self.data_const = "{title:\""+self.title+"\",\description:\""+self.description + \
            "\" ,\nsrc:\"" + \
            self.images[0]+"\" ,\nalt:\""+self.alt+"\" ,\ncategory:\""+self.category + \
            "\" ,\ntime:\""+self.timestamp+"\" ,\nlink:\"/"+self.link + \
            "\",component:\""+self.component+"\",\nfilepath:\""+filepath+"\"},"

        self.data_google_sheet = self.title+"\n"+self.description+"\n" + \
            self.images[0]+"\n"+self.alt+"\n"+self.category+"\n" + \
            self.format_date+"\n"+self.format_time+"\n/" + \
            self.link+"\n"+self.component+"\n"+filepath+"\n"

        data_json = {"timestamp": self.timestamp,
                     "title": self.title,
                     "description": self.description,
                     "src": self.images[0],
                     "alt": self.alt,
                     "category": self.category,
                     "date": self.format_date,
                     "time": self.format_time,
                     "link": "/"+self.link,
                     "zcomponent": self.component,
                     "filepath": filepath,
                     }
        database_json.append(data_json)

    def downloadImages(self):
        chunk_size = 1024
        count = 10
        for url in self.images:
            if(url[:4] == "blob"):
                continue
            templist = url.split('/')
            formatType = templist[len(templist)-1]
            if(len(formatType) > 10):
                formatType = formatType[len(formatType)-10:]

            while True:
                filename = "images/"+self.imagename+"-" + \
                    str(count)+"-"+formatType
                if not os.path.exists(filename):
                    break
                else:
                    count += 1
            try:
                req = requests.get(url, stream=True)
                total_size = int(req.headers['content-length'])

                with open(filename, "wb") as file:
                    for data in tqdm(iterable=req.iter_content(chunk_size=chunk_size), total=total_size/chunk_size, unit='KB'):
                        file.write(data)
                print("Download Completed !!!")
            except Exception as e:
                print("[!] dowload images error")
                print(e)
                print("[!] Try to download again")
                with open(filename, 'wb') as f:
                    f.write(req.content)
                print("Download Completed !!!")
            count += 1

    def writing2files(self):
        print("[!] Writing ...")
        fw = open('./content/'+self.filename, 'w', encoding="utf-8")
        print(self.filename)
        # print("\n")

        fr = open('./parts/part01.txt', 'r')
        for line in fr:
            fw.write(line)
        fr.close()

        fw.write(self.data+"\n\n")
        fw.write(self.data_const+"\n\n")
        fw.write(self.data_google_sheet+"\n\n")
        # print(self.data)
        # print("\n")

        fr = open('./parts/part02.txt', 'r')
        for line in fr:
            fw.write(line)
        fr.close()

        fw.write(self.pageConstValue)
        print(self.pageConstValue)
        # print("\n")

        fr = open('./parts/part03.txt', 'r')
        for line in fr:
            fw.write(line)
        fr.close()

        fw.write(self.component)

        fr = open('./parts/part04.txt', 'r')
        for line in fr:
            fw.write(line)
        fr.close()

        fw.write(self.content_p)
        fw.write(self.content_images)
        print("Paragraphs: "+str(len(self.ps)))
        print("Images: "+str(len(self.images)))

        fr = open('./parts/part05.txt', 'r')
        for line in fr:
            fw.write(line)
        fr.close()

        fw.close()

        fa = open('./database/SetupRoute.js', 'a')
        fa.write(self.routeImport+"\n")
        fa.write("\n\n\n\n\n")
        fa.write(self.routeItem+"\n")
        fa.close()

        # print(self.routeImport)
        # print("\n")

        # print(self.routeItem)
        # print("\n")

        print("[*] Write to data.txt")
        fa = open('./database/data.txt', 'a', encoding="utf-8")
        fa.write(self.data+"\n")
        fa.close()

        print("[*] Write to data_const.txt")
        fa = open('./database/data_const.txt', 'a', encoding="utf-8")
        fa.write(self.data_const+"\n")
        fa.close()

        print("[*] Write to data_google_sheet.txt")
        fa = open('./database/data_google_sheet.txt', 'a', encoding="utf-8")
        fa.write(self.data_google_sheet+"\n")
        fa.close()

        print("[*] Write to data_json.json")
        write_json(filepath_data_json, database_json)


if __name__ == "__main__":
    gs = GetSource()
    gs.main()
