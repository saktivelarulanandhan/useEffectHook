import React, { useEffect } from 'react';

export const UserInput = (props) => {

    useEffect( ()=> {
        return () => {
          console.log("React hook that works as componentDidUnMount method in UserInput.js");
        }
       
      });
    return (
        <div>
            <input type="text" name="Type" placeholder="Type Something" onChange={props.onuserTyped.bind(this)} />

        </div>
    );
}