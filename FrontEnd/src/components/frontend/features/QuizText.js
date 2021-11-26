import Navbar from "../../../layouts/frontend/Navbar";
import QuizTextItem from "./QuizTextItem";
// import { Link } from 'react-router-dom';

function QuizText() {
    return (
        <div>
            <Navbar />
            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h1 className="text-center text-uppercase">Bài kiểm tra { }</h1>
                        </div>
                    </div>
                </div>
            </header>
            {/* <Link className="btn-outline-sm" to="/listquiz">trở về</Link> */}
            <div className="container mt-sm-5 my-1">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <QuizTextItem />
                    <div className="col-3">
                        
                    </div>
                </div>
            </div>
        </div>
    )
};

export default QuizText;