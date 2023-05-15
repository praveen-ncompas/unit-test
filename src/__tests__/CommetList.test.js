import { render, screen, fireEvent } from "@testing-library/react";
import CommetList from "../components/CommetList";
import userEvent from "@testing-library/user-event";

test("commnets are not available", () => {
  render(<CommetList allcomments={[]} />);
  const h2Element = screen.getByText("no comments", { exact: false });
  expect(h2Element).toBeInTheDocument();
});

test("List all comments", () => {
  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 3" },
  ];
  render(<CommetList allcomments={comments} />);
  const h2Element = screen.queryByText("no comments", { exact: false });
  expect(h2Element).not.toBeInTheDocument();

  const commentLi = screen.getAllByRole("listitem");
  expect(commentLi.length).toBe(comments.length);
});

/*
test("Remove one comment", async () => {
  const comments = [
    { id: 1, text: "Comment 1" },
    { id: 2, text: "Comment 2" },
    { id: 3, text: "Comment 3" },
  ];
  render(<CommetList allcomments={comments} />);

  const h2Element = screen.queryByText("no comments", { exact: false });
  expect(h2Element).not.toBeInTheDocument();

  const commentLi = screen.getAllByRole("listitem");
  expect(commentLi.length).toBe(comments.length);

  const commentDel = screen.getAllByRole("button", {
    name: "Delete",
    exact: false,
  });

  const deleteButton = screen.getByTestId("delete-1");

  // await userEvent.click(deleteButton);

  fireEvent.click(deleteButton);
  // expect(commentDel.length).toBe(comments.length - 1);
});
*/
