import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainView } from "../views/mainView";
import { NotFoundView } from "../views/notFoundView";
import { ModuleView } from "../views/moduleView";
import AuthView from "../views/authView";
import RegisterView from "../views/registerView";
import DeformsView from "../views/deformsView";
import ErythaggsrvView from "../views/erythaggsrvView";
import { PartsizesrvView } from "../views/partsizesrvView";
import { PlataggsrvView } from "../views/plataggsrvView";

function AppRoutes() {
  return (
    // Feractoring -> MUI
    <Routes>
      {/* Here */}
      <Route path="/" element={<MainView />} />
      <Route path="/main/" element={<MainView />} />
      <Route path="/deformsrv" element={<DeformsView />} />
      <Route path="/erythaggsrv" element={<ErythaggsrvView />} />
      <Route path="/partsizesrv" element={<PartsizesrvView />} />
      <Route path="/plataggsrv" element={<PlataggsrvView />} />
      <Route path="/module/" element={<ModuleView />} />
      <Route path="auth/" element={<AuthView />} />
      <Route path="register/" element={<RegisterView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export { AppRoutes };
