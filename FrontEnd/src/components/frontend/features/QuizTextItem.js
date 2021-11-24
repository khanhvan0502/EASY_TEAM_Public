import './QuizTextItem.css'

function QuizTextItem() {
    return (
        <div className="col-6">
            <div className="question ml-sm-5 pl-sm-5 pt-2">
                <div className="py-2 h5"><b>1. Trình dịch PHP nào là trình dịch bạn cho là đúng?</b></div>
                <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                    <label className="options">PHP Translator
                        <input type="radio" name="radio" />
                        <span className="checkmark" />
                    </label>
                    <label className="options">PHP Interpreter
                        <input type="radio" name="radio" />
                        <span className="checkmark" />
                    </label>
                    <label className="options">PHP Communicator
                        <input type="radio" name="radio" />
                        <span className="checkmark" />
                    </label>
                    <label className="options">Không có câu nào đúng
                        <input type="radio" name="radio" />
                        <span className="checkmark" />
                    </label>
                </div>
            </div>
        </div>
    )
};

export default QuizTextItem;

