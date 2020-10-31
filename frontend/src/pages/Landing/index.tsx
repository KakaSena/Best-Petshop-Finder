import React from 'react'; 

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import searchIcon from '../../assets/images/icons/search.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                
                <div className="logo-container">
                    <img src={logoImg} alt="PetShop Finder"/>
                    <h2>Sua plataforma de busca de petshops online</h2>
                </div>

                <div className="buttons-container">
                    <Link to="/SearchList" className = "search"> 
                        <img src={searchIcon} alt="Pesquisar Petshops"/>
                        Iniciar Pesquisa
                     </Link>
                </div>
            
            </div>
        </div>
    )
    
}

export default Landing;