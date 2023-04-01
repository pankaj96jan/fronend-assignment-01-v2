import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const SideBar = () => {
  const { id } = useParams();
  return (
    <div className="user-detail-sidebar">
      <div className="user-detail-sidebar-sections">
        <Link to={`${id}`} className="user-detail-sidebar-section">
          Profile
        </Link>
        <Link to={`posts/${id}`} className="user-detail-sidebar-section">
          Posts
        </Link>
        <Link to={`gallery/${id}`} className="user-detail-sidebar-section">
          Gallery
        </Link>
        <Link to={`todos/${id}`} className="user-detail-sidebar-section">
          Todo
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
