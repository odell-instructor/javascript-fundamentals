/* Lesson 16 - Working with files */
/* Requires fs module from node js */
const fs = require('fs');
const buf = new Buffer.allocUnsafe(1024);

/* Opening an existing file */
function openFileExample() {
    fs.open('welcome.txt', 'r+', function(err, fd){
        if(err) {
            return console.error(err);
        } else {
            readExample(fd);
        }
    });
}

function readExample(fd) {
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if(err) {
            console.error(err);
        } else {
            console.log(`${bytes} bytes read`);

            // printing only read bytes to avoid junk
            if(bytes > 0) {
                console.log(buf.slice(0, bytes).toString());
            }
            closeFileExample(fd);
        }
    });
}

function closeFileExample(fd) {
    fs.close(fd, function(err) {
        if(err) {
            console.error(err);
        }
        console.log('File closed successfully');
    });
}

//openFileExample();

/* Asynchronously reading the file */
function readFileExample(myfile) {
    fs.readFile(myfile, (err, data) => {
        if(err) {
            return console.error(err);
        } else {
            console.log('Asynchronously reading the file: '+
                 data.toString());
        }
    });
}

//readFileExample('welcome.txt');

/* Sychronously reading the file */
function readFileSyncExample() {
    const data = fs.readFileSync('welcome.txt');
    console.log('Synchronous read: '+data.toString());
}

//readFileSyncExample();

const names = 'John, Matt, David, Debbie, Joan';
const names2 = 'Mary, Michelle, Paul, Edward';

/* Append file will create a new file if one isn't there
or add content to an existing file */
function appendExample(names) {
    fs.appendFile('names.txt', names, (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log('Names saved');
        }
    });
    readFileExample('names.txt');
}

//appendExample(names); 

/* Writefile for creating a new file
or replace an existing file. */
function writeExample(names) {
    fs.writeFile('values.txt', names, (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log('File created or replaced');
        }
    });
    readFileExample('values.txt');
}

//writeExample(names);

/* Unlink removes a file or sybolic link */
function unlinkExample(value) {
    fs.unlink(value, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('File was deleted');
        }
    });
}

//unlinkExample('values.txt');
//writeExample(names);

/* Rename will change the file name */
function renameExample(value) {
    fs.rename(value, 'sample.txt', (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log('File Renamed');
        }
    });
}

renameExample('names.txt');