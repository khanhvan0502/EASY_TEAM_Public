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

class EditProfile extends React.Component {
  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.editUserModal}
          toggle={this.props.toggleEditUserModal}
        >
          <ModalHeader toggle={this.props.toggleEditUserModal}>
            Update User
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="fullname">Họ và tên</Label>
              <Input
                id="fullname"
                name="fullname"
                value={this.props.editUserData.fullname}
                onChange={this.props.onChangeEditUserHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={this.props.editUserData.username}
                onChange={this.props.onChangeEditUserHanler}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={this.props.editUserData.email}
                onChange={this.props.onChangeEditUserHanler}
              />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={this.props.editUserData.phone}
                onChange={this.props.onChangeEditUserHanler}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.updateUser}>
              Update
            </Button>
            <Button color="secondary" onClick={this.props.toggleEditUserModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default EditProfile;
