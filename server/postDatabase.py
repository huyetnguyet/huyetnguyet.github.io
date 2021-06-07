from operator import itemgetter
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
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
    sb_post(data)
    print("[*] Updated to Google Sheet")


def firebase_post_data():
    file_contents = [
        {
            "timestamp": "06/06/2021 07:42 PM",
            "title": "Lee Kwang Soo và hành trình ở Running Man: Khởi đầu bằng nước mưa, kết thúc đẫm nước mắt",
            "description": "Sau 11 năm đồng hành cùng Running Man, Lee Kwang Soo cuối cùng cũng phải nói lời chia tay ngôi nhà thứ 2 của mình.",
            "src": "",
            "alt": "Lee Kwang Soo, Lee Kwang Soo Roi Running Man, Sao Han, Kpop, Running Man, ",
            "category": "news",
            "date": "06/06/2021",
            "time": "07:42 PM",
            "link": "/lee-kwang-soo-va-hanh-trinh-o-running-man-khoi-dau-bang-nuoc-mua-ket-thuc-dam-nuoc-mat",
            "zcomponent": "page_20210606074256",
            "filepath": "./20210606074256-lee-kwang-soo-va-hanh-trinh-o-running-man-khoi-dau-bang-nuoc-mua-ket-thuc-dam-nuoc-mat.js"
        },
        {
            "timestamp": "06/06/2021 07:43 PM",
            "title": "Cảnh nóng bị nghi thật 100% làm Thang Duy bị 'phong sát': Vợ chồng Lương Triều Vỹ lục đục, nữ chính có chia sẻ gây sốc",
            "description": "Cho đến hiện tại, cảnh nóng của Thang Duy và Lương Triều Vỹ trong Sắc, Giới vẫn khiến khán giả tranh cãi.",
            "src": "",
            "alt": "Sac Gioi, Sac Gioi, Sac Gioi 2008, Luong Trieu Vy, Thang Duy, Luu Gia Linh, Ly An, Canh Nong, Canh 18, Phim Hoa Ngu, Kim Ma, Phim Trung Quoc, Phim Dien Anh, Phim Chieu Rap, ",
            "category": "news",
            "date": "06/06/2021",
            "time": "07:43 PM",
            "link": "/canh-nong-bi-nghi-that-100-lam-thang-duy-bi-phong-sat-vo-chong-luong-trieu-vy-luc-duc-nu-chinh-co-chia-se-gay-soc",
            "zcomponent": "page_20210606074311",
            "filepath": "./20210606074311-canh-nong-bi-nghi-that-100-lam-thang-duy-bi-phong-sat-vo-chong-luong-trieu-vy-luc-duc-nu-chinh-co-chia-se-gay-soc.js"
        }
    ]

    for value in file_contents:
        ref.push().set(value)

    def firebase_get_data():
            # Fetch the service account key JSON file contents
        cred = credentials.Certificate('./key_firebase.json')

        # Initialize the app with a service account, granting admin privileges
        firebase_admin.initialize_app(cred, {
            'databaseURL': 'https://huyetnguyet-b76b0-default-rtdb.firebaseio.com/'
        })

        # As an admin, the app has access to read and write all data, regradless of Security Rules
        ref = db.reference("/")
        data = ref.get()
        '''
        print("Ascending order by fname")
        rows_by_fname = sorted(rows, key=itemgetter('fname'))
        print(rows_by_fname)

        print("Ascending order by uid")
        rows_by_uid = sorted(rows, key=itemgetter('uid'))
        print(rows_by_uid)

        print("The smallest uid")
        print(min(rows, key=itemgetter('uid')))

        print("Maximum UID")
        print(max(rows, key=itemgetter('uid')))
        '''

        print("Ascending order by fname")
        rows_by_fname = sorted(data, key=itemgetter('timestamp'))

        for key, value in data.items():
            print(value)


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
