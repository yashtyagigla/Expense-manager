const DiaryEntry = require("../models/Diary");

exports.createEntry = async (req, res) => {
  try {
    const { userid, title, date, description } = req.body;
    const newEntry = new DiaryEntry({ userid, title, date, description });
    await newEntry.save();
    res.json(newEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save diary entry" });
  }
};

exports.getEntries = async (req, res) => {
  try {
    const userid = req.params.userid; // assuming userid is part of the URL
    const entries = await DiaryEntry.find({ userid });
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get diary entries" });
  }
};

exports.updateEntry = async (req, res) => {
  try {
    const { entryId } = req.params;
    console.log(req);
    const { title, date, description } = req.body;

    const updatedEntry = await DiaryEntry.updateOne(
      { _id: entryId },
      {
        $set: {
          title: title,
          date: date,
          description: description,
        },
      }
    );

    if (!updatedEntry) {
      console.error("Diary entry not found for update");
      return res.status(404).json({ error: "Diary entry not found" });
    }

    console.log("Entry updated:", updatedEntry);
    res.json(updatedEntry);
  } catch (error) {
    console.error("Error updating entry:", error);
    res.status(500).json({ error: "Failed to update diary entry" });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const { entryId } = req.params;
    await DiaryEntry.findByIdAndDelete(entryId);
    res.json({ message: "Diary entry deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete diary entry" });
  }
};
