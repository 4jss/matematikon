const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try {
        return res.status(200).render("index")
    } catch (error) {
      return (
        console.error(error),
        res.status(500).render("500", { errorMsg: error })
      )  
    };
});

module.exports = router;