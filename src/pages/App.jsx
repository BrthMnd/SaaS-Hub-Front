import { Navigate, Route, Routes } from "react-router-dom";
import { AsideBar } from "./Templates/AsideBar.templates";
import { NavHeader } from "./Templates/Header.templates";
import { ContentWrapper } from "./Templates/content.templates";
import { FooterTemplate } from "./Templates/footer.tempates";
import { Home } from "./Views/Home.routes";
import { UsersRoute } from "./Views/Users.routes";
import { Updateroutes } from "./Views/Update.routes";
import { ProfileRoutes } from "./Views/Profile.routes";

export function ContainerHome() {
  return (
    <div className="wrapper">
      <NavHeader />
      <AsideBar />
      <ContentWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UsersRoute />} />
          <Route path="/profile" element={<ProfileRoutes />} />
         
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </ContentWrapper>
      <FooterTemplate />
    </div>
  );
}
