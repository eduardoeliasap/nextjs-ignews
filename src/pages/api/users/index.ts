/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'

export default (_request: NextApiRequest, response: NextApiResponse) => {
    const user = [
        {id: 1, name: 'Eduardo'},
        {id: 2, name: 'Mellina'},
        {id: 3, name: 'Manu'}
    ]

    return response.json(user);
}