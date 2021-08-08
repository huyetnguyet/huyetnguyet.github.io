from http_request_randomizer.requests.proxy.requestProxy import RequestProxy
import time


def get_proxies(country):
    req_proxy = RequestProxy()
    proxies = req_proxy.get_proxy_list()  # this will create proxy list
    temp_list = []
    for i in proxies:
        if(i.country == country):
            temp_list.append(i)
    return temp_list


search_key = 'huyetnguyet'
time_sleep = 5


class AutoTraffic:
    def __init__(self):
        None
