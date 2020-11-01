import React, { Component, FormEvent, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Results from '../Results';

import warningIcon from '../../assets/images/icons/warning.svg';


import './styles.css'
import api from '../../services/api';
import { Link } from 'react-router-dom';

function SearchForm() {

    const [numSmallDogs, setSmallDog] = useState('');
    const [numBigDogs, setBigDog] = useState('');
    const [date, setDate] = useState('');
    const [result, setResult] = useState(undefined);

    async function searchPetshop(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('search', {
            params: {
                numSmallDogs,
                numBigDogs,
                date
            }
        });
        setResult(response.data);
    }
    const isEnabled = numSmallDogs.length > 0 && numBigDogs.length > 0;
    return (
        <div id="page-search-list" className="container">
            <PageHeader
                title="Escolha o melhor petshop para você"
                description="Insira os dados abaixo"
            />

            <main>
                <form onSubmit={searchPetshop}>
                    <fieldset>
                        <legend>Dados para o banho</legend>

                        <Input
                            name="Data"
                            label="Escolha a data do banho"
                            type="date"
                            value={date}
                            onChange={(e) => { setDate(e.target.value) }}
                        />

                        <Input
                            name="numSmallDogs"
                            label="Número de cachorros pequenos"
                            type="number"
                            min={0}
                            value={numSmallDogs}
                            onChange={(e) => { setSmallDog(e.target.value) }}
                        />

                        <Input
                            name="numBigDogs"
                            label="Número de cachorros grandes"
                            type="number"
                            min={0}
                            value={numBigDogs}
                            onChange={(e) => { setBigDog(e.target.value) }}
                        />

                    </fieldset>

                    <section>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                        Preencha todos os dados
                    </p>

                        <button disabled ={!isEnabled}>
                            Resultado
                       </button>
        
                    </section>
                </form>

                {result ? <Results result={result} /> : <></>}
                
            </main>

        </div>
    )
}

export default SearchForm;