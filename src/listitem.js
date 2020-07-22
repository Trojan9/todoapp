import React from 'react'
import './listitem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Flipmove from 'react-flip-move';

function Listitems(props){
    const items= props.items;
    const listitems=items.map(item => {
        return <div className='list' key={item.key}>
            <p><input type="text" id={item.key} value={item.text} onChange={(e)=>{
                props.setupdate(e.target.value,item.key)
            }}></input>
            <span>
                <FontAwesomeIcon className='faicons' icon='trash' 
                onClick={()=>props.deleteitem(item.key)}></FontAwesomeIcon>
            </span>
            </p>
        </div>
    })
return(
    <div>
        <Flipmove duration={400} easing="ease-in-out">
             {listitems}
        </Flipmove>
    </div>
)
}
export default Listitems