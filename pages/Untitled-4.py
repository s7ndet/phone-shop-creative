student = {"name": "Nurpolat", "age": 20}

try:
    print(student["grade"])
except KeyError:
    print("Сөздікте бұндай кілт жоқ!")