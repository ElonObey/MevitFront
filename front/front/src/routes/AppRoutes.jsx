import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainView } from "../views/mainView";
import { NotFoundView } from "../views/notFoundView";
import { ModuleView } from "../views/moduleView";
import { Deformsrv } from "../components/Module/deformsrv";
import { Erythaggsrv} from "../components/Module/erythaggsrv";
import { Partsizesrv } from "../components/Module/partsizesrv";
import { Plataggsrv } from "../components/Module/plataggsrv";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainView/>}/>
      <Route path="/main/" element={<MainView />} />
      <Route path="/deformsrv" element={<Deformsrv/>}/>
      <Route path="/erythaggsrv" element={<Erythaggsrv/>}/>
      <Route path="/partsizesrv" element={<Partsizesrv/>}/>
      <Route path="/plataggsrv" element={<Plataggsrv/>}/>
      <Route path="/module/" element={<ModuleView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export { AppRoutes };
