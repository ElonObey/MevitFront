import "./Module.css";
import React, {useState} from "react";
import analysis from "../../assets/mod_image.png";
import FolderItem from "./folderItem";
import {useDropzone} from 'react-dropzone';
function Deformsrv() {


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
    fetch(service + 'upload/deformsrv', requestOptions);

  }, []);

  function doubleClickFileName(e, file_name) {
    e.preventDefault()
    try
    {
      const res = fetch(service + "img/?name=" + file_name, {
        mode: 'no-cors'
      });
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
    <div className="module screen">
      <div className="header">
        <h2>Анализ процесса деформации эритроцитов</h2>
      </div>
      <div className="container">
        <div className="folder-block">
          <h3 className="subhead">загруженные файлы</h3>
          {/* Ахтунг эти блоки должны быть переделаны в модуль */}
          {files}
        </div>
        <div className="image-block">
          <div className="image">
            <img src={source} />
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="white-button">
          <p> Сохранить </p>
        </div>
        <div className="black-button" onClick={open}>
          <input {...getInputProps()}/>
          <p> Загрузить </p>
        </div>
      </div>
    </div>
  );
}

export { Deformsrv };
