# Text Compression

We use huffman encoding algorithm to compress the given text upto 60%.


## ComandLine
```
gcc text_compression.c -o text_compression
gcc text_decompression.c -o text_decompression
```
The compiler creates an executable exe file to compress and decompress the .txt file

Now we run the files to get desired output.
```
text_compression.exe input.txt
```
This creates two files input.txt.huffman and input.txt.huffman.table.

Now we try to decompress the com[pressed file using input.txt.huffman and input.txt.huffman.table.
```
text_decompression.exe input.txt.huffman
```
This creates a new directory containing the decompressed file.