import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomCard from "./CustomCard";
import { Link } from "react-router-dom";

export default function CustomTiles() {
  return (
    <Stack my={10} alignItems={"center"} gap={10}>
      <Typography variant="h2"> Выбор функции </Typography>
      <Box m={3} display={"flex"} gap={6} flexWrap={"wrap"}>
        <Link style={{ textDecoration: "none" }} to="deformsrv">
          <CustomCard head={"Анализ процесса деформации эритроцитов"} />
        </Link>
        <Link style={{ textDecoration: "none" }} to="plataggsrv">
          <CustomCard head={"Анализ агрегации тромбоцитов"} />
        </Link>
        <Link style={{ textDecoration: "none" }} to="erythaggsrv">
          <CustomCard head={"Определение эритроцитов и агрегатов"} />
        </Link>
        <Link style={{ textDecoration: "none" }} to="partsizesrv">
          <CustomCard head={"Анализ размера частиц"} />
        </Link>
      </Box>
    </Stack>
  );
}
