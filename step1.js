//Step 1.
/*
Write a function. It should take one argument, path, and it should read the file with that path, and print the contents of that file.
Then, write some code that calls that function, allowing you to specify the path argument via the command line.
If you give it the path of a non - existent file, it should print that error and halt the script execution:
*/
const fs = require('fs');
const process = require('process');

path = process.argv[2];

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            process.exit(1)
        }
        console.log(`File contents :${data}`)
    })
}

cat(path);