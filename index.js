const toBase64 = (file, success, error) => new Promise((resolve, reject) => {
  const reader = new FileReader(); reader.readAsDataURL(file);
  reader.onload = (data) => (success || resolve)(data);
  reader.onerror = err => (error || reject)(err);
});

const FileToBase64 = { toBase64 };

module.exports = FileToBase64;

