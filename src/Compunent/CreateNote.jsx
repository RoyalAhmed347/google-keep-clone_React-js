import React, { useState } from "react";
import "./CreateNote.css";
import AddIcon from "@mui/icons-material/Add";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

const CreateNote = ({ addItem, delitem }) => {
  const [expand, setExpand] = useState(false);

  const [data, setData] = useState({
    title: "",
    details: "",
  });

  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const makeItem = () => {
    addItem(data);
    setData({
      title: "",
      details: "",
    });
  };

  const expendIt = () => {
    setExpand(true);
  };
  const expendOut = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_box">
        {expand ? (
          <input
            type="text"
            className="h_input"
            name="title"
            onChange={inputEvent}
            placeholder="Titel"
            value={data.title}
          />
        ) : null}
        <textarea
          style={{ height: expand ? "150px" : "50px" }}
          placeholder="Write some..."
          name="details"
          onChange={inputEvent}
          onClick={expendIt}
          className="d_input"
          value={data.details}
        ></textarea>
        {expand ? (
          <div className="icons">
            <span onClick={makeItem}>
              <AddIcon />
              Add
            </span>
            <span onClick={expendOut}>
              <CloseFullscreenIcon />
              Close
            </span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CreateNote;
