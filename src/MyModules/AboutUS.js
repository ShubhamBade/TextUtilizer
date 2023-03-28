import React,{useState}from 'react'

export default function AboutUS() {
    const [myStyle, setMyStyle] = useState({
        color:"black",
        backgroundColor:"white"
    });

    const [btn, setBtn] = useState("Enable Dark Mode");

    const themeChange=()=>{
        if(myStyle.color === "black"){
            setMyStyle({
                color:"white",
                backgroundColor:"black",
                border:"1px solid white"
            })
            
            setBtn("Enable Light Mode");
        }
        else{
            setMyStyle({
                color:"black",
                backgroundColor:"white"
            })
            setBtn("Enable Dark Mode");
        }
    }

    return (
        <>
            <div className='container my-2' style={myStyle}>
                <h1 className='my-2'>About US</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                #1 ConvertToUpper & ConvertToLower
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>TextUtils Functionality : ConvertToUpper & ConvertToLower .</strong><br/>
                                ConvertToUpper : This Option helps user to coonvert whole context into Upper toLowerCase
                                <br/>ConvertToLower : This Option helps user to convert given text to lower case
                                </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                #2 Remove All Extra Spaces
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>TextUtil Functionality : Remove Extra Spaces</strong><br/>
                                RemoveExtra - This Option helps user to fromat their context by removing extra ordinary spaces
                                </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                #3 Clear
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>TextUtils Functionality : Clear</strong><br/>
                                Clear - Provides functionality of removing context of textbox those already present
                                </div>
                        </div>
                    </div>
                </div>
                <button type="button" onClick={themeChange} class="btn btn-primary my-2">{btn}</button>
            </div>
        </>
    )
}
