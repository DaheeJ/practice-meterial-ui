import React from 'react';
import pic from '../img/pattern.png'


   
const Home = () => {
    let myStyle = {
        width:"100%",
        height:"auto"
    }
    return(
    <div>
            <h2>Hello this is my website.</h2>
            <img style={myStyle} src={pic} alt="background" />
            
    </div>
    )
};

export default Home;