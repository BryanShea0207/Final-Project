const data = require("../data/users.json")

const isAdmin = true;

async function getAll() {
    return data
}

async function get(id) {
    return data.users.find((user) => user.userId == id)
}

async function create(user) {
    console.log(user)
    const newUser = {
        userId: data.users.length+1,
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
    return data.users.splice(id,1)
}

module.exports = {
    getAll,
    get,
    create,
    update,
    remove
}