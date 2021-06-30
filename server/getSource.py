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
path_storage_images = "../src/storages/images/content/" + \
    str(datetime.datetime.now().strftime("%Y")) + "/"
path_storage_images_import = "storages/images/content/" + \
    str(datetime.datetime.now().strftime("%Y")) + "/"


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
        self.tags = []
        self.link = ""
        self.timestamp = ""
        self.alt = ""

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

            # self.initAltImages()
            tempList2 = tempList[2].split('/')
            for part in tempList2:
                if(part == "gamek.vn" or part == "m.gamek.vn"):
                    print("Source From: " + part)
                    self.getSourceFrom_Gamek()
                    break
                elif(part == "kenh14.vn" or part == "m.kenh14.vn"):
                    print("Source From: " + part)
                    self.getSourceFrom_Kenh14()
                    break

            self.getDateTime()
            if self.check_download == 'y':
                self.downloadImages()
            self.setupContent()
            self.writing2files()

    def openBrowser(self):
        # selenium
        options = Options()
        options.add_argument("--headless")

        print("[*] Opening Firefox")
        try:
            self.driver = webdriver.Firefox(options=options)
        except Exception as e:
            try:
                print(e)
                print("    [!] Open on Windows")
                binary = FirefoxBinary(
                    "C:\\Program Files\\Mozilla Firefox\\firefox.exe")
                self.driver = webdriver.Firefox(
                    firefox_binary=binary, executable_path=r"C:\\geckodriver.exe", options=options)
            except Exception as e:
                try:
                    print(e)
                    print("    [!] Open on Linux")
                    self.driver = webdriver.Firefox(
                        executable_path='geckodriver/geckodriver')
                except Exception as e:
                    try:
                        print(e)
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
        print("[*] initAltImages")
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
        element_imgs_alt = element_rightdetail_content.find_elements_by_class_name(
            "PhotoCMS_Caption")
        self.images_alt = []
        if(len(element_imgs_alt) > 0):
            for element in element_imgs_alt:
                try:
                    temp_element = element.find_element_by_tag_name('p')
                    self.images_alt.append(
                        str(temp_element.text).replace("\"", "'"))
                except:
                    continue

        element_source = self.driver.find_element_by_class_name(
            "link-source-text-name")

        element_tags = element_rightdetail_content.find_elements_by_xpath(
            "//div[@class='tagnew mgt10']//h3//a")

        self.title = element_title.text
        self.author = element_author.text
        self.source = element_source.text
        self.description = element_description.text
        self.ps = []
        for p in element_ps:
            self.ps.append(p.text)

        self.images = []
        for img in element_imgs:
            # check_images_links
            img_link = str(img.get_attribute("src"))
            temp_list = img_link.split(".")
            if(temp_list[len(temp_list)-1] != 'svg'):
                self.images.append(img_link)
        for element in element_tags:
            self.tags.append(element.text)

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

        element_imgs_alt = element_body.find_elements_by_class_name(
            "PhotoCMS_Caption")
        self.images_alt = []
        if(len(element_imgs_alt) > 0):
            for element in element_imgs_alt:
                try:
                    temp_element = element.find_element_by_tag_name('p')
                    self.images_alt.append(
                        str(temp_element.text).replace("\"", "'"))
                except:
                    continue

        element_source = self.driver.find_element_by_class_name(
            "link-source-text-name")

        element_tags = element_body.find_elements_by_xpath(
            "//div[@class='klw-new-tags clearfix']//ul//li//a")

        self.title = element_title.text
        self.author = element_author.text
        self.source = element_source.text
        self.description = element_description.text
        self.ps = []
        for p in element_ps:
            self.ps.append(p.text)

        self.images = []
        self.videos = []
        for img in element_imgs:
            try:
                temp = str(img.get_attribute("src"))
                if(len(temp) > 10):
                    img_link = str(img.get_attribute("src"))
                temp_list = img_link.split(".")
                if(temp_list[len(temp_list)-1] != 'svg'):
                    self.images.append(img_link)
            except:
                continue
        for element in element_tags:
            try:
                self.tags.append(element.text)
                print(element.text)
            except:
                continue

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
        print("[*] Getting tags from link")
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
        self.current_year = x.strftime("%Y")
        self.current_month = x.strftime("%m")

        self.format_date = x.strftime(
            "%d")+"/"+x.strftime("%m")+"/"+x.strftime("%Y")
        self.format_time = x.strftime(
            "%I")+":"+x.strftime("%M")+" "+x.strftime("%p")
        self.timestamp = self.format_date+" "+self.format_time
        self.timeCombine = x.strftime("%Y")+x.strftime("%m")+x.strftime("%d") + \
            x.strftime("%H")+x.strftime("%M")+x.strftime("%S")
        self.imagename = self.timeCombine+"-"+self.link

    def setupContent(self):
        self.makeNewURL_link(self.URL_link)
        # self.title = self.title.replace("\"", "'")
        # self.description = self.description.replace("\"", "'")

        # const tagparam = ["gai-xinh", "hot-girl", "vo-ngoc-tran", "cong-dong-mang"];
        temp_tags = "tagparam = ["
        for tag in self.tags:
            temp_tags += '"'+tag+'",'
        temp_tags += '];'
        self.pageConstValue = "const category = '"+self.category+"';\nconst categoryLink = '/"+self.category+"';\nconst title = '"+self.title+"';\nconst author = '"+self.author+"';\nconst source = '"+self.source + \
            "';\nconst timestamp = '"+self.timestamp+"';\nconst description = '" + \
            self.description+"';\nconst link = '"+self.link+"';\nconst "+temp_tags

        self.content_p = ""
        for tag in self.tags:
            self.alt += tag + ','
        tempTags = self.tags
        temp_count = 0
        temp_images = []
        for image in self.images:
            temp_images.append(image)
        img_count = 1
        for p in self.ps:
            check_image = False
            # Add image between paragrapth
            for i in range(0, len(self.images_alt)):
                if(p == self.images_alt[i]):
                    try:
                        if self.check_download == 'n':
                            self.content_p += "<ContentImage src='" + \
                                temp_images[i] + "' alt='"+str(img_count)+", "+self.alt + \
                                "' note='"+self.images_alt[i]+"'/>\n"
                            img_count += 1
                        else:
                            self.content_p += "<ContentImage src={require('" + \
                                temp_images[i] + "').default} alt='"+str(img_count)+", "+self.alt + \
                                "' note='"+self.images_alt[i]+"'/>\n"
                            img_count += 1
                        temp_images[i] = ""

                        check_image = True
                    except:
                        continue
                    break
            if(check_image == False):
                # Add paragrapth and highlight tag

                # FIX
                self.content_p += "<p>"
                for temp_tag in tempTags:
                    if(len(p) > len(temp_tag)*2):
                        for i in range(0, len(p)-len(temp_tag)):
                            if(p[i:i+len(temp_tag)].upper() == temp_tag.upper()):
                                p = p[:i]+"<strong>" + \
                                    p[i:i+len(temp_tag)]+"</strong>" + \
                                    p[i+len(temp_tag):]
                                i = i+len(temp_tag)

                                # print("["+temp_tag+"]")
                                # print(p)
                                break
                self.content_p += p
                self.content_p += "</p>\n"

            if(temp_count == int(round(len(self.ps)/2.0))):
                self.content_p += '<RelationNewsInPage category={category} />'
            temp_count += 1
            # FIX

        self.content_images = ""
        for img in temp_images:
            if(len(img) > 5):
                if self.check_download == 'n':
                    self.content_images += "<ContentImage src='" + \
                        img + "' alt='"+str(img_count) + \
                        ", "+self.alt+"' note=''/>\n"
                    img_count += 1
                else:
                    self.content_images += "<ContentImage src={require('" + \
                        img + "').default} alt='" + \
                        str(img_count)+", "+self.alt+"' note=''/>\n"
                    img_count += 1

        self.filename = self.timeCombine+"-"+self.link+".js"
        self.imagename = self.timeCombine+"-"+self.link

        self.component = "page_" + self.timeCombine

        filepath = "./"+self.filename

        self.routeImport = "export { default as  " + \
            self.component+" } from \""+filepath+"\";"

        self.routeItem = "<Route exact path=\"/" + self.link + \
            "\" component={pages."+self.component+"}/>"

        # print(self.images[0])
        temp_src = ""
        if self.check_download == 'y':
            temp_src += "https://raw.githubusercontent.com/huyetnguyet/huyetnguyet.github.io/main/src/"

        for img in temp_images:
            if(len(img) > 5):
                temp_src += img
                break

        self.data = "{\n\"timestamp\": '"+self.timestamp+"',\n\"title\": '"+self.title+"',\n\"description\": '"+self.description+"',\n\"src\": '" +\
            temp_src + "',\n\"alt\": '"+self.alt+"',\n\"category\": '"+self.category+"',\n\"date\": '"+self.format_date+"',\n\"time\": '" +\
            self.format_time+"',\n\"link\": '/"+self.link+"',\n\"zcomponent\": '" +\
            self.component+"',\n\"filepath\": '"+filepath+"'\n}"

        data_json = {"timestamp": self.timestamp,
                     "title": self.title,
                     "description": self.description,
                     "src": temp_src,
                     "alt": self.alt,
                     "category": self.category,
                     "date": self.format_date,
                     "time": self.format_time,
                     "link": "/"+self.link,
                     "zcomponent": self.component,
                     "filepath": filepath,
                     }
        database_json.append(data_json)

        print("Paragraph: "+str(len(self.ps)))
        print("Images: "+str(len(self.images)))
        print("Alt: "+str(len(self.images_alt)))

    def downloadImages(self):
        try:
            chunk_size = 1024
            count = 10
            # print(self.images)
            for i in range(0, len(self.images)):
                url = self.images[i]
                if(url[:4] == "blob"):
                    continue
                templist = url.split('/')
                formatType = templist[len(templist)-1]
                if(len(formatType) > 10):
                    formatType = formatType[len(formatType)-10:]

                while True:
                    filename = path_storage_images+self.imagename+"-" + \
                        str(count)+"-"+formatType
                    if not os.path.exists(filename):
                        filename_import = path_storage_images_import+self.imagename+"-" + \
                            str(count)+"-"+formatType
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
                    self.images[i] = filename_import
                except Exception as e:
                    print("[!] dowload images error")
                    print(e)
                    print("[!] Try to download again")
                    with open(filename, 'wb') as f:
                        f.write(req.content)
                    print("Download Completed !!!")
                    self.images[i] = filename_import
                count += 1
        except Exception as e:
            print(e)
        # print(self.images)

    def writing2filesOrigin(self):
        print("[!] Writing ...")
        fw = open('./content/' +
                  self.filename, 'w', encoding="utf-8")
        print(self.filename)
        # print("\n")

        fr = open('./parts/part01.txt', 'r')
        for line in fr:
            fw.write(line)
        fr.close()

        fw.write(self.data+"\n\n")
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

        fa = open('./content/SetupRoute.js', 'a')
        fa.write(self.routeItem+"\n")
        fa.close()

        fa = open('./content/index.js', 'a')
        fa.write(self.routeImport+"\n")
        fa.close()

        print("[*] Write to data_json.json")
        write_json(filepath_data_json, database_json)

    def writing2files(self):

        print("[!] Writing ...")
        fw = open('../src/storages/content/' + self.current_year +
                  '/'+self.current_month+"/" +
                  self.filename, 'w', encoding="utf-8")
        print(self.filename)
        # print("\n")

        fr = open('./parts/part01.txt', 'r')
        for line in fr:
            fw.write(line)
        fr.close()

        fw.write(self.data+"\n\n")
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

        fr = open("../src/components/routePages.js", 'r')

        string_routePage = ''
        for line in fr:
            string_routePage += line
            for i in range(0, len(line)):
                if(line[i:i+len('<></>')] == '<></>'):
                    string_routePage += "\n"+self.routeItem+"\n"
                    break
        fw = open("../src/components/routePages.js", 'w')
        fw.write(string_routePage)
        fw.close()

        fa = open('../src/storages/content/'+self.current_year +
                  '/'+self.current_month+'/index.js', 'a')
        fa.write(self.routeImport+"\n")
        fa.close()

        print("[*] Write to data_json.json")
        write_json(filepath_data_json, database_json)


