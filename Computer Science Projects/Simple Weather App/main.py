# Sami Munir
# December 15th, 2023
# Rutgers University
# Computer Science Project
# Simple Weather App
# Python, requests, openweathermap API

import requests

def get_weather_data(location):
    API_KEY = 'ff1672a76779bb7575d444b1cd67f2ff'
    BASE_URL = f'http://api.openweathermap.org/data/2.5/weather?q={location}&appid={API_KEY}'
    response = requests.get(BASE_URL)
    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print('Failed to fetch weather data...')
        return None

def display_weather_data(data):
    if data:
        print('Weather data for', data['name'])
        print('\tTemperature:', data['main']['temp'], ' C')
        print('\tDescription:', data['weather'][0]['description'])
        print('\tHumidity:', data['main']['humidity'], '%')
        print('\tWind Speed:', data['wind']['speed'], 'm/s')
    else:
        print('No data to display...')

# run program from here...