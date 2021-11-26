import React from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
  } from "reactstrap";

class AddProfile extends React.Component {
  render() {
    return (
      <div>
        <Button
          className="float-right mb-4"
          color="primary"
          onClick={this.props.toggleNewUserModal}
        >
          Add User
        </Button>
        <Modal
          isOpen={this.props.newUserModal}
          toggle={this.props.toggleNewUserModal}
        >
          <ModalHeader toggle={this.props.toggleNewUserModal}>
            Add new User
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="fullname">Họ và tên</Label>
              <Input
                id="fullname"
                name="fullname"
                value={this.props.newUserData.fullname}
                onChange={this.props.onChangeAddUserHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={this.props.newUserData.username}
                onChange={this.props.onChangeAddUserHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.newUserData.email}
                onChange={this.props.onChangeAddUserHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={this.props.newUserData.password}
                onChange={this.props.onChangeAddUserHandler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="phone">Điện thoại</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.newUserData.phone}
                onChange={this.props.onChangeAddUserHandler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.props.addUser()}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.props.toggleNewUserModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default AddProfile;