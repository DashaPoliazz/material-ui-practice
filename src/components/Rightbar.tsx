import React from "react";
import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";

const itemData = [
  {
    img: "https://i.pinimg.com/564x/03/23/f8/0323f8bb494dfb762d339f98142daf82.jpg",
    title: "Breakfast",
  },
  {
    img: "https://i.pinimg.com/564x/0f/01/dc/0f01dc91f1d8719673b35217caf88b87.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/564x/c4/cb/56/c4cb5643c8c898c54c5f947701407964.jpg",
    title: "Camera",
  },
  {
    img: "https://i.pinimg.com/564x/6a/cd/80/6acd80ccc21ccbd1bb492f16c5f55d17.jpg",
    title: "Coffee",
  },
  {
    img: "https://i.pinimg.com/564x/8b/83/f6/8b83f6acffd982202666171f0a1f2473.jpg",
    title: "Hats",
  },
  {
    img: "https://i.pinimg.com/564x/71/a4/79/71a479511cb29b01df34fcee3a1f58c2.jpg",
    title: "Honey",
  },
  {
    img: "https://i.pinimg.com/564x/04/be/42/04be42ff4bd886438cad4c17395accba.jpg",
    title: "Basketball",
  },
  {
    img: "https://i.pinimg.com/564x/12/e3/0d/12e30d7fea4a2e3b115bdb8ef4b89eed.jpg",
    title: "Fern",
  },
  {
    img: "https://i.pinimg.com/564x/7c/de/23/7cde230acd7d6a66d79f2405bc10d3e1.jpg",
    title: "Mushrooms",
  },
  {
    img: "https://i.pinimg.com/564x/f8/8e/2a/f88e2a329943d3109d0dd002a15ada17.jpg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/564x/f8/45/35/f8453583ee5e7610ce797fb506569792.jpg",
    title: "Sea star",
  },
  {
    img: "https://i.pinimg.com/564x/75/e4/63/75e463d639f7d6eb452b409f719a5823.jpg",
    title: "Bike",
  },
];

export default function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest conversations
        </Typography>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
