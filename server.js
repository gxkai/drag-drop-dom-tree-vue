const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const port = process.env.PORT || 80

app = express()
app.use(serveStatic('public', {'index': ['frame.html']}))
app.listen(port)