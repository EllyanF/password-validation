const express = require('express');
const app = express();
const validatePassword = require('./services/passwordValidator');
const port = process.env.PORT || 3000;

app.post('/validate-password', validatePassword ,(req, res) => {
    return res.status(204).json();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});