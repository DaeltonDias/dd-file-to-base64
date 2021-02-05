# dd-file-to-base64
Convert file to base64 on the front end

### Installation
```shell
$ npm install dd-file-to-base64
```

### Use
```javascript
// CommonJS
const FileToBase64 = require('dd-file-to-base64');

// ES6
import FileToBase64 from 'dd-file-to-base64';
```

```javascript
const input = document.querySelector('[type="file"]');

const file = input.files[0]; // get the first file in the list

(async () => {
  try {
    const data = await FileToBase64.convert(file);
    console.log(data); // base64 file
  } catch(err) {
    console.log(err);
  }
})();

FileToBase64.convert(file).then(data => {
  console.log(data); // base64 file
}).catch(err => {
  console.log(err);
});

FileToBase64.convert(file, (data) => {
  console.log(data); // base64 file
}, (err) => {
  console.log(err);
});
```