import React from "react";
import axios from "axios";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";
import { Box, IconButton } from "@mui/material";

//Defining Card content of the blog post

const BlogCard = ({ title, description, imageURL, username, isUser, id }) => {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myblogs/${id}`);
  };

  // Delete request Function

  const deleteRequest = async () => {
    const res = await axios
      .delete(`https://webkit-cms.herokuapp.com/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  //Defining delete button fuction

  const handleDelete = (e) => {
    deleteRequest()
      .then((data) => console.log(data))
      .then(() => alert("successfully Deleted"));
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 845,
          backgroundcolor: "black",
          margin: "auto",
          mt: 2,
          padding: 2,
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <EditIcon sx={{ color: "rgb(255, 153, 0)" }} />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
          }
          title={
            <Typography
              style={{
                fontFamily: "Arvo, serif",
                fontSize: "30px",
              }}
            >
              {title}
            </Typography>
          }
        />

        <CardMedia
          component="img"
          height="394"
          image={imageURL}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.dark"
            style={{
              fontFamily: "Arvo, serif",
              fontSize: "20px",
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogCard;
