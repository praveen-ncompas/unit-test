import React from "react";

const CommetList = ({ setComments, allcomments }) => {
  if (allcomments.length === 0) {
    return <h6>No Comments</h6>;
  }

  const deleteComment = async (id) => {
    setComments((prev) => [...prev].filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Comment List</h2>
      <ul>
        {allcomments.map((item) => {
          return (
            <li key={item.id} className="list-item">
              <h3>{item.text}</h3>
              <button
                data-testid={`delete-${item.id}`}
                onClick={() => deleteComment(item.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommetList;
