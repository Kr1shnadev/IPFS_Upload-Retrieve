require('dotenv').config();
const fs = require('fs');
const axios = require('axios');

const CID = 'CID'; // Replace with ur CID ex: QmsdXXXXXcdsc
const FILE_PATH = 'D:\\retrieved_file.png'; // Change based on your preferred location......file type needs to match with the uploaded file

async function fetchFileFromPinata() {
    try {
        const url = `https://dweb.link/ipfs/${CID}`; // public ipfs gateway....if the gateway isn't working ,other gateways can be accessed from the "gateway.txt" file

        const response = await axios.get(url, {
            responseType: 'stream', // Get response as a stream
            headers: {
                Authorization: `Bearer Pinata_JWT`, // Only replace the Pinata_JWT with ur JWT !!! Dont remove Bearer!!!
                Accept: 'application/json',
            },
        });

        const writer = fs.createWriteStream(FILE_PATH);
        response.data.pipe(writer);

        writer.on('finish', () => console.log('✅ File downloaded successfully:', FILE_PATH));
        writer.on('error', err => console.error('❌ Error writing file:', err));
    } catch (error) {
        console.error('❌ Error fetching file:', error.response ? error.response.data : error.message);
    }
}

fetchFileFromPinata();
