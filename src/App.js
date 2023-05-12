import React, { useState } from "react";
import CommentForm from "./components/CommentForm";
import CommetList from "./components/CommetList";

function App() {
  const [comments, setComments] = useState([]);
  return (
    <div>
      <h1>Test App</h1>
      <CommentForm setComments={setComments} />
      <CommetList setComments={setComments} allcomments={comments} />
    </div>
  );
}

export default App;
