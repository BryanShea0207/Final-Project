const data = require("../data/users.json")

const isAdmin = true;

async function getAll() {
    return data
}

async function get(id) {
    return data.items.find((user) => user.id == id)
}

async function create(user) {
    
    const newUser = {
        id: data.items.length+1,
        ...user
    }
    data.items.push(newUser)
    return(newUser)
}

async function update(id, values) {
    const current = data.items.find((user) => user.id == id)
    const updatedItem = {
        ...current,
        ...values
    }
    data.items[id] = updatedItem
    return updatedItem
}

async function remove(id) {
    const user = data.items.find((user) => user.id == id)
    data.items.splice(
        data.items.indexOf(user), 1)
    return user
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}