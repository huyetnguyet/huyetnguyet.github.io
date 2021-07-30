import requests

response = requests.post('http://localhost:5000/test',
                         json={'id': 1, 'name': 'Jessa'})
print(response)
print("Status code: ", response.status_code)
print("Printing Entire Post Request")
print(response)
