import dbhelper from '../helpers/dbHelper'

const { get } = dbhelper

export default (req, res) => {
    get("recipes").then(rows => {
        res.json({ "recipes": rows })
    })
};