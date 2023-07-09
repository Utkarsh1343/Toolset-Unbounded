import cv2
import sys

def compress_image(input_path, output_path, quality):
    # Read the image
    image = cv2.imread(input_path)

    # Get the original image dimensions
    height, width = image.shape[:2]

    # Resize the image
    new_width = int(width / 2)  # Reduce width by half
    new_height = int(height / 2)  # Reduce height by half
    resized_image = cv2.resize(image, (new_width, new_height))

    # Save the compressed image
    cv2.imwrite(output_path, resized_image, [cv2.IMWRITE_JPEG_QUALITY, quality])
    print(f"Image compressed and saved as '{output_path}'.")

# Get the command line arguments
input_image_path = sys.argv[1]
output_image_path = sys.argv[2]
quality = 55
# Compress the image
compress_image(input_image_path, output_image_path, quality)
