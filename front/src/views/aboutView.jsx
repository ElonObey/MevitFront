import React from "react";
import CustomFooter from "../components/footer/CustomFooter";
import CustomAppBar from "../components/AppBar/CustomAppBar";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";

function AboutView() {
  const theme = useTheme()

  return (
    <>
      <CustomAppBar />
      <Stack height={"100%"} alignItems={"center"} p={5} gap={3}>
        <Paper sx={{ [theme.breakpoints.up("sm")]:{width: "50%"} }}>
          <Stack alignItems={"center"} p={5} gap={3}>
            <Box>
              <Typography variant="h3">О нас</Typography>
            </Box>
            <Box>
              <Typography variant="body">
                Добро пожаловать на сайт, посвященный инновационной обработке
                медицинских изображений! Мы рады представить вам уникальную
                платформу, которая объединяет передовые технологии компьютерного
                зрения и медицинские знания для улучшения диагностики, лечения и
                исследований. Наше web-приложение предназначено для врачей,
                исследователей и специалистов в области здравоохранения, которые
                ищут эффективные инструменты для анализа медицинских
                изображений. Давайте вместе откроем новые возможности в
                медицинской практике и научных исследованиях!
              </Typography>
            </Box>
            {/* <Box>
              <Typography variant="body">
                К сожалению, платформа находится все еще на стадии разработки.
                Поэтому если вы столкнулись с какими то либо проблемами или
                недочетами, пожалуйста, напишите об этом разработчикам. Будем
                рады сделать это приложение лучше.
              </Typography>
            </Box> */}
          </Stack>
        </Paper>
      </Stack>
      <CustomFooter />
    </>
  );
}

export default AboutView;
