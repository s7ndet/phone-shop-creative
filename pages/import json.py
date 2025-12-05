import json

wrong_json = "{name: Nurpolat}"

try:
    data = json.loads(wrong_json)
except json.JSONDecodeError:
    print("JSON форматы қате!")