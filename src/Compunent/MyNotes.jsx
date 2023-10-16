import React from "react";
import "./MyNotes.css";
import DeleteIcon from "@mui/icons-material/Delete";

const MyNotes = ({ title, details, delitem, id }) => {
  const delEvent = () => {
    return delitem(id);
  };
  return (
    <>
      <div className="note">
        <h3>{title}</h3>
        <p>{details}</p>
        <div className="icon">
          <DeleteIcon className="delIcon" onClick={delEvent} />
        </div>
      </div>
    </>
  );
};

export default MyNotes;
