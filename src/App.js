import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import ComingSoon from "./ComingSoon";
import { NoData } from "./components/NoData";
import DetailPage from "./DetailPage";
import Posts from "./Posts";
import Gallery from "./Gallery";
import Todos from "./Todos";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<UserList />} />
        <Route path="detailpage" element={<DetailPage />}>
          <Route exact path=":id" element={<UserDetail />} />
          <Route path="posts/:id" element={<Posts />} />
          <Route path="gallery/:id" element={<Gallery />} />
          <Route path="todos/:id" element={<Todos />} />
        </Route>
        <Route exact path="*" element={<NoData />} />
      </Routes>
    </div>
  );
}
