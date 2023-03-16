import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddStudent from "./component2/AddStudent";
import StudentList from "./component2/StudentList";
import AddCollage from "./component2/AddCollage";
import CollageList from "./component2/CollageList";
import AddMarksheet from "./component2/AddMarksheet";
import MarksheetList from "./component2/MarksheetList";
import AddRole from "./component2/AddRole";
import RoleList from "./component2/RoleList";
import AddUser from "./component2/AddUser";
import UserList from "./component2/UserList";
import Dashboard2 from "./component/Dashboard2";
import Footer from "./component/Footer";

export default function App2() {
  return (
    <div>
      <BrowserRouter>
        <Dashboard2 />
        <Routes>
          <Route exact path="/addstudent" element={<AddStudent />} />
          <Route exact path="/studentlist" element={<StudentList />} />
          <Route exact path="/addcollage" element={<AddCollage />} />
          <Route exact path="/collagelist" element={<CollageList />} />
          <Route exact path="/addmarksheet" element={<AddMarksheet />} />
          <Route exact path="/marksheetlist" element={<MarksheetList />} />
          <Route exact path="/addrole" element={<AddRole />} />
          <Route exact path="/rolelist" element={<RoleList />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/userlist" element={<UserList />} />

          <Route exact path="/adduser/:id" element={<AddUser />} />
          <Route exact path="/addstudent/:id" element={<AddStudent />} />
          <Route exact path="/addrole/:id" element={<AddRole />} />
          <Route exact path="/addmarksheet/:id" element={<AddMarksheet />} />
          <Route exact path="/addcollage/:id" element={<AddCollage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
