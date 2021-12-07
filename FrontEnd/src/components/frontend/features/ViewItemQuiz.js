import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import swal from "sweetalert";
import ScrollButton from "../../../layouts/frontend/ScrollButton";

function ViewItemQuiz(props) {

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState([]);
    const [category, setCategory] = useState([]);

    const itemCount = item.length;

    useEffect(() => {

        let isMounted = true;

        const item_slug = props.match.params.slug;
        axios.get(`/api/fetch-items-quiz/${item_slug}`).then(res => {
            if (isMounted) {
                if (res.data.status === 200) {
                    setItem(res.data.item_data.item);
                    setCategory(res.data.item_data.category);
                    setLoading(false);
                } else if (res.data.status === 400) {
                    swal("Warning", res.data.message, "error");
                }
                else if (res.data.status === 404) {
                    history.push('/listquiz');
                    swal("Warning", res.data.message, "error");
                }
            }
        });

        return () => {
            isMounted = false;
        }
    }, [props.match.params.slug, history]);

    if (loading) {
        return <h4>Loading Item...</h4>
    } else {
        var showItemList = "";
        if (itemCount) {
            showItemList = item.map((item, idx) => {
                return (
                    <div className="col-md-3" key={idx}>
                        <div className="card">
                            <Link className="text-decoration-none" to={`${item.category.slug}/${item.slug}`}>
                                <img src={`http://localhost:8000/${item.image}`} className="border" style={{ width: '100%', height: '200px' }} alt={item.name} />
                                <div className="card-body">
                                    <h5 className="text-center">{item.name}</h5>
                                    <hr />
                                    <p className="text-center">{item.description}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            });
        } else {
            showItemList =
                <div className="col-md-12">
                    <h4>No Item Avaiable for {category.name}</h4>
                </div>
        }
    }

    return (
        <div>
            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h1 className="text-center">Danh Sách Bộ Câu Hỏi</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>DANH MỤC / {category.name}</h6>
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    {showItemList}
                </div>
            </div>
            <ScrollButton />
        </div>
    )
}

export default ViewItemQuiz;