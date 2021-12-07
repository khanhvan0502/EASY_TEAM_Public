import ScrollButton from "../../../layouts/frontend/ScrollButton";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import php from './php.png';

function ViewCategoryQuiz() {

    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        let isMountered = true;

        axios.get(`/api/get-category-quiz`).then(res => {
            if (isMountered) {
                if (res.data.status === 200) {
                    setCategory(res.data.category);
                    setLoading(false);
                }
            }
        });
        return () => {
            isMountered = false;
        }
    }, [])

    if (loading) {
        return (
            <h4>Loading Category...</h4>
        )
    } else {
        var showCategoryList = '';
        showCategoryList = category.map((item) => {
            return (
                <div className="col-md-3" key={item.id}>
                    <div className="card">
                        <Link className="text-decoration-none" to={`listquiz/${item.slug}`}>
                            <img src={php} style={{ width: '100%', height: '280px' }} alt={item.name} />
                            <hr />
                            <div className="card-body">
                                <h5 className="card-title text-center">{item.name}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        });
    }

    return (
        <div>
            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h1 className="text-center">Danh Mục Bài Thi</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    {showCategoryList}
                </div>
            </div>
            <ScrollButton />
        </div>
    )
}

export default ViewCategoryQuiz;