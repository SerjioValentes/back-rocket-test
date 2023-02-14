import client from '../amoClient'
import { Response } from 'express';
const dbService = require('./db-service')

// Можно вынести в отдельный файл types
interface NewResponseObject {
    responsibleuser?: string;
    namecompany?: string;
    status?: string;
    dateofcreation?: any;
    price?: string | number;
}

class UserService {
    async getFetchData(resFetchLeads: any, res: Response) {
        let newResponseArr: any = []
        await dbService.deleteDataFromTable()

        await Promise.all(
            resFetchLeads.map(async (item: any) => {
                let newResponseObject: NewResponseObject = {}

                // ===================== Получаем имя создавшего пользователя ========================
                const resFetchUsersById: any = await client.request.get(`/api/v4/users/${item.responsible_user_id}`)
                newResponseObject.responsibleuser = resFetchUsersById.data.name

                // ============ Статус по id ==========
                const fetchPipelinesId: any = await client.request.get(`/api/v4/leads/pipelines/${item.pipeline_id}/statuses/${item.status_id}`)
                newResponseObject.status = fetchPipelinesId.data.name

                newResponseObject.namecompany = item.name
                newResponseObject.price = `${item.price} P`
                newResponseObject.dateofcreation = new Date(item.created_at * 1000).toLocaleDateString('ru-RU')
                
                await dbService.saveFromAmoCrm(newResponseObject)
                newResponseArr.push(newResponseObject)

            })).then(() => {
                console.log('fin');
                
                return res.json(newResponseArr);
            })
    }
}

module.exports = new UserService()
