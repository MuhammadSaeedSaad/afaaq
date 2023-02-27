const express = require('express')
const sessionsRouter = require("./routers/sessions");
const app = express()
const port = 3000

app.use("/sessions", sessionsRouter);

// general path
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})