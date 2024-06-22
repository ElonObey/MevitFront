import "./Module.css";
import React, {useState} from "react";
import analysis from "../../assets/mod_image.png";
import FolderItem from "./folderItem";
import {useDropzone} from 'react-dropzone';
import VoidImagePaper from "../UI/cardMedia/VoidImagePaper";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";


function Plataggsrv() {
  const service = '/'
  const [source, setSource] = useState("");
  const [file_list, set_file_list] = useState([]);

  const onDrop = React.useCallback(acceptedFiles => {
    set_file_list(prev => [...prev, ...acceptedFiles]);
    let files = acceptedFiles;
    const files_data = new FormData()
    for (var i = 0; i < files.length; i++) {
      files_data.append('files', files[i]);
      files_data.append('names', files[i].name);
    };
    const requestOptions = {
      method: 'POST',
      body: files_data
    };
    fetch(service + 'upload/plataggsrv', requestOptions);

  }, []);

  function doubleClickFileName(e, file_name) {
    e.preventDefault()
    try
    {
      const res = fetch(service + "img/?name=" + file_name);
      setSource(service + "img/?name=" + file_name);
    } catch (err) {
      console.log("Файл [", file_name, "] не доступен");
    }
  }

  const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
    noClick: true,
    noKeyboard: true,
    accept: {
      'image/jpeg': [],
      'image/png': []
    }, 
    onDrop
  });
  {/*Generate file list*/}
  const files = acceptedFiles.map(file => (
    <div onClick={e=>doubleClickFileName(e, file.path)}>
        <FolderItem fileName={file.path} data={file.size + " MB"} /> 
    </div>
  ));

  return (
        <Stack height={"100%"} p={5} gap={3}>
        <Typography variant="h4">
          Анализ процесса агрегации тромбоцитов
        </Typography>
  
        <Stack
          gap={3}
          display={"flex"}
          justifyContent={"space-around"}
          height={"100%"}
        >
          <Box display={"flex"} height={"inherit"}>
            <Paper sx={{ height: "100%", flex: "0 1 40%" }} overflow={"scroll"}>
              <Box p={2}>
                <Typography variant="body">Загруженные файлы</Typography>
                {files}
              </Box>
            </Paper>
  
            <Box flex={"0 1 60%"}>
              {source ? <img src={source} /> : <VoidImagePaper />}
            </Box>
          </Box>
  
          <Box display={"flex"} justifyContent={"flex-end"} gap={3}>
            <Button size="large" variant="outlined"> Coхранить</Button>
            <Button size="large" variant="contained" onClick={open}>
              <input {...getInputProps()} /> Загрузить
            </Button>
          </Box>
        </Stack>
      </Stack>
  );
}

export { Plataggsrv };
