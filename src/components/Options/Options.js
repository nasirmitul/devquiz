import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Options = ({ option, correctAnswer }) => {
    const [selected, setSelected] = useState('');

    useEffect(() => {
        if (option) {
            setSelected(uuidv4());
        }
    }, [option])


    const checkCorrect = (event) => {
        if (event === correctAnswer) {
            toast.success('Correct Answer', {
                toastId: 'success1',
            })
        }
        else {
            toast.error('Wrong Answer', {
                toastId: 'wrong1',
            })
        }
    }

    return (
        <div>
            <div className='options'>

                <input type="radio" name="select" id={selected} value={option} onClick={event => checkCorrect(event.target.value)} />
                <label htmlFor={selected}>{option}</label>
            </div>
            <ToastContainer
                autoClose={1000}
                position="top-center" />
        </div>

    );
};

export default Options;