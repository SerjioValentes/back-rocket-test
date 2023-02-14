import { Request, Response } from 'express';
import client from '../amoClient'
const userService = require('../service/user-service')
const dbService = require('../service/db-service')

class UserController {
    async getUsers(req: Request, res: Response, next: any) {
        try {
            const { query } = req.query
            let resFetchLeads: any = []

            if (query !== undefined) {
                
                const newQuery = await dbService.getAllClients(query)
                return res.json(newQuery.rows)

                // resFetchLeads = await client.request.get(`/api/v4/leads?query=${query}`)
                // userService.getFetchData(resFetchLeads?.data?._embedded?.leads, res)
            }

            // Все лиды 
            resFetchLeads = await client.request.get('/api/v4/leads')
            userService.getFetchData(resFetchLeads?.data?._embedded?.leads, res)

        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController()