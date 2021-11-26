import Navbar from "../../../layouts/frontend/Navbar";
import ScrollButton from "../../../layouts/frontend/ScrollButton";
import ListQuizItem from "./ListQuizItem";
import php from './php.png';

function ListQuiz() {
    return (
        <div>
            <Navbar />

            <header className="ex-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1">
                            <h1 className="text-center">Danh Sách Bài Test</h1>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                    <ListQuizItem image={php} />
                    <ListQuizItem image={php} />
                    <ListQuizItem image={php} />
                    <ListQuizItem image={php} />
                    <ListQuizItem image={php} />
                    <ListQuizItem image={php} />
                    <ListQuizItem image={php} />
                    <ListQuizItem image={php} />
                    <ListQuizItem image={php} />
                    <ListQuizItem image={php} />
                </div>
            </div>
            <ScrollButton />
        </div>
    )
}

export default ListQuiz;