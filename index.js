const convert = (file, success, error) => new Promise((resolve, reject) => {
  const reader = new FileReader(); reader.readAsDataURL(file);
  reader.onload = (data) => (success || resolve)(data);
  reader.onerror = err => (error || reject)(err);
});

const FileToBase64 = { convert };

module.exports = FileToBase64;

