from os import write
from requests.api import get
from methods_json import load_json, write_json
from datetime import datetime

import requests

api_key = "https://sheet.best/api/sheets/10884386-b1b0-456a-a1af-91138e3ee99b"

'''
 json=[{
            'Id': '10',
            'Name': 'Jack Doe',
            'Age': '97',
            'Created at': datetime.now().isoformat(),
        }, {
            'Id': '11',
            'Name': 'John Doe',
            'Age': '44',
            'Created at': datetime.now().isoformat(),
        }],
'''


def sg_get():
    return requests.get(api_key)


def sb_post(data):
    requests.post(
        api_key,
        json=data,
    )


def sb_delete_row(numberOfRow):
    requests.delete(api_key + "/" + (numberOfRow-1))


def sb_delete_row_filter(colume_name, filter):
    '''
    # Only rows with "Jane Doe" as "Name"
    requests.get(
        'https://sheet.best/api/sheets/cf969697-682a-40e3-bad4-d54803eeeacf/Name/Jane Doe')

    # Only rows with "John" inside "Name"
    requests.get(
        'https://sheet.best/api/sheets/cf969697-682a-40e3-bad4-d54803eeeacf/Name/*John*')

    # Only rows with "John" inside "Name" and with "Age" as "56"
    requests.get(
        'https://sheet.best/api/sheets/cf969697-682a-40e3-bad4-d54803eeeacf/search?Name=*John*&Age=56')

    # Only rows with "Arthur" inside "Name" inside "Admin" tab
    requests.get('https://sheet.best/api/sheets/cf969697-682a-40e3-bad4-d54803eeeacf/tabs/Admin/Name/*Arthur*')
    '''
    return None


def getDataFromGoogleSheet():
    print("[*] Getting database from google sheet")
    response = sg_get()
    data = response.json()
    print("Database: " + str(len(data)))
    fw = open('../src/storages/database.js', 'w', encoding="utf-8")

    count = 1
    fw.write("export const dataFeatured=[")
    for obj in data:
        temp = "{title: \""+obj['title']+"\",description: \""+obj['description']+"\",src: \""+obj['src']+"\",alt: \""+obj['alt']+"\",category: \"" + \
            obj['category']+"\",time: \""+obj['time']+"\",date: \""+obj['date']+"\",timestamp: \""+obj['timestamp']+"\",link: \""+obj['link'] + \
            "\",component: \""+obj['zcomponent'] + \
            "\",filepath: \""+obj['filepath']+"\"},"
        fw.write(temp)
        if(count == 3):
            break
        count += 1
    fw.write("]\n")

    count = 1
    fw.write("export const dataContent=[")
    for obj in data:
        if(count > 3):
            temp = "{title: \""+obj['title']+"\",description: \""+obj['description']+"\",src: \""+obj['src']+"\",alt: \""+obj['alt']+"\",category: \"" + \
                obj['category']+"\",time: \""+obj['time']+"\",date: \""+obj['date']+"\",timestamp: \""+obj['timestamp']+"\",link: \""+obj['link'] + \
                "\",component: \""+obj['zcomponent'] + \
                "\",filepath: \""+obj['filepath']+"\"},"
            fw.write(temp)
        count += 1
    fw.write("]")
    print("[*] Wrote database to database.js")


def writeDataToGoogleSheet():
    data = load_json("database/data_json.json")
    # sb_post(data)


if __name__ == '__main__':
    print("[1] Update local database")
    print("[2] POST to Google Sheet")
    choice = int(input("Choice: "))
    if(choice == 1):
        getDataFromGoogleSheet()
    elif(choice == 2):
        writeDataToGoogleSheet()
