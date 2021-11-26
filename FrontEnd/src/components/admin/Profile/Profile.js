
import React from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";
import AddProfile from "./AddProfile";
import EditProfile from "./EditProfile";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      newUserData: {
        fullname: "",
        username: "",
        email: "",
        phone: "",
      },
      isLoading: false,
      status: "",
      newUserModal: false,
      editUserData: {
        id: "",
        fullname: "",
        username: "",
        email: "",
        phone: "",
      },
      editUserModal: false,
      noDataFound: "",
    };
  }

  componentDidMount() {
    this.getUsers();
  }
  getUsers() {
    axios.get(`api/profile`).then((response) => {
      if (response.status === 200) {
        this.setState({
          users: response.data ? response.data : [],
        });
      }
      if (
        response.data.status === "failed" &&
        response.data.success === false
      ) {
        this.setState({
          noDataFound: response.data.message,
        });
      }
    });
  }

  toggleNewUserModal = () => {
    this.setState({
      newUserModal: !this.state.newUserModal,
    });
  };
  onChangeAddUserHandler = (e) => {
    let { newUserData } = this.state;
    newUserData[e.target.name] = e.target.value;
    this.setState({ newUserData });
  };
  addUser = () => {
    axios.post(`api/register`, this.state.newUserData).then((response) => {
      const { users } = this.state;
      const newUsers = [...users];
      newUsers.push(response.data);
      this.setState(
        {
          users: newUsers,
          newUserModal: false,
          newUserData: {
            fullname: "",
            username: "",
            email: "",
            password: "",
            phone: "",
          },
        },
        () => this.getUsers()
      );
    });
  };

  toggleEditUserModal = () => {
    this.setState({
      editUserModal: !this.state.editUserModal,
    });
  };

  onChangeEditUserHanler = (e) => {
    let { editUserData } = this.state;
    editUserData[e.target.name] = e.target.value;
    this.setState({ editUserData });
  };

  editUser = (id, fullname, username, email, phone) => {
    this.setState({
      editUserData: { id,
         fullname,
          username,
           email, 
           phone },
      editUserModal: !this.state.editUserModal,
    });
  };

  updateUser = () => {
    let { id, fullname, username, email, phone } = this.state.editUserData;
    this.setState({
      isLoading: true,
    });
    axios
      .post(`api/register`, {
        fullname,
        username,
        email,
        phone,
        id,
      })
      .then((response) => {
        this.getUsers();
        this.setState({
          editUserModal: false,
          editUserData: { fullname, username, email, phone, id },
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        console.log(error.response);
      });
  };

  deleteUser = (id) => {
    this.setState({
      isLoading: true,
    });
    axios
      .delete(`api/delete/` + id)
      .then((response) => {
        this.setState({
          isLoading: false,
        });
        this.getUsers();
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    const { newUserData, editUserData, noDataFound, users } = this.state;
    let usersDetails = [];
    if (users.length) {
      usersDetails = users.map((user, index) => {
        return (
          <tr key={user.id}>
            <td>{index + 1}</td>
            <td>{user.fullname}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <Button
                color="success"
                className="mr-3"
                size="sm"
                onClick={() =>
                  this.editUser(
                    user.id,
                    user.fullname,
                    user.username,
                    user.email,
                    user.phone
                  )
                }
              >
                Edit
              </Button>
              <Button
                color="danger"
                size="sm"
                onClick={() => this.deleteUser(user.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        );
      });
    }

    if (this.state.isLoading) {
      return (
        <div className="spinner-border text-center" role="status">
          {" "}
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
    return (
      <div className="App container mt-4">
        <h4 className="font-weight-bold">users Registration</h4>
        {/* Model for Add Studnet Record */}
        <AddProfile
          toggleNewUserModal={this.toggleNewUserModal}
          newUserModal={this.state.newUserModal}
          onChangeAddUserHandler={this.onChangeAddUserHandler}
          addUser={this.addUser}
          newUserData={newUserData}
        />
        {/* Model for Edit Studnet Record */}
        <EditProfile
          toggleEditUserModal={this.toggleEditUserModal}
          editUserModal={this.state.editUserModal}
          onChangeEditUserHanler={this.onChangeEditUserHanler}
          editUser={this.editUser}
          editUserData={editUserData}
          updateUser={this.updateUser}
        />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Họ và tên</th>
              <th>Username</th>
              <th>Email</th>
              <th>Điện thoại</th>
              <th>Hành động</th>
            </tr>
          </thead>
          {users.length === 0 ? (
            <tbody>
              <h3>{noDataFound}</h3>
            </tbody>
          ) : (
            <tbody>{usersDetails}</tbody>
          )}
        </Table>
      </div>
    );
  }
}
export default Profile;