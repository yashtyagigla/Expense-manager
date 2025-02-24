const express = require("express");
const router = express.Router();
const diaryController = require("../controllers/diaryController");

router.post("/", diaryController.createEntry);
router.get("/:userid", diaryController.getEntries);
router.put("/:entryId", diaryController.updateEntry);
router.delete("/:entryId", diaryController.deleteEntry);

module.exports = router;
