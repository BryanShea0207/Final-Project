const data = require("../data/users.json")

const isAdmin = true;

async function getAll() {
    return data
}

async function get(id) {
    return data.users.find((user) => user.userId == id)
}

async function create(user) {
    
    const newUser = {
        id: data.users.length+1,
        ...user
    }
    data.users.push(newUser)
    return(newUser)
}

async function update(id, values) {
    const current = data.users.find((user) => user.userId == id)
    const updatedItem = {
        ...current,
        ...values
    }
    data.users[id] = updatedItem
    return updatedItem
}

async function remove(id) {
    const user = data.users.find((user) => user.userId == id)
    data.users.splice(
        data.users.indexOf(user), 1)
    return user
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}