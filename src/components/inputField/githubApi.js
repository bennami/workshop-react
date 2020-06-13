import React, {useState} from 'react';
import {  useHistory  } from "react-router-dom";
import './formApi.scss'

export const GithubApi = () => {

  //https://api.github.com/users/bennami/repos
  //https://api.github.com/users/bennami
   const [userName, setUserName] = useState('');
   const history = useHistory();


  async function  handleSubmit (e){
        e.preventDefault();
        history.push(`/profile/${userName}`);
  };



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
export default GithubApi;
