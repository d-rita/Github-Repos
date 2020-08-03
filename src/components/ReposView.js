import React, { Component } from 'react';
import Card from './RepoCard';
import { countDays } from '../utils/countDays';

class ReposPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            repositories: [],
            page: 0
        }; 

        window.onscroll = () => {
            if(window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight){
                this.fetchRepositories();
            } 
        }
    }

    fetchRepositories() {
        fetch(`https://api.github.com/search/repositories?q=created:>2020-07-04&sort=stars&order=desc&page=${this.state.page+1}`)
        .then((resp) => resp.json())
        .then(data => {
            this.setState((state) => {
                return {
                    page: state.page + 1,
                    repositories: [...state.repositories, ...data.items]
                }
            })
        })
    }

    componentDidMount(){
        this.fetchRepositories();
    }

    render() {
        const cardItems = this.state.repositories.map((repo) => {
            let days = countDays(repo.created_at);
            return (
                <li key={repo.id}>
                    <Card
                        name={repo.name} 
                        description={repo.description}
                        owner={repo.owner.login} 
                        days={days}
                        date={repo.pushed_at} 
                        stars={repo.stargazers_count} 
                        issues={repo.open_issues} 
                        photoUrl={repo.owner.avatar_url}
                    />
                </li>
            )   
        });

        return(
            <ul>
                {cardItems}
            </ul> 
        )
    }
}

export default ReposPage;
