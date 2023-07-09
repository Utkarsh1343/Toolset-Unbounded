import dac
from dac.utils import load_model
from dac.model import DAC

from dac.utils.encode import process as encode
from dac.utils.decode import process as decode

from audiotools import AudioSignal

model = DAC()

model = load_model(tag="latest", model_type="44khz")
model.eval()
model.to('cuda')

signal = AudioSignal('input.wav')

encoded_out = encode(signal, 'cuda', model)

recon.write('recon.wav')
