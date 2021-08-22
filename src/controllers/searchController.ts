import { Request, Response } from 'express';

import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (request: Request, response: Response) => {
    let query: string = request.query.q as string;

    if(!query) {
        response.redirect('/');
        return;
    }

    let list = Pet.getFromName(query);

    response.render('pages/page', {
        menu: createMenuObject(''),        
        list, 
        query
    });

}