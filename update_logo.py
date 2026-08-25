import shutil
from PIL import Image

def update_logo_and_favicon(src_path, logo_dest, favicon_dest):
    # 1. Copy the file directly as the logo
    shutil.copy2(src_path, logo_dest)
    print(f"Copied {src_path} to {logo_dest}")
    
    # 2. Open the image to generate a 32x32 favicon
    try:
        img = Image.open(src_path)
        icon_img = img.resize((32, 32), Image.Resampling.LANCZOS)
        icon_img.save(favicon_dest, format="ICO")
        print(f"Saved favicon to {favicon_dest}")
    except Exception as e:
        print(f"Failed to generate favicon: {e}")

if __name__ == "__main__":
    src = r"C:\Users\admin\.gemini\antigravity-ide\brain\4c42a53b-9e15-4de0-b829-c7ca7030a096\media__1786989743116.png"
    logo_path = r"C:\Users\admin\Desktop\ARKA ABROAD\public\logo.png"
    favicon_path = r"C:\Users\admin\Desktop\ARKA ABROAD\src\app\favicon.ico"
    
    update_logo_and_favicon(src, logo_path, favicon_path)
