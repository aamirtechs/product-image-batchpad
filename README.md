# Product Image Batchpad
Live page: https://aamirtechs.github.io/product-image-batchpad/

Drop supplier photos and get uniform, marketplace-sized, compressed files renamed by SKU in one ZIP. It runs entirely in the browser so catalogues, files and text you paste stay on your device. Built for busy operators who need a correct answer and a downloadable file, not another account.

## Features
- Drag and drop batch of JPG, PNG and WebP via canvas
- Presets: 2048 Shopify, 2000 Amazon, 2700 Etsy, plus custom size
- Pad with white, transparent or blurred background, never crop the product
- Quality-target compression and format conversion to WebP or JPG
- Rename from filename or CSV map, download ZIP plus a size report CSV

## How it works
Paste or upload your input, choose the options, and run the tool. Processing happens locally in src/logic.js and the page wiring. You can review the results on screen and download the output file.

## Privacy
Runs 100% in your browser. Your files never leave this device, nothing is uploaded,
and there is no tracking.

## Development
Core logic lives in `src/logic.js` and is shared by the page and the tests.
Run the tests with `npm test`.

## License
MIT, Copyright 2026 Amir Hussain.
