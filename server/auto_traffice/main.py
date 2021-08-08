from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from http_request_randomizer.requests.proxy.requestProxy import RequestProxy
import time
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
from termcolor import colored, cprint


def get_proxies(country):
    req_proxy = RequestProxy()
    proxies = req_proxy.get_proxy_list()  # this will create proxy list
    temp_list = []
    for i in proxies:
        if(i.country == country):
            temp_list.append(i)
    return temp_list


list_websites = ['https://huyetnguyet.com', 'http://huyetnguyet.com']
search_key = 'huyetnguyet'
time_sleep = 5
no_pages = 18-3


class AutoTraffic:
    def __init__(self):
        self.is_website_found = False

    def OpenBrowser(self):
        # selenium
        options = Options()

        cprint("\n[*] Opening Firefox", 'cyan')
        try:
            self.driver = webdriver.Firefox(options=options)
        except Exception as e:
            try:
                print(e)
                cprint("[!] Open on Windows", 'cyan')
                binary = FirefoxBinary(
                    "C:\\Program Files\\Mozilla Firefox\\firefox.exe")
                self.driver = webdriver.Firefox(
                    firefox_binary=binary, executable_path=r"C:\\geckodriver.exe", options=options)
            except Exception as e:
                try:
                    print(e)
                    cprint("[!] Open on Linux", 'cyan')
                    self.driver = webdriver.Firefox(
                        executable_path='geckodriver/geckodriver')
                except Exception as e:
                    try:
                        print(e)
                        cprint("[!] Trying open last chance", 'cyan')
                        self.driver = webdriver.Firefox(
                            executable_path='geckodriver\\geckodriver')
                    except Exception as e:
                        print("!!! ERROR: " + str(e), 'red')
                        sys.exit()
        self.driver.set_window_position(0, 0)
        #self.driver.set_window_size(1100, 800)

    def Main(self):
        self.OpenBrowser()
        # self.GoogleSearch()

        self.driver.get('https://www.huyetnguyet.com/')
        self.HuyetNguyet()

    def GoogleSearch(self):
        check_is_website = False
        check_locate_website = 0
        website_position = 0
        self.driver.get('https://www.google.com/')
        time.sleep(time_sleep)
        search_input = self.driver.find_element_by_class_name('gLFyf.gsfi')
        search_input.send_keys(search_key)
        time.sleep(time_sleep)
        search_input.send_keys(Keys.ENTER)
        time.sleep(time_sleep)
        while True:
            cites = self.driver.find_elements_by_tag_name('cite')
            temp_list_cites = []
            for cite in cites:
                temp_site = cite.text.split(' ')[0]
                if(len(temp_site) > 1):
                    temp_list_cites.append(cite.text.split(' ')[0])

            for website in list_websites:
                if(website in temp_list_cites):
                    check_is_website = True
                    check_locate_website = temp_list_cites.index(website)
                    print(temp_list_cites, check_locate_website)
                    break
            if(check_is_website):
                website_position += check_locate_website
                cprint("Found", 'green')
                results = self.driver.find_elements_by_class_name('g')
                result = results[check_locate_website]
                title = result.find_element_by_tag_name('cite')
                cprint(title.text+"     "+str(website_position), 'yellow')
                link = result.find_element_by_tag_name('a')
                link.click()
                self.is_website_found = True
                break
            else:
                website_position += len(temp_list_cites)
                try:
                    element = WebDriverWait(self.driver, 10).until(
                        EC.presence_of_element_located((By.ID, "pnnext"))
                    )
                    element.click()
                    cprint("Check Next Page", 'red')
                    time.sleep(time_sleep)

                finally:
                    cprint("Can't find result", 'red')

    def HuyetNguyet(self):
        cprint("working on tabs", 'green')
        tabs = ['navGames', 'navGuide', 'navImages', 'navLife',
                'navNews', 'navStars', 'navTech', 'navTravel']
        for tab in tabs:
            try:
                self.driver.find_element_by_id(tab).click()
                time.sleep(time_sleep)
            except Exception as e:
                print(tab, 'red')

        # features content
        try:
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "featuredText"))
            )
            feature_texts = self.driver.find_elements_by_class_name(
                'featuredText')
        finally:
            cprint("featuredText Loadding...", 'red')

        cprint("working on feature", 'green')
        print(feature_texts)
        for feature in feature_texts:
            time.sleep(time_sleep)
            while True:
                try:
                    '''
                    element = WebDriverWait(feature, 30).until(
                        EC.element_to_be_clickable((By.ID, 'featuredText')))
                    element.location_once_scrolled_into_view
                    element.click()
                    '''
                    feature.find_element_by_id('featuredText').click()
                    break
                except Exception as e:
                    print(e)
                    cprint("test Loadding...", 'red')
                    time.sleep(time_sleep)
                    continue
            time.sleep(time_sleep*2)
            self.driver.find_element_by_id('navHome').click()
            time.sleep(time_sleep)

        cprint("working on content", 'green')
        itemContents = self.driver.find_elements_by_class_name("itemContent")
        count = 1
        for item in itemContents:
            while True:
                try:
                    item.find_element_by_id('itemContent').click()
                    break
                except Exception:
                    cprint("itemContent Loadding...", 'red')
                    time.sleep(time_sleep)
                    continue
            time.sleep(time_sleep*2)
            self.driver.find_element_by_id('navHome').click()
            time.sleep(time_sleep)
            if(count > no_pages):
                break
            count += 1


if __name__ == "__main__":
    at = AutoTraffic()
    at.Main()
