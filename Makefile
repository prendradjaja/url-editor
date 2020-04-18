.PHONY: open

open:
	node compile.js  # Compiles 'src.txt' into 'dist.txt'
	bash open.sh  # Opens 'dist.txt' in Chrome
