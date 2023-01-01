import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";

import {
  Delete as DeleteIcon,
  Check as CheckIcon,
  Undo as UndoIcon,
} from "@mui/icons-material";

import { pink, green } from "@mui/material/colors";

const TaskList = ({ items, toggle, deleteItem }) => {
  return (
    <Box>
      {items.map((item, i) => (
        <List key={i}>
          <ListItem>
            <IconButton onClick={() => toggle(item.id)}>
              {item.done ? (
                <UndoIcon />
              ) : (
                <CheckIcon sx={{ color: green[500] }} />
              )}
            </IconButton>
            <ListItemText sx={{ mt: 3, color: item.done ? "grey" : "black" }}>
              {item.subject}
            </ListItemText>

            <IconButton onClick={() => deleteItem(item.id)}>
              <DeleteIcon sx={{ color: pink[500] }} />
            </IconButton>
          </ListItem>
        </List>
      ))}
    </Box>
  );
};

export default TaskList;
