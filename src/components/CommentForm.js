import React, { useState } from "react";

const CommentForm = ({ setComments }) => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  // const addComments = ()=>{
  //   setComments((prev)=>[...prev,{id:Date.now(),text:text}])
  //   setText("")
  // }

  const postComment = async () => {
    const res = await fetch("http://localhost:5000/addcomment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });
    const result = await res.json();
    setComments((prev) => [...prev, result]);
    setText("");
  };

  return (
    <div>
      <h2>Comment Form</h2>
      <input
        placeholder="Write your comment here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <br />
      <input
        type="checkbox"
        id="checkbox"
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label htmlFor="checkbox">I agree to terms and conditions</label>

      <br />
      <br />
      <button disabled={!checked || !text} onClick={postComment}>
        Add Comment
      </button>
    </div>
  );
};

export default CommentForm;
