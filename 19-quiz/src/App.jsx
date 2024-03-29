import React, { useContext } from 'react';
import { AppContext } from './context';
import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

function App() {
    const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer } = useContext(AppContext);
    if (waiting) {
        return <SetupForm />;
    }
    if (loading) {
        return <Loading />;
    }
    const { question, incorrect_answers, correct_answer } = questions[index];
    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    if (tempIndex === 3) {
        answers.push(correct_answer);
    } else {
        answers.push(answers[tempIndex]);
        answers[tempIndex] = correct_answer;
    }

    return (
        <main>
            <Modal />
            <section className='quiz'>
                <article className='container'>
                    <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
                    <div className='btn-container'>
                        {answers.map((answer, index) => {
                            return <button key={index} className='answer-btn' onClick={() => checkAnswer(correct_answer === answer)} dangerouslySetInnerHTML={{ __html: answer }}></button>;
                        })}
                    </div>
                </article>
                <button className='next-question' onClick={nextQuestion}>
                    next question
                </button>
            </section>
        </main>
    );
}

export default App;
