from http_request_randomizer.requests.proxy.requestProxy import RequestProxy
# you may get different number of proxy when  you run this at each time
req_proxy = RequestProxy()
proxies = req_proxy.get_proxy_list()  # this will create proxy list
for i in proxies:
    print(i.get_address(), i.country)
