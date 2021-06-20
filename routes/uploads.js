
const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();


router.post("/uploadmultiple", upload.array("files",12), async (req, res) => {

    const files = req.files
    console.log(req.files)
    const imgUrls = []
    if(!files){
        const error = new Error("Please choose files");
        error.httpStatusCode = 400
    }
    for(let file of files){
        const imgUrl = `http://localhost:8080/file/${file.filename}`;
        imgUrls.push(imgUrl)
        console.log(imgUrl)
    }
  
    return res.send(imgUrls);
});
module.exports = router;