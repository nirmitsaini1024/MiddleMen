const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./Routes/admin")
const editorRouter = require("./Routes/editor");


// Middleware for parsing request bodies
app.use(bodyParser.json());

app.use("/admin", adminRouter)
app.use("/editor", editorRouter)


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});