const read = require('readline-sync');
const crypto = require('crypto');
console.log('Utility CLI APP');

const utilityOptions = [
'URL Encoder/Decoder \n','Base64 Encoder/Decoder \n','String hashing \n','Epoch-Converter \n','RgbToHex \n','hexToRgb \n','UnitConverter \n'
];

function printOptions(utilityOptions) {
  for(i=0;i<utilityOptions.length;i++){
    console.log(i+1 +".) "+ utilityOptions[i]);
  }
}
printOptions(utilityOptions);

function URL() {
  const ende = ['URLEncoding','URLDecoding'];
  printOptions(ende);
  const select = read.question('Enter the Option: \n');

  if(select === '1'){
    const encode = read.question('Enter the URL \n');
    console.log('The URL is '+ encodeURIComponent(encode));
  }
  if(select ==='2'){
    const decode = read.question('Enter the URL \n');
    console.log('The URL is '+ decodeURIComponent(decode));
  }
}

function Base64() {
  const ende = ['Base64-Encoding','Base64-Decoding'];
  printOptions(ende);
  const select = read.question('Enter the Option: \n');
  
  if(select === '1'){
    const encode = read.question('Enter the URL \n');
    console.log('The URL is '+ Buffer.from(encode).toString('base64'));
  }
  if(select ==='2'){
    const decode = read.question('Enter the URL \n');
    console.log('The URL is '+ Buffer.from(decode, 'base64').toString('ascii'));
  }
}

function stringHashing() {
  const hashingTypes = ['md5','sha1','sha256','sha512'];
  printOptions(hashingTypes);
  let algo = 'md5';
  let string = parseInt(read.question('Enter the String Conversion \n'));
  const conv = read.question('Enter the String \n');
  
            switch(string){
                
          case 1: algo = 'md5';
console.log(crypto.createHash(algo).update(conv).digest('hex'));
                break;
          case 2: algo = 'sha1';
console.log(crypto.createHash(algo).update(conv).digest('hex'));
                break;
          case 3: algo = 'sha256';
console.log(crypto.createHash(algo).update(conv).digest('hex'));
                break;
          case 4: algo = 'sha512';
console.log(crypto.createHash(algo).update(conv).digest('hex'));
                break;
  }
}

function EpochConv() {
  const EpochOptions = ['toHumanDate','toEpoch'];
  printOptions(EpochOptions);

  const select = read.question('Enter the Option \n');
  
  if(select == '1'){
    const input = read.question('Enter the Option \n');
    const epochConv = new Date(parseInt(input));
    console.log(epochConv.toString());
  }

  if(select == '2'){
    const Year = parseInt(read.question("Enter Year\n"));
    const Month = parseInt(read.question("Enter Month\n"));
    const date = parseInt(read.question("Enter date\n"));
    const Hour = parseInt(read.question("Enter hours\n"));
    const Minute = parseInt(read.question("Enter minutes\n"));
    const Seconds = parseInt(read.question("Enter seconds\n"));
    let epoch = new Date(Year, Month, date, Hour, Minute, Seconds);
    let epValue = Date.parse(epoch.toString());
    console.log("Epoch Value - " + epValue);
  }
}

function rgbToHex() {

  const redInput = read.question("Enter the red value \n");
  const greenInput = read.question("Enter the Green Value \n");
  const blueInput = read.question("Enter the blue value \n");

  let hexVal = "#" + parseInt(redInput).toString(16) + parseInt(greenInput).toString(16) + parseInt(blueInput).toString(16);

  console.log(hexVal);
}

function hexToRbg() {
  const hex = read.question("Enter the Hex Value \n");

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let RGB;
  if(result){
    RGB = {
      'R': parseInt(result[1], 16),
      'G': parseInt(result[2], 16),
      'B': parseInt(result[3], 16)
    } 
  };
  console.log(RGB);
}

function unitConverter() {
  const options = ['Centimetre to Meter', 'Metre to Centimeter','Fahrenheit to Celius','Celius to Fahrenheit'];
  printOptions(options);
  const select = read.question("Enter the Unit");

  if(select == '1'){
    const cm = read.question("-");
    console.log(cm/100+" m");
  }
  if(select == '2'){
    const m = read.question("-");
    console.log(m*100+" cm")
  }
  if(select == '3'){
    const FToC = read.question("-");
    console.log(1.8*FToC* + 32)
  }
  if(select == '4'){
    const CToF = read.question("-");
    console.log((CToF-32)*0.56);
  }
}

function driver(){
  const pickOptions = read.question("Enter your Preffered Pick \n");

  switch(pickOptions){
    case '1': 
      URL();
      break;
    case '2': 
      Base64();
      break;
    case '3': 
      stringHashing();
      break;
    case '4': 
      EpochConv();
      break;
    case '5': 
      rgbToHex();
      break;
    case '6': 
      hexToRbg();
      break;
    case '7': 
      unitConverter();
      break;
  }
}

driver();