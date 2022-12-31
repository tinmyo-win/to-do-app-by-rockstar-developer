const TaskList = ({ items, toggle, deleteItem }) => {
  return (
    <ul>
      {items
        .map((item) => (
          <li key={item.id}>
            {item.subject}
            <button onClick={() => toggle(item.id)}>
              {item.done ? "Undo" : "Done"}
            </button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
