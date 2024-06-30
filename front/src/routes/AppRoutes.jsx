import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainView } from "../views/mainView";
import { NotFoundView } from "../views/notFoundView";
import AuthView from "../views/authView";
import RegisterView from "../views/registerView";
import DeformsView from "../views/deformsView";
import ErythaggsrvView from "../views/erythaggsrvView";
import { PartsizesrvView } from "../views/partsizesrvView";
import { PlataggsrvView } from "../views/plataggsrvView";
import AuthProvider from "./AuthProvider";
import RequireAuth from "./RequireAuth";
import AboutView from "../views/aboutView";

function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/deformsrv" element={<RequireAuth><DeformsView /></RequireAuth>} />
        <Route path="/erythaggsrv" element={<RequireAuth><ErythaggsrvView /></RequireAuth>} />
        <Route path="/partsizesrv" element={<RequireAuth><PartsizesrvView /></RequireAuth>} />
        <Route path="/plataggsrv" element={<RequireAuth><PlataggsrvView /></RequireAuth>} />
        <Route path="auth/" element={<AuthView />} />
        <Route path="register/" element={<RegisterView />} />
        <Route path="about/" element={<AboutView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </AuthProvider>
  );
}

export { AppRoutes };
