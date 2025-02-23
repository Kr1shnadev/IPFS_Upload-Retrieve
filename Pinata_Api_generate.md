# Pinata API Key Creation and Signup Guide

## 1. Sign Up for Pinata
If you don't already have an account, follow these steps to sign up:

1. Go to [Pinata's website](https://www.pinata.cloud/).
2. Click on **Sign Up**.
3. Fill in the required details (email, username, and password).
4. Verify your email by clicking on the confirmation link sent to your inbox.
5. Log in to your Pinata account.

## 2. Generate an API Key
To interact with Pinata's API, you need an API key:

1. Once logged in, navigate to the **API Keys** section from the dashboard.
2. Click on **New Key**.
3. Enter a name for your API key.
4. Set the required permissions (e.g., `Pinning`, `Reading`, `Deleting`).
5. Click **Create Key**.
6. A popup will appear with your **API Key**, **API Secret**, and **JWT** token.

## 3. Save Your Keys Securely
🚨 **Important:** Pinata only shows your API Secret and JWT once! Before closing the popup, make sure to save them securely.

- Copy and paste the API Key, Secret, and JWT into a safe location.
- If you lose them, you’ll need to create a new key, as the secret cannot be retrieved again.

## 4. Using Your API Key
Once you have your API key, you can use it in your projects to interact with IPFS. Here’s an example of how to use your JWT in API requests:

```js
const axios = require('axios');
const API_JWT = 'your_jwt_token_here';

axios.get('https://api.pinata.cloud/data/testAuthentication', {
    headers: {
        Authorization: `Bearer ${API_JWT}`
    }
})
.then(response => console.log(response.data))
.catch(error => console.error(error));
```

## 5. Deleting an API Key
If you need to revoke access:

1. Go to the **API Keys** section in your Pinata dashboard.
2. Find the key you want to delete.
3. Click **Delete**.
4. Confirm the deletion (⚠️ This action cannot be undone).

---

Now you're ready to use Pinata for IPFS file management! 🎉 If you encounter issues, check out the [Pinata Documentation](https://docs.pinata.cloud/).

