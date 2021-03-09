fs = require('fs');
var fi = require('fantasticon');
var CleanCSS = require('clean-css');

var inputDir = './assets/icons/';
var outputDir = './dist/';

// Generate the font files using fantasticon
fi.generateFonts({
    name: 'webdev-font',
    // fontTypes: ['ttf', 'woff', 'woff2'],
    assetTypes: ['css', 'html'],
    inputDir: inputDir,
    outputDir: outputDir,
    formatOptions: { json: { indent: 0 } },
    templates: {
        html: './assets/template/html.hbs',
    },
    pathOptions: {},
    codepoints: {},
    fontHeight: 300,
    round: undefined, 
    descent: 24, 
    normalize: undefined, 
    selector: null,
    tag: 'i',
    prefix: 'wd',
    fontsUrl: ''
}).then(results => {
    
    // Read the CSS file and minify it
    const data = fs.readFileSync(outputDir + 'webdev-font.css', 'utf8')
    new CleanCSS().minify(data, function (error, output) {
        // Write the minified file to disk
        fs.writeFile('./dist/webdev-font.min.css', output.styles, null, () => {
            console.log('Fonts Generated');
        });
    });

    // Copy the generated file to the root folder fir github pages.
    fs.copyFile(outputDir + 'webdev-font.html', 'index.html', (err) => {
        if (err) throw err;
    });



}); 