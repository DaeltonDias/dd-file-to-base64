# dd-file-to-base64
Convert file to base64

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
    const data = await FileToBase64.toBase64(file);
  } catch(err) {
    console.log(err);
  }
})();

FileToBase64.toBase64(file).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});

FileToBase64.toBase64(file, (data) => {
  console.log(data);
}, (err) => {
  console.log(err);
});
```