def checkData():
    filepath_data_json = "database/data_json.json"
    if(os.path.exists(filepath_data_json)):

        data = load_json(filepath_data_json)

        print("database length: "+str(len(data)))

        fw = open('../src/storages/database.js', 'w', encoding="utf-8")

        count = 1
        fw.write("export const dataFeatured=[")
        for obj in data:
            temp = "{title: '"+obj['title']+"',description: '"+obj['description']+"',src: '"+obj['src']+"',alt: '"+obj['alt']+"',category: '" + \
                obj['category']+"',time: '"+obj['time']+"',date: '"+obj['date']+"',timestamp: '"+obj['timestamp']+"',link: '"+obj['link'] + \
                "',component: '"+obj['zcomponent'] + \
                "',filepath: '"+obj['filepath'] + "'},"
            fw.write(temp)
            if(count == 3):
                break
            count += 1
        fw.write("]\n")

        count = 1
        fw.write("export const dataContent=[")
        for obj in data:
            if(count > 3):
                temp = "{title: '"+obj['title']+"',description: '"+obj['description']+"',src: '"+obj['src']+"',alt: '"+obj['alt']+"',category: '" + \
                    obj['category']+"',time: '"+obj['time']+"',date: '"+obj['date']+"',timestamp: '"+obj['timestamp']+"',link: '"+obj['link'] + \
                    "',component: '"+obj['zcomponent'] + \
                    "',filepath: '"+obj['filepath'] + "'},"
                fw.write(temp)
            count += 1
        fw.write("]\n")

        fw.write("export const dataContent02=[]")

        print("[*] Wrote database to database.js")
        fw.close()


if __name__ == "__main__":
    gs = GetSource()
    gs.main()
    checkData()
