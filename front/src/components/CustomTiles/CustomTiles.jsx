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
import image1 from "../../assets/bld.jpg";
import image2 from "../../assets/14x.jpg";
import image3 from "../../assets/bld2.png";
import image4 from "../../assets/krov_3.jpg";

// const CardSettings = [
//   {
//     head: "Анализ процесса деформации эритроцитов",
//     body: "Измерение способности эритроцитов изменять свою форму при воздействии механических сил",
//     to: "deformsrv",
//   },
//   {
//     head: "Анализ агрегации тромбоцитов",
//     body: "Исследование, которое проводится для оценки функции тромбоцитов и их способности к слиянию",
//     to: "plataggsrv",
//   },
//   {
//     head: "Определение эритроцитов и агрегатов",
//     body: "Регистрация агрегационной активности эритроцитов, подсчёт количества агрегатов эритроцитов во взвеси отмытых эритроцитов в плазме крови",
//     to: "erythaggsrv",
//   },
//   {
//     head: "Анализ размера частиц",
//     body: "Процесс визуализации и измерения распределения частиц по размерам",
//     to: "partsizesrv",
//   },
// ];

export default function CustomTiles() {
  return (
    <Stack my={10} alignItems={"center"} gap={10}>
      <Typography variant="h2"> Выбор функции </Typography>
      <Box m={3} display={"flex"} gap={6} justifyContent={'space-around'} flexWrap={"wrap"}>
        <Link style={{ textDecoration: "none" }} to="deformsrv">
          <CustomCard
            body={
              "Измерение способности эритроцитов изменять свою форму при воздействии механических сил"
            }
            head={"Анализ процесса деформации эритроцитов"}
            img={image1}
          />
        </Link>

        <Link style={{ textDecoration: "none" }} to="plataggsrv">
          <CustomCard
            body={
              "Исследование, которое проводится для оценки функции тромбоцитов и их способности к слиянию"
            }
            head={"Анализ агрегации тромбоцитов"}
            img={image2}
          />
        </Link>

        <Link style={{ textDecoration: "none" }} to="erythaggsrv">
          <CustomCard
            body={
              "Регистрация агрегационной активности эритроцитов, подсчёт количества агрегатов эритроцитов во взвеси отмытых эритроцитов в плазме крови"
            }
            head={"Определение эритроцитов и агрегатов"}
            img={image3}
          />
        </Link>

        <Link style={{ textDecoration: "none" }} to="partsizesrv">
          <CustomCard
            body={
              "Процесс визуализации и измерения распределения частиц по размерам"
            }
            head={"Анализ размера частиц"}
            img={image4}
          />
        </Link>
      </Box>
    </Stack>
  );
}
