import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const DiaryForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/Diaries/${user._id}`
        );
        setEntries(response.data);
      } catch (error) {
        console.error("Error fetching entries:", error.response);
      }
    };

    fetchEntries();
  }, [user._id]);

  const handleSubmit = async () => {
    try {
      {
        const response = await axios.post(
          "http://localhost:8080/api/v1/Diaries",
          {
            userid: user._id,
            title,
            date,
            description,
          }
        );
        console.log("Entry created:", response.data);
        setEntries((prevEntries) => [...prevEntries, response.data]);
      }

      setTitle("");
      setDate("");
      setDescription("");
      setSelectedEntry(null);
    } catch (error) {
      console.error("Error:", error.response);
    }
  };
  const handleDelete = async (entryId) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/Diaries/${entryId}`);
      console.log("Entry deleted:", entryId);

      setEntries((prevEntries) =>
        prevEntries.filter((entry) => entry._id !== entryId)
      );

      setTitle("");
      setDate("");
      setDescription("");
      setSelectedEntry(null);
    } catch (error) {
      console.error("Error deleting entry:", error.response);
    }
  };
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("../Home");
  };
  return (
    <>
      <div className="mohan100">
        <h1 className="todolist_heading mb-4">Quick Note</h1>
        <div className="container mt-5 ram3">
          <div className="form-group">
            <button
              className="btn btn-primary button233"
              type="button"
              onClick={redirectToHome}
            >
              Go to Home
            </button>
            <div></div>
            <label className="mohan76">Title:</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="mohan76">Date:</label>
            <input
              type="Date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="mohan76">Description:</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary mohan55"
            onClick={handleSubmit}
          >
            Submit
          </button>

          <h2 className="mohan90">Diary Entries</h2>
          <ul className="list-group mohan99">
            {entries.map((entry) => (
              <li key={entry._id} className="list-group-item">
                <div>
                  <h4>
                    <strong>Title:{entry.title}</strong>
                  </h4>
                  <h5> Date:{entry.date.slice(0, 10)}</h5>
                  <p>{entry.description}</p>
                  <button
                    type="button"
                    className="btn btn-danger mohan55"
                    onClick={() => handleDelete(entry._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-black text-light p-4">
          <h4 className="text-center">All rights reserved &copy; Expense Manager</h4>
        </div>
      </div>
    </>
  );
};

export default DiaryForm;
