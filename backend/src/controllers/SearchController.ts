import {Request, Response} from 'express'


export default class SearchController{

   search(request: Request, response: Response){
        
    let numSmallDogs = request.query.numSmallDogs;
    let numBigDogs = request.query.numBigDogs;
    let date = request.query.date;



        return response.send('helloooo'); 
    }

    bestpetShop(){
        
    };

}