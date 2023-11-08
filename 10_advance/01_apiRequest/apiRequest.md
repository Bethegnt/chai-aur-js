There are older and newer ways to make API requests, with the newer methods being more modern and preferred.

**Older Way (Callback-Based):**

1. **XMLHttpRequest:**
   - The `XMLHttpRequest` object is one of the oldest ways to make asynchronous API requests in JavaScript. It has been used for many years but has some limitations.
   - It uses callbacks to handle responses, making the code less readable and harder to maintain.
   - Example:

   ```javascript
   const xhr = new XMLHttpRequest();
   xhr.open('GET', 'https://api.example.com/data', true);
   xhr.onreadystatechange = function() {
     if (xhr.readyState === 4 && xhr.status === 200) {
       const data = JSON.parse(xhr.responseText);
       console.log(data);
     }
   };
   xhr.send();
   ```

**Newer Way (Promise-Based and Fetch API):**

1. **Fetch API:**
   - The `fetch` API is a modern and preferred way to make API requests in JavaScript. It returns Promises, making asynchronous code easier to read and manage.
   - It provides a more flexible and powerful interface for making requests and handling responses.
   - Example:

   ```javascript
   fetch('https://api.example.com/data')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       console.log(data);
     })
     .catch((error) => {
       console.error('Fetch error: ' + error);
     });
   ```

2. **Axios (Third-party Library):**
   - Axios is a popular third-party library for making API requests in a more user-friendly and flexible manner.
   - It is based on Promises, making it easy to work with asynchronous code.
   - It supports various request methods, request and response interceptors, and can be used in both browsers and Node.js.
   - Example:

   ```javascript
   // Install Axios via npm/yarn or include it from a CDN
   // npm install axios

   const axios = require('axios'); // In Node.js

   axios.get('https://api.example.com/data')
     .then((response) => {
       console.log(response.data);
     })
     .catch((error) => {
       console.error('Axios error: ' + error);
     });
   ```

The newer approaches, such as the Fetch API and Axios, are preferred because they provide more modern and flexible ways to handle API requests and responses.