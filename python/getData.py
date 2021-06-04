from io import BytesIO

import requests
import pandas as pd

r = requests.get(
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vR7fx7gC9zKkje2WRE6AXifF-yohQIBLXf4Tddym_Taj6gVbrdjUbZwuMlbwLU28U8yi6ABtDnmsZ6l/pubhtml')
data = r.content
