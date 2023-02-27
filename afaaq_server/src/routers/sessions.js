const express = require("express");
const router = express.Router()
const search = require("../common/common").search;
const sessions = require("../sessions");

// general
router.get("/", (req, res) => {
    const search_query = req.query.search;
    const results = search(sessions, search_query, ["first_name", "last_name", "email"]);
    res.status(200).send(results);
});

// read a session
router.get("/:sessionId", (req, res) => {
    const sessionId = req.params.sessionId;
    console.log(sessionId);
    res.status(200).send(sessionId);
})

// write session
router.post("/:sessionId", (req, res) => {
    const sessionId = req.params.sessionId;
    console.log(sessionId);
    res.status(201).send(sessionId);
})

// delete session
router.delete("/:sessionId", (req, res) => {
    const sessionId = req.params.sessionId;
    console.log(sessionId);
    res.status(410).send(sessionId);
})

module.exports = router;