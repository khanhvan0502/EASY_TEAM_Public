import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import swal from "sweetalert";

function ViewCategoryQuiz() {

    const [loading, setLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([

    ]);

    useEffect(() => {

        axios.get(`/api/view-category-quiz`).then(res => {
            if (res.status === 200) {
                setCategoryList(res.data.category)
            }
            setLoading(false);
        });

    }, []);

    const deleteCategoryQuiz = (e, id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Đang xóa";

        axios.delete(`/api/delete-category-quiz/${id}`).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                thisClicked.closest("tr").remove();
            }
            else if (res.data.status === 404) {
                swal("Success", res.data.message, "success");
                thisClicked.innerText = "Xóa";
            }
        });
    }

    var viewcategory_HTMLTABLE = "";

    if (loading) {
        return <h4>Đang tải trang danh mục...</h4>
    }
    else {
        viewcategory_HTMLTABLE = categoryList.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.slug}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                    <td>
                        <Link to={`edit-category-quiz/${item.id}`} className="btn btn-success btn-sm text-decoration-none">Sửa</Link>
                    </td>
                    <td>
                        <button type="button" onClick={(e) => deleteCategoryQuiz(e, item.id)} className="btn btn-danger btn-sm">Xóa</button>
                    </td>
                </tr>
            )
        });
    }

    return (
        <div className="container px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Danh sách mục
                        <Link to="/admin/add-category-quiz" className="btn btn-primary btn-sm float-end text-decoration-none">Thêm danh mục</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tên</th>
                                <th>Slug</th>
                                <th>Mô tả</th>
                                <th>Trạng thái</th>
                                <th>Sửa</th>
                                <th>Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {viewcategory_HTMLTABLE}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ViewCategoryQuiz;