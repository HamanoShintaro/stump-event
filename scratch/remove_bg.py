import sys
from PIL import Image, ImageChops, ImageDraw, ImageFilter

def remove_background(img_path, out_path):
    print(f"Loading image from {img_path}...")
    img = Image.open(img_path).convert("RGB")
    width, height = img.size
    
    # Create a copy for flood filling
    flood_img = img.copy()
    
    # Use pure magenta/pink as the fill color, which is not present in the wood stamp
    fill_color = (255, 0, 255)
    
    # Floodfill from the four corners on the copy
    # thresh=30 allows capturing off-white studio shadows/gradients
    for seed in [(0, 0), (width - 1, 0), (0, height - 1), (width - 1, height - 1)]:
        ImageDraw.floodfill(flood_img, seed, fill_color, thresh=30)
        
    # Create mask: 0 for transparent background, 255 for subject
    mask = Image.new("L", (width, height), 255)
    
    flood_data = flood_img.getdata()
    mask_pixels = []
    for pixel in flood_data:
        if pixel == fill_color:
            mask_pixels.append(0)  # transparent background
        else:
            mask_pixels.append(255)  # opaque subject
            
    mask.putdata(mask_pixels)
    
    # Smooth the mask edges a little bit to avoid jagged edges
    mask = mask.filter(ImageFilter.GaussianBlur(1.0))
    
    # Split the original image into channels
    r, g, b = img.split()
    
    # Merge and save
    final_img = Image.merge("RGBA", (r, g, b, mask))
    final_img.save(out_path, "PNG")
    print(f"Successfully made background transparent and saved to {out_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 remove_bg.py <input> <output>")
        sys.exit(1)
    remove_background(sys.argv[1], sys.argv[2])

