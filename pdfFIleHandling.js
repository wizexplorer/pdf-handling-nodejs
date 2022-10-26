// https://stackabuse.com/generating-pdf-files-in-node-js-with-pdfkit/
const PDFDocument = require('pdfkit');
const fs = require('fs');
const pdfParse = require('pdf-parse');

// Writing
let pdfDoc = new PDFDocument;
pdfDoc.pipe(fs.createWriteStream('SampleDocument.pdf'));
pdfDoc.text("My Sample PDF Document");
pdfDoc.end();
// Reading
const readPdf = async (uri) => {
    const buffer = fs.readFileSync(uri);
    try {
        const data = await pdfParse(buffer);

        // The content
        console.log('Content: ', data.text); 

        // Total page
        console.log('Total pages: ', data.numpages);

        // File information
        console.log('Info: ', data.info);
    }catch(err){
        throw new Error(err);
    }
}

// Testing
const DUMMY_PDF = './dummy.pdf'; // "dummy.pdf" is the path of file.
readPdf(DUMMY_PDF);