const { MongoClient, ServerApiVersion } = require("mongodb");
const dboper = require('./operations');

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://0.0.0.0:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
}
);
const db = client.db('conFusion');

async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

        dboper.insertDocument(db, { name: "Vadonut", description: "Test" }, "dishes", (result) => { console.log(result); })
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);