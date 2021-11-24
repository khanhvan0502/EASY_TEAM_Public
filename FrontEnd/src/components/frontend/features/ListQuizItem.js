import { Link } from 'react-router-dom';

function ListQuizItem(props) {

    return (
        <div className="col">
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-center">React JS</h5>
                    <p className="card-text">Bài thi gồm 20 câu, thời gian 30 phút</p>
                    <Link className="btn-outline-sm" to="/quiztext">Vào thi</Link>
                </div>
            </div>
        </div>
    )
}

export default ListQuizItem;