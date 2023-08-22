import React, { useState } from 'react'
import { LuDelete } from 'react-icons/lu';
import './style.css'

const Calculator = () => {

    const [result, setResult] = useState("");
    const [toogle, setToogle] = useState(false);
    const formatter = new Intl.NumberFormat();

    const handleClick = (e) => {
        if (toogle) {
            setToogle(false)
            clear();
        }
        {
            !toogle &&
            setResult(result.concat(e.target.value))
        }
    }


    const clear = () => {
        setResult("")
        return;
    }


    const backSpace = () => {
        setResult(result.slice(0, - 1));
    }


    const calculator = () => {
        try {
            setResult(eval(result).toString());
            setToogle(true);
        }
        catch (error) {
            setResult("Error")
        }
    }

    return (
        <div style={{ backgroundColor: 'rgb(0,51,102)', minHeight: '100vh', width: '100%' }} className='text-white'>
            <form className="screen d-flex align-items-center" style={{ height: '35vh', width: '100%' }}>
                <input className='fw-bold me-2 form-control text-white text-end' style={{ fontSize: '50px', letterSpacing: '1px', background: 'none', border: 'none', boxShadow: 'none' }} value={result} />
            </form>
            <div dir='rtl' className="buttons mt-3 text-start">
                <div className="row_1">
                    <button value="*" onClick={handleClick} className='text-white btn btn-secondary style-button fs-1'>&times;</button>
                    <button value="9" onClick={handleClick} className='text-white btn btn-success style-button'>9</button>
                    <button value="8" onClick={handleClick} className='text-white btn btn-success style-button'>8</button>
                    <button value="7" onClick={handleClick} className='text-white btn btn-success style-button'>7</button>
                </div>
                <div className="row_2">
                    <button value="-" onClick={handleClick} className='text-white btn btn-secondary style-button fs-1'>&ndash;</button>
                    <button value="6" onClick={handleClick} className='text-white btn btn-success style-button'>6</button>
                    <button value="5" onClick={handleClick} className='text-white btn btn-success style-button'>5</button>
                    <button value="4" onClick={handleClick} className='text-white btn btn-success style-button'>4</button>
                </div>
                <div className="row_3">
                    <button value="+" onClick={handleClick} className='text-white btn btn-secondary style-button fs-1'>+</button>
                    <button value="3" onClick={handleClick} className='text-white btn btn-success style-button'>3</button>
                    <button value="2" onClick={handleClick} className='text-white btn btn-success style-button'>2</button>
                    <button value="1" onClick={handleClick} className='text-white btn btn-success style-button'>1</button>
                </div>
                <div className="row_4">
                    <button onClick={calculator} className='text-white btn btn-secondary style-button fs-1'>=</button>
                    <button value="/" onClick={handleClick} className='text-white btn btn-secondary style-button fs-1'>&divide;</button>
                    <button onClick={clear} className='text-white btn btn-secondary style-button'>C</button>
                    <button value="0" onClick={handleClick} className='text-white btn btn-success style-button'>0</button>
                </div>
                <div className="row_5">
                    <button onClick={backSpace} className='btn btn-secondary' style={{ height: '90px', width: '80.3%', margin: '1px', fontWeight: 'bold', fontSize: 'larger' }}><LuDelete className='text-white fs-2' /></button>
                </div>
            </div>
        </div>
    )
}

export default Calculator