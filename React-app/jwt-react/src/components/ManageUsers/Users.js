import { useEffect, useState } from "react";
import "./Users.scss";
import { useHistory } from "react-router-dom";
import { fetchAllUser } from "../../services/userService";
const Users = (props) => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    let response = await fetchAllUser();
    if (response && response.data && response.data.EC === 0) {
      setListUser(response.data.DT);
      console.log(response.data.DT);
    }
  };

  return (
    <div className="container">
      <div className="manage-users-container">
        <div className="user-header">
          <div className="title">
            <h3>Table User</h3>
          </div>
          <div className="actions">
            <button className="btn btn-success">Refresh</button>
            <button className="btn btn-primary">Add New User</button>
          </div>
        </div>
        <div className="user-body">
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Id</th>
                <th scope="col">Email</th>
                <th scope="col">Username</th>
                <th scope="col">Group Role</th>
              </tr>
            </thead>
            <tbody>
              {listUser && listUser.length > 0 ? (
                <>
                  {listUser.map((item, index) => {
                    return (
                      <tr key={`row-${index}`}>
                        <td>{index + 1}</td>
                        <td>{item.id}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                        <td>{item.Group ? item.Group.name : ""}</td>
                      </tr>
                    );
                  })}
                </>
              ) : (
                <>
                  <span>not fount</span>
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className="user-footer">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Users;
