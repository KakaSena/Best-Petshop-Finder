import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input'

import warningIcon from '../../assets/images/icons/warning.svg';

import Calendar from 'react-calendar';

import './styles.css'
import 'react-calendar/dist/Calendar.css';


function SearchList(){

    const [value, onChange] = useState(new Date());

    return(
        <div id="page-search-list" className="container">
            <PageHeader 
                title = "Escolha o melhor petshop para você"
                description = "Insira os dados pedidos abaixo" 
            />  

        <main>
            <fieldset>
                <legend>Dados para o banho</legend>

                <div>
                  
                </div>

                <Input name="numSmallDogs" label="Número de cachorros pequenos"/>
                <Input name="numBigDogs" label="Número de cachorros grandes"/>
            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                    Preencha todos os dados
                </p>

            <button type="submit">
              Fazer Pesquisa
            </button>
            </footer> 
        </main>

        </div>
    )
}

export default SearchList;