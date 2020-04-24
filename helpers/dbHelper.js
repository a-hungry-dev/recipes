import fs from 'fs'

export default {
    get: (table) => {
        return new Promise(async (resolve, reject) => {
            const db = await getDbJson();
            resolve(db[table].rows)
        })
    },
    add: (table, object) => {
        return new Promise(async (resolve, reject) => {
            const db = await getDbJson();
            object.id = db[table].auto_increment
            db[table].rows.push(object)
            db[table].auto_increment++
            await writeDbJson(db)
            resolve(object)
        })
    },
    update: (table, object) => {
        return new Promise(async (resolve, reject) => {
            const db = await getDbJson();
            for (let row in db[table].rows) {
                if (db[table].rows[row].id === object.id) {
                    db[table].rows[row] = object
                }
            }
            await writeDbJson(db)
            resolve(object)
        })
    },
    delete: (table, object) => {
        return new Promise(async (resolve, reject) => {
            const db = await getDbJson();
            for (let row in db[table].rows) {
                if (db[table].rows[row].id === object.id) {
                    db[table].rows.splice(row, 1)
                }
            }
            await writeDbJson(db)
            resolve(object)
        })
    }
}

const getDbJson = () => {
    return new Promise(async (resolve, reject) => {
        fs.readFile('./database/db.json', function (err, data) {
            if (err) throw (err);
            resolve(JSON.parse(data))
        });
    })
}

const writeDbJson = (json) => {
    return new Promise(async (resolve, reject) => {
        await fs.writeFileSync('./database/db.json', JSON.stringify(json, null, 2));
        resolve()
    })
}