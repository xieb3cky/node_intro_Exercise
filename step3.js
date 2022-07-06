//Step 3.
/*
Add a feature where, on the command line, 
you can optionally provide an argument to output to a file instead of printing to the console. 
The argument should look like this: --out output-filename.txt readfile-or-url.
*/
const fs = require('fs');
const process = require('process');
const axios = require('axios');

let out;
let path;
//node step3.js--out new.txt one.txt
// out = new.txt
//path = one.txt
//new.txt should include context of one.txt

if (process.argv[2] === '--out') {
    out = process.argv[3]
    path = process.argv[4]
}
else {
    path = process.argv[2]
}


if (path.includes('http') === true) {
    webCat(path, out);
}
else {
    cat(path, out);
}

function outPut(data, out) {
    if (out) {
        fs.writeFile(out, data, 'utf8', (err) => {
            if (err) {
                console.log(`Couldn't write ${out}: ${err}`)
                process.exit(1);
            }
        });
    } else {
        console.log(data)
    }

}
function cat(path, out) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        else {
            // Output to a file instead of printing to the console
            outPut(data, out);
        }
    })
}

async function webCat(URL, out) {
    try {
        let res = await axios.get(URL);
        console.log(res.data);
    }
    catch (err) {
        console.log(`Error fetching ${URL} : ${err}`);
        process.exit(1);
    }
}