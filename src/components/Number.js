import React from "react"

const Number=(props)=>{

    return(
        <p id="slide-num">
        <a onClick={props.changeImg1} href="#">1</a> 
        <a onClick={props.changeImg2} href="#">2</a>
        <a onClick={props.changeImg3 } href="#">3</a>
      </p>
    )
}

export default Number