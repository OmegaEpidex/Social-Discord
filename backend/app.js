const express = require('express');
const path = require('path');

const ExpressApp = express();

app.set('views', path.join(__dirname, 'frontend', 'public'));

app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'frontend', 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'public'));
}
app.listen(3000, () => {
function runExpressApp() {
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
  }
}


if (require.main === module) {
    runExpressApp();
}


module.exports = ExpressApp;