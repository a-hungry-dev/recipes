import dbhelper from '../helpers/dbHelper'

const { get, add } = dbhelper

export default (req, res) => {
    get("recipes").then(rows => {
        res.json({ "recipes": rows })
    })
};