const data = require("../data/posts.json")
const { connect } = require("./supabase")

const TABLE_NAME = 'Posts'

const isAdmin = true;

async function getAll() {
    return data
}

async function get(id) {
    return data.find((post) => post.id == id)
}

async function create(post) {
    
    const newPost = {
        id: data.length+1,
        ...post
    }
    data.push(newPost)
    return(newPost)
}

async function update(id, values) {
    const current = data.find((post) => post.id == id)
    const updatedItem = {
        ...current,
        ...values
    }
    data[id-1] = updatedItem
    return updatedItem
}

async function remove(id) {
    const post = data.find((post) => post.id == id)
    data.splice(
        data.indexOf(post), 1)
    return post
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