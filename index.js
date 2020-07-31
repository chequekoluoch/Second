//const con = require('./db');
//connection();
    

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });
});


    const client = contentful.createClient({
            // This is the space ID. A space is like a project folder in Contentful terms
            space: "qgarr447vy8z",
            // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
            accessToken: "1dMQjw1lq0BUs5rPWKeVnBqcubpxMBio2dVv5phxT6A"
        });
        async function getData() {


            let contentful = await client.getEntries({
            content_type: 'chequeKoluoch'
            });

            let myPost = contentful.items;
            myPost = myPost.map(items => {
                const {blogTitle, blogText} = items.fields;
                document.getElementById("tur").innerHTML=blogTitle
                document.getElementById("turr").innerHTML = blogText
            })
        }
        getData();
        const submitt = document.getElementById("fees");
        submitt.onclick = function () {
            window.location.href = "fees.html";
        }

import { connection } from './db.js';




