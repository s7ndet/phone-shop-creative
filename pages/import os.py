import os
import argparse
from datetime import datetime

def format_info(path, name):
    full_path = os.path.join(path, name)
    
    try:
        file_type = "DIR" if os.path.isdir(full_path) else "FILE"
        size = os.path.getsize(full_path)
        modified = datetime.fromtimestamp(os.path.getmtime(full_path)).strftime("%Y-%m-%d %H:%M:%S")
    except PermissionError:
        return None

    return {
        "name": name,
        "type": file_type,
        "size": size,
        "modified": modified,
        "full_path": full_path
    }


def list_directory(path, sort_by=None, recursive=False):
    try:
        entries = os.listdir(path)
    except PermissionError:
        print(f"[Доступ жоқ]: {path}")
        return
    except FileNotFoundError:
        print(f"Directory не найден: {path}")
        return

    info_list = []
    for e in entries:
        info = format_info(path, e)
        if info:
            info_list.append(info)

    # Сортировка
    if sort_by == "size":
        info_list.sort(key=lambda x: x["size"])
    elif sort_by == "date":
        info_list.sort(key=lambda x: x["modified"])

    print(f"\n Директория: {path}")
    for info in info_list:
        print(f"{info['name']:30} {info['type']:5} {info['size']:10} bytes   {info['modified']}")

    if recursive:
        for info in info_list:
            if info["type"] == "DIR":
                list_directory(info["full_path"], sort_by, recursive=True)


def main():
    parser = argparse.ArgumentParser(description="Упрощённая версия ls")
    parser.add_argument("path", nargs="?", default=".", help="Путь к директории")
    parser.add_argument("--sort", choices=["size", "date"], help="Сортировка")
    parser.add_argument("-R", "--recursive", action="store_true", help="Рекурсивный обход")

    args = parser.parse_args()
    list_directory(args.path, args.sort, args.recursive)


if __name__ == "__main__":
    main()