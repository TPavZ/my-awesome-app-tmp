const express = require('express')
const app = express();
// Simple Hello Word Node App
// This is a simple project for learning the various aspects of Advanced GitHub and GitHub Actions in the CI/CD process.
const APP_PORT = process.env.APP_PORT || 3000;
app.get('/', (req, res) => {
    res.send('<h2>Hello to Tyler and the rest of the world out there!</h2>');
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`);
});