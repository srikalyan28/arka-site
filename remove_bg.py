import os
try:
    from PIL import Image
    import numpy as np
except ImportError:
    import subprocess
    subprocess.check_call(["pip", "install", "Pillow", "numpy"])
    from PIL import Image
    import numpy as np

def remove_black_background(img_path, out_path, favicon_path, tolerance=30):
    img = Image.open(img_path).convert("RGBA")
    data = np.array(img)
    
    # Extract RGB channels
    r, g, b, a = data.T
    
    # Define black threshold
    black_areas = (r < tolerance) & (g < tolerance) & (b < tolerance)
    
    # Set alpha to 0 (transparent) for those areas
    data[..., 3][black_areas.T] = 0
    
    # For smoothing edges, we can do a quick antialiasing or just save
    img_out = Image.fromarray(data)
    
    # Crop to content to remove excess transparent borders
    bbox = img_out.getbbox()
    if bbox:
        img_out = img_out.crop(bbox)
        
    img_out.save(out_path, "PNG")
    print(f"Saved logo to {out_path}")
    
    # Generate Favicon
    icon_img = img_out.resize((32, 32), Image.Resampling.LANCZOS)
    icon_img.save(favicon_path, format="ICO")
    print(f"Saved favicon to {favicon_path}")

remove_black_background(
    r"C:\Users\admin\.gemini\antigravity-ide\brain\4c42a53b-9e15-4de0-b829-c7ca7030a096\media__1786989256888.jpg",
    r"C:\Users\admin\Desktop\ARKA ABROAD\public\logo.png",
    r"C:\Users\admin\Desktop\ARKA ABROAD\src\app\favicon.ico"
)
