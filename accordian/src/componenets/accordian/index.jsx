import { useState } from 'react';
import data from './data.js'
import './styles.css'

function Accordian(){
    const [selected,setSelectd] = useState(null);
    const [multipleSelection,setMultipleSelection] = useState(false);
    const [multiple,setMultiple] = useState([]);

    function enableMultipleSelection(){
        setMultipleSelection(multipleSelection?false:true);
        setMultiple([]);
    }
    
    function singleSelected(id){
        if(multipleSelection){
            if(multiple.includes(id)){
                setMultiple(multiple.filter((e,_)=> e !== id ));
            }
            else{
                setMultiple([...multiple,id]);

            }
            console.log(multiple);
        }
        else{
            setSelectd(id === selected? null:id);
        }
    }
    return (
        <div className="wrapper">
            <button onClick={enableMultipleSelection}>
                Enable multiple selection
            </button>
            <div className="accordian">
                {
                    data && data.length > 0 ? (
                        data.map((element,index)=>(
                            <div className="items" key={index}>
                                <div className="title" onClick={() => singleSelected(element.id)}>
                                    <h3>{element.question}</h3>
                                    <span>+</span>
                                </div>
                                {
                                    multipleSelection?
                                    (<div className='content'>{multiple.includes(element.id)?<span>{element.answer}</span>:null}</div>):
                                    (<div className='content'>
                                        {(selected === element.id ? (<div>
                                            <span>{element.answer}</span>
                                        </div>):null)}
                                    </div>)
                                }
                            </div>
                        ))
                    ):(<div className="no-data">No data Found</div>)
                }
            </div>
        </div>
    );
}

export default Accordian;