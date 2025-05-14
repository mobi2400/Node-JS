import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {message: "Enter the text to encode", 
    name: "URL"},
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image('url', { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    
  })
 