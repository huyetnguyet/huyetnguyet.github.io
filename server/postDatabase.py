from operator import itemgetter
from os import write
from requests.api import get
from methods_json import load_json, write_json
from datetime import datetime
import sys
import requests
import keys
from termcolor import colored, cprint

# api_key = input("sheet.best api-key: ")
api_key = keys.api_key_sheet_best


def sg_get():
    return requests.get(api_key)


def sb_post(data):
    requests.post(
        api_key,
        json=data,
    )


def sb_delete_row(numberOfRow):
    requests.delete(api_key + "/" + (numberOfRow-1))


def getDataFromGoogleSheet():
    cprint("[*] Getting database from google sheet", 'green')
    response = sg_get()
    data = response.json()
    data = sorted(data, key=lambda d: d["zcomponent"], reverse=True)
    cprint("Database: " + str(len(data)), 'yellow')

    fw = open('../src/storages/database.js', 'w', encoding="utf-8")
    fw_data = open('../src/storages/database/data.js',
                   'w', encoding="utf-8")
    fw_games = open('../src/storages/database/data_games.js',
                    'w', encoding="utf-8")
    fw_images = open('../src/storages/database/data_images.js',
                     'w', encoding="utf-8")
    fw_life = open('../src/storages/database/data_life.js',
                   'w', encoding="utf-8")
    fw_news = open('../src/storages/database/data_news.js',
                   'w', encoding="utf-8")
    fw_stars = open('../src/storages/database/data_stars.js',
                    'w', encoding="utf-8")
    fw_tech = open('../src/storages/database/data_tech.js',
                   'w', encoding="utf-8")
    fw_travel = open('../src/storages/database/data_travel.js',
                     'w', encoding="utf-8")

    fw_data.write("export const data=[")
    fw_games.write("export const data_games=[")
    fw_images.write("export const data_images=[")
    fw_life.write("export const data_life=[")
    fw_news.write("export const data_news=[")
    fw_stars.write("export const data_stars=[")
    fw_tech.write("export const data_tech=[")
    fw_travel.write("export const data_travel=[")

    count = 1
    countdata = 1
    start = False
    end = True
    for obj in data:
        temp = "{title: '"+obj['title']+"',description: '"+obj['description']+"',src: '"+obj['src']+"',alt: '"+obj['alt']+"',category: '" + \
            obj['category']+"',time: '"+obj['time']+"',date: '"+obj['date']+"',timestamp: '"+obj['timestamp']+"',link: '"+obj['link'] + \
            "',component: '"+obj['zcomponent'] + "'},"
        if(count < 3):
            if start == False:
                if(end == False):
                    fw.write("]\n")
                    end = True
                cprint("dataFeatured", 'yellow')
                fw.write("export const dataFeatured=[")
                start = True
                end = False
            fw.write(temp)
        elif(count == 3):
            fw.write(temp)
            fw.write("]\n")
            start = False
            end = True
        if(count > 3 and count < 13+50*countdata):
            if start == False:
                if(end == False):
                    fw.write("]\n")
                    end = True
                if(countdata < 10):
                    if(countdata == 1):
                        cprint("dataContent", 'yellow')
                        fw.write("export const dataContent=[")
                    else:
                        cprint("dataContent0" + str(countdata), 'yellow')
                        fw.write("export const dataContent0" +
                                 str(countdata)+"=[")
                else:
                    cprint("dataContent" + str(countdata), 'yellow')
                    fw.write("export const dataContent"+str(countdata)+"=[")
                start = True
                end = False
            fw.write(temp)
        elif(count == 13+50*countdata):
            fw.write("]\n")
            start = False
            end = True
            countdata += 1
        count += 1

        fw_data.write(temp)
        if(obj['category'] == "games"):
            fw_games.write(temp)
        elif(obj['category'] == "images"):
            fw_images.write(temp)
        elif(obj['category'] == "life"):
            fw_life.write(temp)
        elif(obj['category'] == "news"):
            fw_news.write(temp)
        elif(obj['category'] == "stars"):
            fw_stars.write(temp)
        elif(obj['category'] == "tech"):
            fw_tech.write(temp)
        elif(obj['category'] == "travel"):
            fw_travel.write(temp)

    if(end == False):
        fw.write("]\n")

    fw_data.write("]\n")
    fw_games.write("]\n")
    fw_images.write("]\n")
    fw_life.write("]\n")
    fw_news.write("]\n")
    fw_stars.write("]\n")
    fw_tech.write("]\n")
    fw_travel.write("]\n")

    cprint("[*] Wrote database to database.js", 'green')
    fw.close()
    fw_data.close()
    fw_games.close()
    fw_images.close()
    fw_life.close()
    fw_news.close()
    fw_stars.close()
    fw_tech.close()
    fw_travel.close()


def writeDataToGoogleSheet():
    data = load_json("database/data_json.json")
    sb_post(data)
    cprint("[*] Updated to Google Sheet", 'green')


if __name__ == '__main__':

    check_post = False
    while True:
        print("[1] POST to Google Sheet")
        print("[2] Update local database")
        choice = int(input("Choice: "))
        if(choice == 1 and check_post == False):
            writeDataToGoogleSheet()
            check_post = True
        elif(choice == 2):
            getDataFromGoogleSheet()
