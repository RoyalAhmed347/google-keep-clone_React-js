import React, { useState } from "react";
import Header from "./Compunent/Header";
import CreateNote from "./Compunent/CreateNote";
import MyNotes from "./Compunent/MyNotes";
import Footer from "./Compunent/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addItem = (data) => {
    setNotes((preData) => {
      return [...preData, data];
    });
  };

  const delitem = (id) => {
    setNotes((preData) => {
      return preData.filter((val, index) => {
        return index != id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote addItem={addItem} />
      {notes.map((crutEle, index) => {
        return (
          <MyNotes
            title={crutEle.title}
            details={crutEle.details}
            key={index}
            id={index}
            delitem={delitem}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
