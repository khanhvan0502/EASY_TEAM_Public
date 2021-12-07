import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import swal from "sweetalert";
import ScrollButton from "../../../layouts/frontend/ScrollButton";
import './ViewQuiz.css';

function ViewQuiz(props) {



    const history = useHistory();
    const [loading, setLoading] = useState(true);
    const [quiz, setQuiz] = useState([]);
    const [item, setItem] = useState([]);
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');

    const changeHandle = (e) => {
        setSelected(e.target.value);
    }

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
                    swal("Warning", res.data.message, "")
                } else if (res.data.status === 404) {
                    history.push('/listquiz');
                    swal("Warning", res.data.status, "error")
                }
            }
        });

        return () => {
            isMounted = false;
        }
    }, [props.match.params.slug, history])

    if (loading) {
        return <h4>Loading Quiz...</h4>
    } else {
        var showQuizList = "";
        showQuizList = quiz.map((quiz, idx) => {
            return (
                <div className="question ml-sm-5 pl-sm-5 pt-2" key={idx}>
                    <div className="py-2 h5"><b>{idx + 1}. {quiz.question}</b></div>
                    <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                        <label className="options">{quiz.ans_a}
                            <input type="radio" name={quiz.id} value={quiz.ans_a} onChange={changeHandle} />
                        </label>
                        <label className="options">{quiz.ans_b}
                            <input type="radio" name={quiz.id} value={quiz.ans_b} onChange={changeHandle} />
                        </label>
                        <label className="options">{quiz.ans_c}
                            <input type="radio" name={quiz.id} value={quiz.ans_c} onChange={changeHandle} />
                        </label>
                        <label className="options">{quiz.ans_d}
                            <input type="radio" name={quiz.id} value={quiz.ans_d} onChange={changeHandle} />
                        </label>
                    </div>
                    {error && <small className="checkmark">{error}</small>}
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
                        {showQuizList}
                        {/* <div className="question ml-sm-5 pl-sm-5 pt-2">
                            <div className="py-2 h5"><b>Ơ</b></div>
                            <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                                {data.choices.map((choice, i) => (
                                    <label className="options" key={i}>
                                        <input type="radio" name="answer" value={choice} onChange={changeHandle} />
                                        {choice}
                                    </label>
                                ))}
                            </div>
                            {error && <small className="checkmark">{error}</small>}
                        </div> */}
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