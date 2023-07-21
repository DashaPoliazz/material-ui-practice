import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

export default function Post() {
  return (
    <div>
      <Card
        sx={{
          marginBottom: "10px",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="This is title of the post"
          subheader="September 14, 2029"
        />
        <CardMedia
          component="img"
          height="400px"
          image="https://i.pinimg.com/564x/db/60/33/db6033744a79dc465e9b7b3a9407490f.jpg"
          alt="Demon slayer"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dignissimos mollitia, consequuntur soluta sequi consequatur eligendi
            possimus omnis iure repellendus nulla unde voluptatum temporibus
            rerum aperiam molestias, nesciunt ipsum? Cupiditate.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              color="error"
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
