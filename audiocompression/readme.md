# Descript Audio Codec (.dac): High-Fidelity Audio Compression

This algorithm compresses audio to 8.1 kbps.
## Installation

```bash
pip install descript-audio-codec
```
## Supporting different frequencies


```bash
python3 -m dac download --model_type 44khz
python3 -m dac download --model_type 24khz
python3 -m dac download --model_type 16khz
```

## Compress audio
The code is given below save it to the file and writes it path to run it using the given below.
```
python3 -m dac -c "exec(open('/path/to/code.py').read())" /path/to/input --output /path/to/output/codes
```
This command will create .dac files with the same name as the input files. It will also preserve the directory structure relative to input root and re-create it in the output directory.


## Compression code 
```python
import dac
from dac.utils import load_model
from dac.model import DAC

from dac.utils.encode import process as encode
from dac.utils.decode import process as decode

from audiotools import AudioSignal

# Init an empty model
model = DAC()

model = load_model(tag="latest", model_type="44khz")
model.eval()
model.to('cuda')


signal = AudioSignal('input.wav')

encoded_out = encode(signal, 'cuda', model)
recon.write('recon.wav')
```