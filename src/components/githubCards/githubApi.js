import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './formApi.scss'

export const GithubApi = () => {

  //https://api.github.com/users/bennami/repos
  //https://api.github.com/users/bennami
   const [userName, setuserName] = useState('');
   const [data, setData] = useState([]);

    

  async function  handleSubmit (e){
        e.preventDefault();
        const resp = await
        axios.get(`https://api.github.com/users/${userName}`);
        setData(resp.data);
        
  };

console.log(data,userName);
 
  return (
    <div>
       <form onSubmit={handleSubmit} className="form-gh">
                <input
                    type="text"
                    value={userName}
                    onChange={event => setuserName(event.target.value)}
                    placeholder={'type name'}
                    required
                />
                <button>Add user</button>
            </form>
    </div>
  )
}
export default GithubApi;