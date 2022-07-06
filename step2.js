//Step 2.
/*
Add a new function, webCat. 
This should take a URL and, using axios, should read the content of that URL and print it to the console.
Modify the code that invoked cat so that, based on the command-line args, 
it decides whether the argument is a file path or a URL and calls either cat or webCat, respectively.
*/
const fs = require('fs');
const process = require('process');
const axios = require('axios');


path = process.argv[2];

if (path.includes('http') === true) {
    webCat(path);
}
else {
    cat(path);
}



function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(`File contents :${data}`);
    })
}

async function webCat(URL) {
    try {
        let res = await axios.get(URL);
        console.log(res.data);
    }
    catch (err) {
        console.log(`Error fetching ${URL} : ${err}`);
        process.exit(1);
    }
}