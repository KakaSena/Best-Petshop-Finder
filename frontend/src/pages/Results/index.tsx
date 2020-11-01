import React from 'react';

import './styles.css'
  interface CheapestPetShop{
    name: string,
    total: number,
    distance: number
}

interface ResultsProps {
    result?: CheapestPetShop;
  }

const Results: React.FC<ResultsProps> = ({result}) => {

    return(
        <main className="result">
            O Petshop <strong>{result?.name}</strong> é a sua melhor escolha com preço de banho total de <strong>R${result?.total} reais.</strong>
        </main>
    )
}

export default Results;