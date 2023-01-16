import "./App.css";
import Dashboard1 from "./component/Dashboard1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./component/Registration";
import Home from "./component/Home";
import Login from "./component/Login";
import AddStudent from "./component2/AddStudent";
import StudentList from "./component2/StudentList";
import AddCollage from "./component2/AddCollage";
import CollageList from "./component2/CollageList";
import AddMarksheet from "./component2/AddMarksheet";
import MarksheetList from "./component2/MarksheetList";
import AddRole from "./component2/AddRole";
import RoleList from "./component2/RoleList"
import AddUser from "./component2/AddUser";
import UserList from "./component2/UserList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard1 />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/addstudent" element={<AddStudent />} />
          <Route exact path="/studentlist" element={<StudentList />} />
          <Route exact path="/addcollage" element={<AddCollage />} />
          <Route exact path="/collagelist" element={<CollageList />} />
          <Route exact path="/addmarksheet" element={<AddMarksheet />} />
          <Route exact path="/marksheetlist" element={<MarksheetList />} />
          <Route exact path="/addrole" element={<AddRole />} />
          <Route exact path="/rolelist" element={<RoleList /> } />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/userlist" element={<UserList />} />
      
          <Route exact path="/adduser/:id" element={<AddUser />} />
          <Route exact path="/addstudent/:id" element={<AddStudent />} />
          <Route exact path="/addrole/:id" element={<AddRole />} />
          <Route exact path="/addmarksheet/:id" element={<AddMarksheet />} />
          <Route exact path="/addcollage/:id" element={<AddCollage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
