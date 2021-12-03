import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import swal from "sweetalert";

function AddItem() {

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

    const handleInput = (e) => {
        e.persist();
        setItem({ ...itemInput, [e.target.name]: e.target.value })
    }

    const handleImage = (e) => {
        setPicture({ image: e.target.files[0] })
    }

    useEffect(() => {

        document.title = "Add Items";

        axios.get(`/api/all-category-quiz`).then(res => {
            if (res.data.status === 200) {
                setCategorylist(res.data.category);
            }
        });

    }, [])

    const submitItem = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', picture.image);
        formData.append('category_id', itemInput.category_id);
        formData.append('name', itemInput.name);
        formData.append('slug', itemInput.slug);
        formData.append('description', itemInput.description);
        formData.append('time', itemInput.time);
        formData.append('status', itemInput.status);

        axios.post(`/api/store-item-quiz`, formData).then((res) => {
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
            }
        });

    }

    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Add Item
                        <Link to="/admin/view-item-quiz" className="btn btn-primary btn-sm float-end">View Item</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <form onSubmit={submitItem} encType="multipart/form-data">
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
                            <label className="form-label">Tên danh mục</label>
                            <input type="text" name="name" onChange={handleInput} value={itemInput.name} className="form-control" />
                            <small className="text-danger">{errorlist.name}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Slug</label>
                            <input type="text" name="slug" onChange={handleInput} value={itemInput.slug} className="form-control" />
                            <small className="text-danger">{errorlist.slug}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Mô tả</label>
                            <input type="text" name="description" onChange={handleInput} value={itemInput.description} className="form-control" />
                            <small className="text-danger">{errorlist.description}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Thời gian</label>
                            <input type="text" name="time" onChange={handleInput} value={itemInput.time} className="form-control" />
                            <small className="text-danger">{errorlist.time}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Hình ảnh</label>
                            <input type="file" name="image" onChange={handleImage} className="form-control" />
                            <small className="text-danger">{errorlist.image}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Trạng thái&nbsp;&nbsp;</label>
                            <input type="checkbox" name="status" onChange={handleInput} value={itemInput.status} className="form-check-input" />
                        </div>
                        <button type="submit" className="btn btn-primary px-4 mt-2">Thêm</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddItem;