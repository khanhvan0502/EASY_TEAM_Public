import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import swal from "sweetalert";

function EditCategoryQuiz(props) {

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [categoryInput, setCategoryInput] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {

        const category_id = props.match.params.id;
        axios.get(`/api/edit-category-quiz/${category_id}`).then(res => {
            if (res.data.status === 200) {
                setCategoryInput(res.data.category);
            } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                history.push('/admin/view-category-quiz');
            }
            setLoading(false);
        });

    }, [props.match.params.id, history]);

    const handleInput = (e) => {
        e.persist();
        setCategoryInput({ ...categoryInput, [e.target.name]: e.target.value })
    }

    const updateCategoryQuiz = (e) => {
        e.preventDefault();

        const category_id = props.match.params.id;
        const data = categoryInput;
        axios.put(`/api/update-category-quiz/${category_id}`, data).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                setError([]);
            }
            else if (res.data.status === 422) {
                swal("All fields are mandatory", "", "error");
                setError(res.data.errors);
            }
            else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                history.push('/admin/view-category-quiz');
            }
        });
    }

    if (loading) {
        return <h4>Đang tải trang sửa danh mục...</h4>
    }

    return (
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Sửa danh mục
                        <Link to="/admin/view-category-quiz" className="btn btn-primary btn-sm float-end text-decoration-none">Quay lại</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <form onSubmit={updateCategoryQuiz}>
                        <div className="form-group mb-2">
                            <label className="form-label">Tên danh mục</label>
                            <input type="text" name="name" onChange={handleInput} value={categoryInput.name} className="form-control" />
                            <small className="text-danger">{error.name}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Tên danh mục</label>
                            <input type="text" name="slug" onChange={handleInput} value={categoryInput.slug} className="form-control" />
                            <small className="text-danger">{error.slug}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Mô tả</label>
                            <input type="text" name="description" onChange={handleInput} value={categoryInput.description} className="form-control" />
                            <small className="text-danger">{error.description}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Trạng thái&nbsp;&nbsp;</label>
                            <input type="checkbox" name="status" onChange={handleInput} value={categoryInput.status} />
                        </div>
                        <button type="submit" className="btn btn-primary form-control">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditCategoryQuiz;