const db = require('../db')

interface NewResponseObject {
    responsibleuser: string;
    namecompany: string;
    status: string;
    dateofcreation: any;
    price: string;
}

class DBService {

    async getAllClients(query: any) {
        const dbQuery = await db.query(`SELECT responsibleUser, nameCompany, status, dateOfCreation, price FROM leads WHERE nameCompany LIKE '${query}%'`)

        console.log(dbQuery.rows);
        
        return dbQuery;
    }


    async deleteDataFromTable() {
        await db.query('TRUNCATE TABLE  leads')
    }

    async saveFromAmoCrm(newResponseObject: NewResponseObject) {
        // console.log(newResponseObject);
        
        await db.query('INSERT INTO leads (responsibleUser, nameCompany, status, dateOfCreation, price) VALUES ($1, $2, $3, $4, $5) RETURNING *', [newResponseObject.responsibleuser, newResponseObject.namecompany, newResponseObject.status, newResponseObject.dateofcreation, newResponseObject.price])
        
    }

}

module.exports = new DBService()
