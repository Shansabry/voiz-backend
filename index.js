const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const { getEmployers } = require('./routes/employer_routes');
const { login } = require('./routes/user_routes');

const app = express();

app.use(cors());

app.use(json());
app.use(getEmployers);
app.use(login);

app.listen(port = 8080, () => {
  console.log(`Listening on port ${port}!!!!`);
});