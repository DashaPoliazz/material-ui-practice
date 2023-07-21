import React, { useState } from "react";
import {
  Tooltip,
  Fab,
  Modal,
  Box,
  Typography,
  Avatar,
  TextField,
  Stack,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import ImageIcon from "@mui/icons-material/Image";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PostAddIcon from "@mui/icons-material/PostAdd";
import styled from "@emotion/styled";

const CustomModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
});

export default function Add() {
  const [open, setOpen] = React.useState(false);

  const handleToggle = () => setOpen((state) => !state);

  return (
    <>
      <Tooltip
        onClick={handleToggle}
        title="Add post"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: {
            xs: "calc(50% - 25px)",
            md: 30,
          },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <CustomModal
        open={open}
        onClose={handleToggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar src="https://i.pinimg.com/564x/99/42/bb/9942bb83f4a9b4c413ac23dc9c76bf7e.jpg" />
            <Typography
              marginLeft={1}
              component={"span"}
              variant="h6"
              fontWeight={500}
            >
              John Doe
            </Typography>
          </UserBox>
          <TextField
            fullWidth
            id="filled-multiline-static"
            placeholder="What's on your mind?"
            multiline
            rows={3}
            variant="filled"
            color="primary"
          />
          <Stack direction="row" gap={1} marginTop={2} marginBottom={3}>
            <AddReactionIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCallIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <Button
            onClick={handleToggle}
            fullWidth
            variant="contained"
            endIcon={<PostAddIcon />}
          >
            Add post
          </Button>
        </Box>
      </CustomModal>
    </>
  );
}
