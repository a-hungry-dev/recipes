import fs from 'fs'

export default {
    get: (key) => {
        return new Promise((resolve, reject) => {
            fs.readFile('./database/db.json', function (err, data) {
                if (err) reject(err);
                resolve(JSON.parse(data)[key].rows)
            });
        })
    }
}