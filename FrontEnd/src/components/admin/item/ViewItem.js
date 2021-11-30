import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function ViewItem() {

    const [loading, setLoading] = useState(true);
    const [viewItem, setItem] = useState([]);

    useEffect(() => {

        document.title = "View Items";

        axios.get(`/api/view-item-quiz`).then(res => {
            if (res.data.status === 200) {
                setItem(res.data.items);
                setLoading(false);
            }
        })

    }, []);

    var display_ItemData = "";

    if (loading) {
        return <h4>View Items Loading...</h4>
    } else {
        var ItemStatus = '';
        display_ItemData = viewItem.map((item) => {
            if (item.status == '0') {
                ItemStatus = 'Show';
            } else if (item.status == '1') {
                ItemStatus = 'Hidden';
            }

            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.category.name}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                        <img src={`http://localhost:8000/${item.image}`} width="50px" alt={item.name} />
                        {/* {item.image} */}
                    </td>
                    <td>
                        <Link to={`edit-item-quiz/${item.id}`} className="btn btn-success btn-sm text-decoration-none">Sửa</Link>
                    </td>
                    <td>
                        {ItemStatus}
                    </td>
                </tr>
            )
        });
    }

    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>View Item
                        <Link to="/admin/add-item-quiz" className="btn btn-primary btn-sm float-end text-decoration-none">Add Item</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Category Name</th>
                                    <th>Item Name</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Edit</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {display_ItemData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewItem;