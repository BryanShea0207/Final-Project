const data = require("../data/summaries.json")
const { connect } = require('./supabase')
const isAdmin = true;
const TABLE_NAME = 'Summaries'

async function getAll() {
    return data
}

async function get(id) {
    return data.find((summary) => summary.id == id)
}

async function create(summary) {
    
    const newSummary = {
        id: data.length+1,
        ...summary
    }
    data.push(newSummary)
    return(newSummary)
}

async function update(id, values) {
    const current = data.find((summary) => summary.id == id)
    const updatedItem = {
        ...current,
        ...values
    }
    data[id-1] = updatedItem
    return updatedItem
}

async function remove(id) {
    const summary = data.find((summary) => summary.id == id)
    data.splice(
        data.indexOf(summary), 1)
    return summary
}

async function seed() {
    for(const item of data){

        const { data: newItem, error} = await connect().from(TABLE_NAME).insert(item).select('*')
        if(error){
            throw error
        }
    }
    return {message: "items seeded in DB"}
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove,
    seed
}