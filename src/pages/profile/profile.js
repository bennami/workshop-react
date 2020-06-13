import React, {useEffect, useState} from 'react';
import { useHistory,useParams, } from "react-router-dom";
import axios from 'axios';
import Card from "../../components/cards/cards";
import './profile.scss';
import Footer from "../../components/footer/footer";
import SplashScreen from "../../components/splashScreen/splashScreen";


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


    let color;
    function randomColor() {
            //generate random color
            let r, g, b;
            //change bg color
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            return  color = `rgb(${r},${g},${b})`;
    };
    randomColor();
    console.log(color)

    return(


        <>

        <section className={'listOfCards'}>
            <SplashScreen name={slug}/>
            <div  className={'list'}>
                <div className={'cards'}>
                {
                    repositories.map((project, i) =>{
                        randomColor();
                        return <Card
                            key={i}
                            img={``}
                            projectName={project.name}
                            projectDescription={'Add project description'}
                            projectLink={project.homepage}
                            GithubLink={project.html_url}
                            bgColor={color}
                        />
                    })
                }
                <Card
                    img={``}
                    projectName={'prject title'}
                    projectDescription={'Add project description'}
                    projectLink={'website link'}
                    GithubLink={'github link'}
                    bgColor={randomColor()}

                />
                    <Card
                        img={``}
                        projectName={'prject title'}
                        projectDescription={'Add project description'}
                        projectLink={'website link'}
                        GithubLink={'github link'}
                        bgColor={randomColor()}

                    />
                    <Card
                        img={``}
                        projectName={'prject title'}
                        projectDescription={'Add project description'}
                        projectLink={'website link'}
                        GithubLink={'github link'}
                        bgColor={randomColor()}

                    />
                    <Card
                        img={``}
                        projectName={'prject title'}
                        projectDescription={'Add project description'}
                        projectLink={'website link'}
                        GithubLink={'github link'}
                        bgColor={randomColor()}

                    />


                </div>
            </div>

        </section>
            <Footer/>
        </>


    );

}

export default Profile;
