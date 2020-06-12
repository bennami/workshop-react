import React, {useEffect, useState} from 'react';
import { useHistory,useParams, } from "react-router-dom";
import axios from 'axios';
import Card from "../../components/cards/cards";
import './profile.scss';
import Footer from "../../components/footer/footer";


function Profile() {

    const {slug} = useParams();
    const [profile, setProfile] = useState([]);
    const [repositories, setRepositories] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        async function getData(){
            const resp = await
                axios.get(`https://api.github.com/users/${slug}`);
            setProfile(resp.data);
            const repos = await
                axios.get(`https://api.github.com/users/${slug}/repos`);
            setRepositories(repos.data);
            history.push(`/profile/${slug}`);
        }
        getData();
    },[slug]);

    console.log(repositories);

    return(


        <>
        <section className={'listOfCards'}>
            <h1>this is your profile</h1>

            <h1>{slug}</h1>
            <div  className={'list'}>
                <div className={'cards'}>
                {
                    repositories.map((project, i) =>{
                        return <Card
                            key={i}
                            img={``}
                            projectName={project.name}
                            projectDescription={'Add project description'}
                            projectLink={project.homepage}
                            GithubLink={project.html_url}
                        />
                    })
                }
                </div>
            </div>

        </section>
            <Footer/>
        </>


    );

}

export default Profile;
