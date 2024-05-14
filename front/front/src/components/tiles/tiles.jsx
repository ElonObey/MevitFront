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
          <div>
            <Link to="deformsrv">
              <Block title="Анализ процесса деформации эритроцитов" />
            </Link>
          </div>
          <div>
            <Link to="plataggsrv">
              <Block title="Анализ процесса агрегации тромбоцитов" />
            </Link>
          </div>
          <div>
            <Link to="erythaggsrv">
              <Block title="Определение эритроцитов и агрегатов" />
            </Link>
          </div>
          <div>
            <Link to="partsizesrv">
              <Block title="Анализ размера частиц" />
            </Link>
          </div>
          <div>
            <Link to="module">
              <Block title="coming soon..." />
            </Link>
          </div>
        </div>
        <div className="side"></div>
      </div>
    </div>
  );
}

export { Tiles };
