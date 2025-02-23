const PinataSDK = require('@pinata/sdk');
const fs = require('fs');
const path = require('path');


const PINATA_API_KEY = 'Api_key'; // <---- add ur public api key
const PINATA_SECRET_API_KEY = 'Secret_Key'; // <--- add ur secret api key

// Initialize Pinata SDK
const pinata = new PinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY);

// File path (replace with your actual file path)
const filePath = 'D:\\evidence.png';

// Check if the file exists
if (!fs.existsSync(filePath)) {
    console.error('Error: File does not exist at path:', filePath);
    process.exit(1);
}

// Set file metadata
const options = {
    pinataMetadata: {
        name: path.basename(filePath) // ✅ Set filename dynamically
    },
    pinataOptions: {
        cidVersion: 0
    }
};

// Upload file to Pinata
pinata.pinFromFS(filePath, options)
    .then((result) => {
        console.log("✅ File uploaded successfully!");
        console.log("CID:", result.IpfsHash);
    })
    .catch((err) => {
        console.error("❌ Error uploading file:", err);
    });

