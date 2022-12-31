import { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, subject: "Egg", done: false },
    { id: 2, subject: "Apple", done: true },
    { id: 3, subject: "Bread", done: false },
  ]);

  const add = (subject) => {
    const id = items.length + 1;
    setItems([{ id, subject, done: false }, ...items]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggle = (id) => {
    const result = items.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(result);
  };

  const clear = () => {
    setItems(items.filter(item => !item.done));
  }

  return (
    <div>
      <h1>Todo App({items.length})
        <button onClick={clear} > Clear </button>
      </h1>

      <NewTask add={add} />

      <TaskList
        items={items.filter((item) => item.done)}
        toggle={toggle}
        deleteItem={deleteItem}
      />
      <TaskList
        items={items.filter((item) => !item.done)}
        toggle={toggle}
        deleteItem={deleteItem}
      />
    </div>
  );
};

export default App;
