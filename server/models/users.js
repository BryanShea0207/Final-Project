const data = require("../data/users.json")
const { connect } = require('./supabase')

const TABLE_NAME = 'Users'

const BaseQuery = () => connect().from(TABLE_NAME)
                    .select('*')

const isAdmin = true;

async function getAll(limit = 30, offset = 0, sort = 'user_id', order = 'asc') {
    const list = await BaseQuery()
    .order(sort , {ascending: order === 'asc'})
    .range(offset, offset + limit - 1)
    if(list.error){
        throw list.error
    }
    return {
        items: list.data,
        total: list.count
    }
}

async function get(id) {
    const { data: item, error} = await connect().from(TABLE_NAME)
        .select('*').eq("user_id", id)
    if(error){
        throw error
    }
    return item[0]
}

async function search(query, limit = 30, offset = 0, sort = 'id', order = 'asc'){
    const { data: items, error, count } = await BaseQuery()
    .or(`first_Name.ilike.%${query}%,last_Name.ilike.%${query}%,email.ilike.%${query}%,phone.ilike.%${query}%`)
    .order(sort, { ascending: order === 'asc' })
    .range(offset, offset + limit -1)
    if (error) {
        throw error
    }
    return {
        items,
        total: count
    }
} 

async function create(user) {

    const { data: item, error} = await connect().from(TABLE_NAME).insert(user).select('*')
    if(error){
        throw error
    }
    return item
}

async function update(id, values) {
    const {data: item, error} = await connect().from(TABLE_NAME).update(values).eq('user_id', id).select('*')
    if (error){
        throw error
    }

    return item
}

async function remove(id) {
    const {data: item, error} = await connect().from(TABLE_NAME).delete().eq('user_id', id).select('*')
    if(error){
        throw error
    }
    return item
}

async function seed() {
    for( const item of data.items){

        const mapped = mapToDB(item)
        
        const { data: newItem, error} = await connect().from(TABLE_NAME).insert(mapped).select('*')
        if(error){
            throw error
        }
    }

    return {message: "items sent to DB"}
}

function mapToDB(item){
    return {
        user_id: item.id,
        first_Name: item.firstName,
        last_Name: item.lastName,
        age: item.age,
        gender: item.gender,
        email: item.email,
        phone: item.phone,
        birth_Date: item.birthDate,
        friends_Ids: []
    }
}

module.exports = {
    getAll,
    get,
    search,
    create,
    update,
    remove,
    seed
}