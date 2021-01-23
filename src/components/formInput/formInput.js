import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './formInput.scss'

export const FormInput = () => {

   const [userName, setUserName] = useState('');
   const history = useHistory();

    async function  handleSubmit (e){
        e.preventDefault();
        history.push(`/profile/${userName}`)
        window.scrollTo(0, 0);
    }

  return (
    <div>
       <form onSubmit={handleSubmit} className="form-gh">
            <input
                type="text"
                value={userName}
                onChange={event => setUserName(event.target.value)}
                placeholder={'type name'}
                required
            />
            <button>Add user</button>
       </form>
    </div>
  )
}
export default FormInput;
