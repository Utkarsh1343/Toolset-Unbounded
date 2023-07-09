# Image Compression

We use opencv-python library to open and compress image upto 70%.

## Installation

```bash
pip install opencv-python
```

## Usage

```python
import cv2(open-cv library)

def compress_image(input_path, output_path, quality):
    image = cv2.imread(input_path)

    height, width = image.shape[:2]

    new_width = int(width / 2)  # Reduce width by half
    new_height = int(height / 2)  # Reduce height by half
    resized_image = cv2.resize(image, (new_width, new_height))

    cv2.imwrite(output_path, resized_image, [cv2.IMWRITE_JPEG_QUALITY, quality])
    print(f"Image compressed and saved as '{output_path}'.")


input_image_path = sys.argv[1]
output_image_path = sys.argv[2]
quality = 55
# Compress the image
compress_image(input_image_path, output_image_path, quality)

```

## ComandLine
```
python image_compression.py input_image.jpg output_image.jpg
```