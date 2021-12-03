import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import swal from "sweetalert";

function ViewQuiz() {

    const [loading, setLoading] = useState(true);
    const [viewQuiz, setQuiz] = useState([]);

    useEffect(() => {

        document.title = "View Quizs";

        axios.get(`/api/view-quiz`).then(res => {
            if (res.data.status === 200) {
                setQuiz(res.data.quizs);
                setLoading(false);
            }
        })

    }, []);

    const deleteQuiz = (e, id) => {
        e.preventDefault();

        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Đang xóa";

        axios.delete(`/api/delete-quiz/${id}`).then(res => {
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

    var display_QuizData = "";

    if (loading) {
        return <h4>View Items Loading...</h4>
    } else {
        var QuizStatus = '';
        display_QuizData = viewQuiz.map((item) => {
            if (item.status === 0) {
                QuizStatus = 'Show';
            } else if (item.status === 1) {
                QuizStatus = 'Hidden';
            }

            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.items.name}</td>
                    <td>{item.question}</td>
                    <td>{item.ans_a}</td>
                    <td>{item.ans_b}</td>
                    <td>{item.ans_c}</td>
                    <td>{item.ans_d}</td>
                    <td>{item.ans_correct}</td>
                    <td>{item.description}</td>
                    <td>
                        <Link to={`edit-quiz/${item.id}`} className="btn btn-success btn-sm text-decoration-none">Sửa</Link>
                    </td>
                    <td>
                        <button onClick={(e) => deleteQuiz(e, item.id)} className="btn btn-danger btn-sm text-decoration-none">Xóa</button>
                    </td>
                    <td>
                        {QuizStatus}
                    </td>
                </tr>
            )
        });
    }

    return (
        <div className="container-fluid px-4">
            <div className="card mt-4">
                <div className="card-header">
                    <h4>View Quiz
                        <Link to="/admin/add-quiz" className="btn btn-primary btn-sm float-end text-decoration-none">Add Quiz</Link>
                    </h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Item Name</th>
                                    <th>Question</th>
                                    <th>Ans_A</th>
                                    <th>Ans_B</th>
                                    <th>Ans_C</th>
                                    <th>Ans_D</th>
                                    <th>Ans_Correct</th>
                                    <th>Description</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {display_QuizData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewQuiz;