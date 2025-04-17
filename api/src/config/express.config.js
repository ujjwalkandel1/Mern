const express = require('express');
const router = require("./router.config")

const app =express()

//mount router to app
app.use(router)


//Routing
// app.get()
// app.post()
// app.put()
// app.patch()
// app.delete()

// app.get("/health", (req, res) => {
//     res.end("This is healthcheck url")
// })

// app.use("/", (request, response) => {
//     response.end("Hello world")
// })

module.exports=app;   