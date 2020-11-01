import React, { Component, FormEvent, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg';


import './styles.css'
import api from '../../services/api';
import { Link } from 'react-router-dom';


function SearchForm(){

const [numSmallDogs, setSmallDog] = useState('');
const [numBigDogs, setBigDog] = useState('');
const [result, setResult] = useState([]);
    
    async function searchPetshop(e: FormEvent){
        e.preventDefault();
        
        const response = await api.get('search', {
            params: {
                numSmallDogs,
                numBigDogs
            }
        });
        setResult(response.data); 
    }

    return(
        <div id="page-search-list" className="container">
            <PageHeader 
                title = "Escolha o melhor petshop para você"
                description = "Insira os dados pedidos abaixo" 
            />  

        <main>
            <form onSubmit= {searchPetshop}>
                <fieldset>
                    <legend>Dados para o banho</legend>

                    <Input 
                        name="numSmallDogs" 
                        label="Número de cachorros pequenos" 
                        value = {numSmallDogs} 
                        onChange = {(e) => {setSmallDog(e.target.value)}}
                    />

                    <Input 
                        name="numBigDogs" 
                        label="Número de cachorros grandes" 
                        value ={numBigDogs}
                        onChange = {(e) => {setBigDog(e.target.value)}}
                    />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                        Preencha todos os dados
                    </p>
                    <Link to="/Results" className = "search"> 
                        
                        Iniciar Pesquisa
                     </Link>
                    <button type="submit">
                    Fazer Pesquisa
                    </button>
                </footer> 
            </form>
        </main>

        </div>
    )
}

export default SearchForm;