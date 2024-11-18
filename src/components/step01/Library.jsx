import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="처음 만난 리액트" numOfPage="300" /> <hr />
      <Book name="처음 만난 너" numOfPage="111" /> <hr />
      <Book name="처음 만난 나" numOfPage="222" /> <hr />
    </div>
  );
}

export default Library;
