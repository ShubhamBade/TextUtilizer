import React,{useState} from 'react'

export default function TextForm() {
    const [text, setText] = useState("Enter Your Text Here");

    const performLower=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const performUpper=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }

    const performClear=()=>{
        setText("");
    }

    const performSpaceR=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }


    const onChangeHandle=(event)=>{
        console.log("onChange has been called");
        setText(event.target.value);
    }
    return (
        <><div>
            <h3 className='container my-2'>Enter text to analyse below</h3>
            <div className="container">
                <textarea className="form-control" value={text} onChange={onChangeHandle} rows="5"></textarea>
                <button type="button" className="btn btn-primary my-2" onClick={performUpper}>ConvertToUpper</button>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={performLower}>ConvertToLower</button>
                <button type="button" className="btn btn-primary my-2" onClick={performClear}>Clear Text</button>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={performSpaceR}>Remove Extra Space</button>
            </div>
            <div className='container my-2'>
                <h3>Your Text Summary</h3>
                <p> {text.split(" ").length} Words and {text.length} Character</p>
                <p>{0.00420168*text.split(" ").length} Minutes : You need to read below preview</p>
            </div>
            <div className='container my-2'>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
            </div>
        </>
    )
}
