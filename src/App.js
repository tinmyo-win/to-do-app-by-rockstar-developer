import { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";

import { Box, AppBar, Toolbar, Typography, Button, Container, Divider } from "@mui/material";

import { pink } from "@mui/material/colors";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, subject: "Egg", done: false },
    { id: 2, subject: "Apple", done: true },
    { id: 3, subject: "Bread", done: false },
  ]);

  const add = (subject) => {
    const Maxid = Math.max(...items.map(item => item.id))
    const id = Maxid + 1;
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
    setItems(items.filter((item) => !item.done));
  };

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: pink[500] }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo App
            </Typography>
            <Button color="inherit" onClick={clear}>
              Clear
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <NewTask add={add} />

        <TaskList
          items={items.filter((item) => item.done)}
          toggle={toggle}
          deleteItem={deleteItem}
        />

        <Divider />
        <TaskList
          items={items.filter((item) => !item.done)}
          toggle={toggle}
          deleteItem={deleteItem}
        />
      </Container>
    </Box>
    /* <div>
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

    */
  );
};

export default App;
