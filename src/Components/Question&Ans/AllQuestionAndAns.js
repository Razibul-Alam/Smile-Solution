import React from 'react';
import { Accordion } from 'react-bootstrap';
import QuestionAns from './QuestionAns';
const questionAndAns=[
    {
        id:1,question:'How can I keep safe my teeth?',
        ans:'You should brush your teeth tow Times in everyday. Sometimes you should take advice from your ndoctor.You should brush your teeth tow Times in everyday. Sometimes you should take advice from your ndoctor.'
    },
    {
        id:2,question:'Is teeth scalling is safe?',
        ans:'Yes it is safe. No problem it keeps your teeth clean'
    },
    {
        id:3,question:'Root cannal is safe??',
        ans:'Yes Safe'
    },
    {
        id:4,question:'How much time should brush?',
        ans:'You should brush your teeth tow Times in everyday. Sometimes you should take advice from your ndoctor'
    },
]

const AllQuestionAndAns = () => {
    return (
        <>
        <h2 className='text-center text-primary mb-5'>Ask Something</h2>
        <div className='container mb-3 shadow'>

            <Accordion defaultActiveKey="0" flush>
            {questionAndAns?.map(faq=><QuestionAns key={faq.id} faq={faq}/>)}
            </Accordion>
        </div>
        </>
    );
};

export default AllQuestionAndAns;