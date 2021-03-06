import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import swal from "sweetalert";

function EditItem(props) {
    const history = useHistory();

    const [categorylist, setCategorylist] = useState([]);
    const [itemInput, setItem] = useState({
        category_id: '',
        name: '',
        slug: '',
        description: '',
        time: '',
        status: '',
    });
    const [picture, setPicture] = useState([]);
    const [errorlist, setError] = useState([]);
    const [loading, setLoading] = useState(true);
    const [allcheckbox, setCheckboxes] = useState([]);

    const handleInput = (e) => {
        e.persist();
        setItem({ ...itemInput, [e.target.name]: e.target.value })
    }

    const handleImage = (e) => {
        setPicture({ image: e.target.files[0] })
    }

    const handleCheckbox = (e) => {
        e.persist();
        setCheckboxes({ ...allcheckbox, [e.target.name]: e.target.checked })
    }

    useEffect(() => {

        document.title = "Edit Items";

        axios.get(`/api/all-category-quiz`).then(res => {
            if (res.data.status === 200) {
                setCategorylist(res.data.category);
            }
        });

        const item_id = props.match.params.id;
        axios.get(`/api/edit-item-quiz/${item_id}`).then(res => {
            if (res.data.status === 200) {
                setItem(res.data.item);
            } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                history.push('/admin/view-item-quiz');
            }
            setLoading(false);
        });

    }, [props.match.params.id, history])

    const updateItem = (e) => {
        e.preventDefault();

        const item_id = props.match.params.id;
        const formData = new FormData();
        formData.append('image', picture.image);
        formData.append('category_id', itemInput.category_id);
        formData.append('name', itemInput.name);
        formData.append('slug', itemInput.slug);
        formData.append('description', itemInput.description);
        formData.append('time', itemInput.time);
        formData.append('status', allcheckbox.status ? '1' : '0');

        axios.post(`/api/update-item-quiz/${item_id}`, formData).then((res) => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                setItem({
                    ...itemInput,
                    category_id: '',
                    name: '',
                    slug: '',
                    description: '',
                    time: '',
                    status: '',
                });
                setError([]);
            } else if (res.data.status === 422) {
                swal("All Fields are mandatory", "", "error");
                setError(res.data.errors);
            } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                history.push("/admin/view-item-quiz");
            }
        });

    }

    if (loading) {
        return <h4>Edit Item Data Loading...</h4>
    }

    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Edit Item
                        <Link to="/admin/view-item-quiz" className="btn btn-primary btn-sm float-end">View Item</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <form onSubmit={updateItem} encType="multipart/form-data">
                        <div className="form-group mb-2">
                            <label className="form-label">Select category</label>
                            <select name="category_id" onChange={handleInput} value={itemInput.category_id} className="form-select form-control">
                                <option>Select option</option>

                                {
                                    categorylist.map((item) => {
                                        return (
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                    })
                                }

                            </select>
                            <small className="text-danger">{errorlist.category_id}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">T??n danh m???c</label>
                            <input type="text" name="name" onChange={handleInput} value={itemInput.name} className="form-control" />
                            <small className="text-danger">{errorlist.name}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Slug</label>
                            <input type="text" name="slug" onChange={handleInput} value={itemInput.slug} className="form-control" />
                            <small className="text-danger">{errorlist.slug}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">M?? t???</label>
                            <input type="text" name="description" onChange={handleInput} value={itemInput.description} className="form-control" />
                            <small className="text-danger">{errorlist.description}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Th???i gian</label>
                            <input type="text" name="time" onChange={handleInput} value={itemInput.time} className="form-control" />
                            <small className="text-danger">{errorlist.time}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">H??nh ???nh</label>
                            <input type="file" name="image" onChange={handleImage} className="form-control" />
                            <img src={`http://localhost:8000/${itemInput.image}`} width="50px" alt={itemInput.name} />
                            <small className="text-danger">{errorlist.image}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Tr???ng th??i&nbsp;&nbsp;</label>
                            <input type="checkbox" name="status" onChange={handleCheckbox} defaultChecked={allcheckbox.status === 1 ? true : false} className="form-check-input" />
                        </div>
                        <button type="submit" className="btn btn-primary px-4 mt-2">C???p nh???t</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditItem;