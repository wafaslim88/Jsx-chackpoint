import React from 'react';
//create a functional component that returns my address
function Adress () {
     let  myAdress= "Adress";
     let text = "Independence Street Jemmel";
     
        return (
    <>
        <p>{myAdress +":"+ text }</p>

    </>
  );
}

export default Adress;
