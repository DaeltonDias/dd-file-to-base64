const convert = (file, success, error) => new Promise((resolve, reject) => {
  if (!file) (error || reject)('The argument passed is not a file!'); else {
    const reader = new FileReader(); reader.readAsDataURL(file);
    reader.onload = () => (success || resolve)(reader.result);
    reader.onerror = err => (error || reject)(err);
  }
});

const FileToBase64 = { convert };

module.exports = FileToBase64;

