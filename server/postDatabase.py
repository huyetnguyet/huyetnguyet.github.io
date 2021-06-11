from operator import itemgetter
from os import write
from requests.api import get
from methods_json import load_json, write_json
from datetime import datetime
import sys
import requests

api_key = input("sheet.best api-key: ")


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
    print("[*] Getting database from google sheet")
    response = sg_get()
    data = response.json()
    data = sorted(data, key=lambda d: d["zcomponent"], reverse=True)
    print("Database: " + str(len(data)))

    fw = open('../src/storages/database.js', 'w', encoding="utf-8")

    count = 1
    fw.write("export const dataFeatured=[")
    for obj in data:
        temp = "{title: '"+obj['title']+"',description: '"+obj['description']+"',src: '"+obj['src']+"',alt: '"+obj['alt']+"',category: '" + \
            obj['category']+"',time: '"+obj['time']+"',date: '"+obj['date']+"',timestamp: '"+obj['timestamp']+"',link: '"+obj['link'] + \
            "',component: '"+obj['zcomponent'] + \
            "',filepath: '"+obj['filepath'] + \
            "',download:'"+obj['download']+"'},"
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
                "',filepath: '"+obj['filepath'] + \
                "',download:'"+obj['download']+"'},"
            fw.write(temp)
        if(count == 50):
            break
        count += 1
    fw.write("]\n")

    count = 1
    fw.write("export const dataContent02=[")
    for obj in data:
        if(count > 50):
            temp = "{title: '"+obj['title']+"',description: '"+obj['description']+"',src: '"+obj['src']+"',alt: '"+obj['alt']+"',category: '" + \
                obj['category']+"',time: '"+obj['time']+"',date: '"+obj['date']+"',timestamp: '"+obj['timestamp']+"',link: '"+obj['link'] + \
                "',component: '"+obj['zcomponent'] + \
                "',filepath: '"+obj['filepath'] + \
                "',download:'"+obj['download']+"'},"
            fw.write(temp)
        count += 1
    fw.write("]\n")

    print("[*] Wrote database to database.js")
    fw.close()


def writeDataToGoogleSheet():
    data = load_json("database/data_json.json")
    sb_post(data)
    print("[*] Updated to Google Sheet")


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
