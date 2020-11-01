import { Request, Response } from 'express'

let petshops: Petshop[] = require('../data/petshop');
interface CheapestPetShop{
    name: string,
    total: number,
    distance: number
}

interface Petshop{
    name:string,
    weekday: {big:number, small:number},
    weekend: {big:number, small:number},
    distance: number
}

export default class SearchController {

    search(request: Request, response: Response) {

        const smallDogs  =  parseInt(request.query.numSmallDogs as string);
        const bigDogs = parseInt(request.query.numBigDogs as string);
        const day = new Date(request.query.date as string);

        const cheapestpetshop = SearchController.bestpetshop(smallDogs,bigDogs,day)
        console.log("o mais barato eh",cheapestpetshop);
        return response.send(cheapestpetshop);

    }

    static bestpetshop(smallDogs: number, bigDogs: number, day: Date):CheapestPetShop {

        let cheapestPetshopAndTotal: CheapestPetShop = null;

        for (const petshop of petshops) {

            const dayValues = (day.getDay() === 0 || day.getDay() === 6 ? petshop.weekend : petshop.weekday)
            const total = (dayValues.big * bigDogs + dayValues.small * smallDogs);
            console.log("valores do dia ---->", dayValues)
            console.log("total a pagar ---->", total)
            console.log("dia pego ---->",day)

            if (cheapestPetshopAndTotal === null || total < cheapestPetshopAndTotal.total || (total === cheapestPetshopAndTotal.total && petshop.distance < cheapestPetshopAndTotal.distance)){
                cheapestPetshopAndTotal = {
                    name: petshop.name,
                    total: total,
                    distance: petshop.distance
                }
            }
        }
        return cheapestPetshopAndTotal;
    }
}