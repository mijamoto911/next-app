import JsonPlaceholderAPI from "@/api/JsonPlaceholderAPI/JsonPlaceholderAPI";
import Link from "next/link";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const Comments = async () => {
  const comments = await JsonPlaceholderAPI.getComments({
    signal: new AbortController().signal,
    cache: "no-cache",
  });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Comments
      </Typography>
      <List>
        {comments.map((comment) => (
          <ListItem
            key={comment.id}
            component={Link}
            href={`/comments/${comment.id}`}
          >
            <ListItemText primary={comment.email} secondary={comment.body} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Comments;
