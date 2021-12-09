import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import swal from "sweetalert";
import ScrollButton from "../../../layouts/frontend/ScrollButton";

function ViewQuiz(props) {

    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [quiz, setQuiz] = useState([]);
    const [item, setItem] = useState([]);
    const [selected, setSelected] = useState('');

    useEffect(() => {

        let isMounted = true;

        const quiz_slug = props.match.params.slug;
        axios.get(`/api/fetch-quiz/${quiz_slug}`).then(res => {
            if (isMounted) {
                if (res.data.status === 200) {
                    setQuiz(res.data.quiz_data.quiz);
                    setItem(res.data.quiz_data.item);
                    setLoading(false);
                } else if (res.data.status === 400) {
                    swal("Warning", res.data.message, "");
                } else if (res.data.status === 404) {
                    history.push('/listquiz');
                    swal("Warning", res.data.status, "error");
                }
            }
        });

        return () => {
            isMounted = false;
        }
    }, [props.match.params.slug, history]);



    const changeHandle = (e) => {
        e.persist();
        setSelected({ ...selected, [e.target.name]: e.target.value });
    }
    console.log(selected);


    const submitQuiz = (e) => {
        e.preventDefault();

    }

    if (loading) {
        return <h4>Loading Quiz...</h4>
    } else {
        var showQuizList = "";
        showQuizList = quiz.map((quiz, idx) => {
            return (
                <div className="form-group" key={idx}>
                    <div className="py-2 h5 form-group about"><b>{idx + 1}. {quiz.question}</b></div>
                    <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3 form-group" id="options">
                        <label className="options form-group">{quiz.ans_a}
                            <input className="form-check-input" type="radio" name={quiz.id} value={quiz.ans_a} onChange={changeHandle} />
                            <small className="checkmark" />
                        </label>
                        <label className="options form-group">{quiz.ans_b}
                            <input className="form-check-input" type="radio" name={quiz.id} value={quiz.ans_b} onChange={changeHandle} />
                            <small className="checkmark" />
                        </label>
                        <label className="options form-group">{quiz.ans_c}
                            <input className="form-check-input" type="radio" name={quiz.id} value={quiz.ans_c} onChange={changeHandle} />
                            <small className="checkmark" />
                        </label>
                        <label className="options form-group">{quiz.ans_d}
                            <input className="form-check-input" type="radio" name={quiz.id} value={quiz.ans_d} onChange={changeHandle} />
                            <small className="checkmark" />
                        </label>
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
                            <h1 className="text-center">Danh Sách Câu Hỏi</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>DANH MỤC / {item.category.name} / {item.name}</h6>
                </div>
            </div>
            <div className="container mt-sm-5 my-1">
                <div className="row">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-6" >
                        <div className="card mb-3">
                            <div className="card-header text-center text-uppercase py-2 h4">
                                Bài thi {item.name}
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitQuiz}>
                                    {showQuizList}
                                    <div className="d-grid gap-2">
                                        <button className="form-control-submit-button" type="submit">Nộp bài</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                    </div>
                </div>
            </div>
            <ScrollButton />
        </div>
    )
}

export default ViewQuiz;