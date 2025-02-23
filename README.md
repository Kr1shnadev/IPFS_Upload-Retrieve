# IPFS_Upload-Retrieve
# Pinata File Upload Script (Upload.js)

## Overview
This script uploads a file to **Pinata** (an IPFS pinning service) using the **Pinata SDK**.

## Prerequisites
Before running the script, make sure you have:
1. **Node.js** installed.
2. **Pinata API Key** and **Secret API Key** (from [Pinata](https://www.pinata.cloud)).
3. **Pinata SDK** installed.

## WARNING 
Once you have that filled out click “Create Key” and it will show you the pinata_api_key, pinata_api_secret_key, and the JWT. It’s best to click “Copy All” and keep the API key data safe and secure. ⚠️ Once API keys have been created, you will not be able to see the secret or JWT again
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

# Pinata File Downloader (retrieve.js)

This Node.js script allows you to download a file from IPFS using Pinata. It fetches the file using a public IPFS gateway and saves it to a specified location on your system.

## Prerequisites

- **Node.js** installed on your system.
- **Axios** installed (`npm install axios`).
- **A valid Pinata JWT** (JSON Web Token) for authentication.
- **A CID (Content Identifier)** of the file uploaded to IPFS.

## Installation

1. Clone this repository or copy the script to your project.
2. Install required dependencies:
   ```sh
   npm install dotenv axios fs
   ```
3. Create a `.env` file (optional) to store your **Pinata JWT** securely.

## Configuration

- Update the script with your **CID**:
  ```js
  const CID = 'Your_CID_Here';
  ```
- Set the file path where the retrieved file should be saved:
  ```js
  const FILE_PATH = 'D:\\retrieved_file.png';
  ```
  *(Ensure the file extension matches the original file type.)*
- Replace `Pinata_JWT` in the script with your **Pinata JWT**:
  ```js
  Authorization: `Bearer Your_Pinata_JWT_Here`
  ```
  **⚠️ Warning:** Do not remove `Bearer` from the Authorization header.

## Troubleshooting

- If the default **IPFS gateway** (`https://dweb.link`) is not working, check the `gateway.txt` file for alternative gateways.
- Ensure your **CID** is correct and publicly accessible.
- Verify that your **Pinata JWT** is valid and has access to retrieve the file.
- If you encounter file write errors, check permissions for the target directory.

## Notes

- This script retrieves files **as a stream** to handle large files efficiently.
- The file will be saved at the specified location; ensure the directory exists before running the script.

## License

This project is open-source and free to use. Modify it as needed!


