const express = require("express");

const router = express.Router();
const healthRoute = require("../backend/routes/health");
const authRoute = require ("../backend/routes/auth");
router.use("/health", healthRoute);
router.use("/auth", authRoute);
router.get("/", (req, res) => {
    res.send("SnapMap API v1");
});

module.exports = router;