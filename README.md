# Loudness

A simple loudness monitor based on arecord. 

Written in node

# Usage 

Set up your microfone volumes using a tool like `gnome-alsamixer` then

    node loudness.js

If the volume becomes 4dB louder than the average in the past 5 minutes, 
a warning will be printed to standard output.
