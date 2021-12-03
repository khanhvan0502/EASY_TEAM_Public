import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert";

function EditQuiz(props) {

    const history = useHistory();
    const [itemlist, setItemlist] = useState([]);
    const [quizInput, setQuiz] = useState({
        item_id: '',
        question: '',
        ans_a: '',
        ans_b: '',
        ans_c: '',
        ans_d: '',
        ans_correct: '',
        description: '',
        status: '',
    });
    const [checkboxes, setCheckbox] = useState([]);
    const [errorlist, setError] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleInput = (e) => {
        e.persist();
        setQuiz({ ...quizInput, [e.target.name]: e.target.value });
    }

    const handleCheckbox = (e) => {
        e.persist();
        setCheckbox({ ...checkboxes, [e.target.name]: e.target.checked })
    }

    useEffect(() => {

        axios.get(`/api/all-item-quiz`).then(res => {
            if (res.data.status === 200) {
                setItemlist(res.data.item);
            }
        });

        const quiz_id = props.match.params.id;
        axios.get(`/api/edit-quiz/${quiz_id}`).then(res => {
            if (res.data.status === 200) {
                setQuiz(res.data.quiz);
            } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                history.push('/admin/view-quiz');
            }
            setLoading(false);
        });

    }, [props.match.params.id, history]);

    const updateQuiz = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('item_id', quizInput.item_id);
        formdata.append('question', quizInput.question);
        formdata.append('ans_a', quizInput.ans_a);
        formdata.append('ans_b', quizInput.ans_b);
        formdata.append('ans_c', quizInput.ans_c);
        formdata.append('ans_d', quizInput.ans_d);
        formdata.append('ans_correct', quizInput.ans_correct);
        formdata.append('description', quizInput.description);
        formdata.append('status', checkboxes.status ? '1' : '0');

        const quiz_id = props.match.params.id;
        axios.post(`/api/update-quiz/${quiz_id}`, formdata).then(res => {
            if (res.data.status === 200) {
                swal("Success", res.data.message, "success");
                setQuiz({
                    ...quizInput,
                    item_id: '',
                    question: '',
                    ans_a: '',
                    ans_b: '',
                    ans_c: '',
                    ans_d: '',
                    ans_correct: '',
                    description: '',
                    status: '',
                });
                setError([]);
            } else if (res.data.status === 422) {
                swal("All Fields are mandatory", "", "error");
                setError(res.data.errors);
            } else if (res.data.status === 404) {
                swal("Error", res.data.message, "error");
                history.push('/admin/view-quiz');
            }
        });
    }

    if (loading) {
        return <h4>Edit Quiz Data Loading...</h4>
    }

    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>Edit Quiz
                        <Link to="/admin/view-quiz" className="btn btn-primary btn-sm float-end">View Quiz</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <form onSubmit={updateQuiz} encType="multipart/form-data">
                        <div className="form-group mb-2">
                            <label className="form-label">Select category</label>
                            <select name="item_id" onChange={handleInput} value={quizInput.item_id} className="form-select form-control">
                                <option>Select option</option>

                                {
                                    itemlist.map((item) => {
                                        return (
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                    })
                                }

                            </select>
                            <small className="text-danger">{errorlist.item_id}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Câu hỏi</label>
                            <input type="text" name="question" onChange={handleInput} value={quizInput.question} className="form-control" />
                            <small className="text-danger">{errorlist.question}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Đáp án A</label>
                            <input type="text" name="ans_a" onChange={handleInput} value={quizInput.ans_a} className="form-control" />
                            <small className="text-danger">{errorlist.ans_a}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Đáp án B</label>
                            <input type="text" name="ans_b" onChange={handleInput} value={quizInput.ans_b} className="form-control" />
                            <small className="text-danger">{errorlist.ans_b}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Đáp án C</label>
                            <input type="text" name="ans_c" onChange={handleInput} value={quizInput.ans_c} className="form-control" />
                            <small className="text-danger">{errorlist.ans_c}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Đáp án D</label>
                            <input type="text" name="ans_d" onChange={handleInput} value={quizInput.ans_d} className="form-control" />
                            <small className="text-danger">{errorlist.ans_d}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Đáp án đúng</label>
                            <input type="text" name="ans_correct" onChange={handleInput} value={quizInput.ans_correct} className="form-control" />
                            <small className="text-danger">{errorlist.ans_correct}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Mô tả</label>
                            <input type="text" name="description" onChange={handleInput} value={quizInput.description} className="form-control" /><small className="text-danger">{errorlist.description}</small>
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">Trạng thái&nbsp;&nbsp;</label>
                            <input type="checkbox" name="status" onChange={handleCheckbox} defaultChecked={checkboxes.status === 1 ? true : false} className="form-check-input" />
                        </div>
                        <button type="submit" className="btn btn-primary px-4 mt-2">Cập nhật</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditQuiz;