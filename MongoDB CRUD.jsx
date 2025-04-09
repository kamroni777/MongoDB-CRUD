

const { MongoClient } = require('mongodb');
const uri = "your_mongodb_connection_string";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db("contact");
        console.log("Connected to the database");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
db.createCollection("contactlist")


db.contactlist.insertMany([
    {Last_name: "Ben", First_name: "Moris", Email: "ben@gmail.com", age: 26},
    {Last_name: "Kefi", First_name: "Seif", Email: "kefi@gmail.com", age: 15},
    {Last_name: "Emilie", First_name: "brouge", Email: "emilie.b@gmail.com", age: 40},
    {Last_name: "Alex", First_name: "brown", age: 4},
    {Last_name: "Denzel", First_name: "Washington", age: 3}
])
db.contactlist.find().pretty()


db.contactlist.findOne({_id: ObjectId("507f1f77bcf86cd799439011")})
db.contactlist.find({age: {$gt: 18}}).pretty()


db.contactlist.find({
    age: {$gt: 18},
    $or: [
        {First_name: /ah/i},
        {Last_name: /ah/i}
    ]
}).pretty()

db.contactlist.updateOne(
    {Last_name: "Kefi", First_name: "Seif"},
    {$set: {First_name: "Anis"}}
)

db.contactlist.deleteMany({age: {$lt: 5}})


db.contactlist.find().pretty()