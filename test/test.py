import requests
from bs4 import BeautifulSoup

link = 'https://m.kenh14.vn/co-mot-nghich-ly-biet-cang-som-cang-do-ngheo-mua-do-cang-dat-cang-tiet-kiem-duoc-nhieu-tien-20211025002216317.chn'

r = requests.get(link)

print(r.status_code)

soup = BeautifulSoup(r.text, 'lxml')

title_element = soup.find("h1", class_="kbwc-title").text.strip()
sapo_element = soup.find("h2", class_="knc-sapo").text.strip()
content_elements = soup.find("div", class_="knc-content")
print(title_element)
print(sapo_element)
for idx, element in enumerate(content_elements):
    print(str(element))
