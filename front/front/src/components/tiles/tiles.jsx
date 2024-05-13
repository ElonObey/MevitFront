import "./tiles.css";
import React from "react";
import Block from "./block";
import Search from "./search";
import { Link } from "react-router-dom";

function Tiles() {
  return (
    <div className="tiles screen">
      <h1>Etiam sed porta ligula. Suspendisse ac elit dolor.</h1>
      <Search></Search>
      <div className="test">
        <div className="table">
          <Link to="deformsrv">
            <Block title="Анализ процесса деформации эритроцитов" />
          </Link>
          <Link to="plataggsrv">
            <Block title="Анализ процесса агрегации тромбоцитов" />
          </Link>
          <Link to="erythaggsrv">
            <Block title="Определение эритроцитов и агрегатов" />
          </Link>
          <Link to="partsizesrv">
            <Block title="Анализ размера частиц" />
          </Link>
          <Link to="module">
            <Block title="coming soon..." />
          </Link>
        </div>
        <div className="side"></div>
      </div>
    </div>
  );
}

export { Tiles };
