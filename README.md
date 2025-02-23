# IPFS_Upload-Retrieve
# Pinata File Upload Script

## Overview
This script uploads a file to **Pinata** (an IPFS pinning service) using the **Pinata SDK**.

## Prerequisites
Before running the script, make sure you have:
1. **Node.js** installed.
2. **Pinata API Key** and **Secret API Key** (from [Pinata](https://www.pinata.cloud)).
3. **Pinata SDK** installed.

## WARNING 
After creating the Api key make sure to save the JWT and your secret api key before closing this pop-up
![image](https://github.com/user-attachments/assets/b524ee17-9581-4ffb-8439-d0f9914bc94c)


## Installation
Run the following command to install the required dependencies:
```sh
npm install @pinata/sdk fs path
```

## Configuration
Update the script with your **Pinata API Key** and **Secret API Key**:
```js
const PINATA_SECRET_API_KEY = 'Your_Secret_API_Key';
const PINATA_API_KEY = 'Your_API_Key';
```

Also, update the **filePath** variable with the actual path of the file you want to upload:
```js
const filePath = 'D:\\evidence.png';
```

## Usage
Run the script using:
```sh
node script.js
```

## Expected Output
If successful, you should see:
```sh
✅ File uploaded successfully!
CID: <Generated CID>
```
If there’s an error, it will display an appropriate error message.

## Notes
- Ensure the file path is correct and accessible.
- The uploaded file will be pinned to IPFS via Pinata, meaning it will remain available even if your local copy is deleted.
- CID (Content Identifier) is a unique hash representing the file on IPFS.

## License
This script is free to use and modify as needed.

