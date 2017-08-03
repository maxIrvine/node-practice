const fs = require('fs');
const readline = require('readline');
const markdownpdf = require('markdown-pdf');
const dns = require('dns');

const rl = readline.createInterface ({
        input: process.stdin,
        output: process.stdout
    });

function fileReader() {
    rl.question("filename: ", (filename) => {
        rl.close();
        fs.readFile(filename, (err,buffer) => {
            if (err) {
                console.log(err.message);
                return;
            }
            let content = buffer.toString();
            markdownpdf().from.string(content)
                    .to(filename.substring(0, filename.length-3) + '.pdf', () => {
                        console.log('It worked');
                    });
        //     let upcased = content.toUpperCase();
        //     console.log(upcased);
        });
    });
}

function DNSReader() {
    rl.question("Domain name: ", (domainName) => {
        rl.close();
        dns.lookup(domainName, (err, address, family) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log("IP address: " + address);
        });
    });
}

function upperCaseFile() {
    rl.question("Input Filename: ", (inputFile) => {
        rl.question("Output filename:", (outputFile) => {
            rl.close();
            fs.readFile(inputFile, (err, buffer) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                let content = buffer.toString();
                let upCased = content.toUpperCase();
                fs.writeFile(outputFile, upCased, (err) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    console.log("Successfully wrote the new file");
                });
            });
        });
    });
}

function webPageSave() {
    rl.question("Domain name: ", (domain) => {
        rl.question("Save to file: ", (filename) => {
            rl.close();
        });
    });
}