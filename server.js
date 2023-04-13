const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
    // when this endpoint is hit, we connect to mongoDB and grab a daily notice, sending it to the front end.
    const { MongoClient, ServerApiVersion } = require('mongodb');
    // password is currently hardcoded here, obvs back practice.
    const uri = "mongodb+srv://expressApp:tm8lIPIpDbxQr0qo@prototype.erwwywy.mongodb.net/?retryWrites=true&w=majority";
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        }
    });

    async function run() {
        try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            await client.db("admin").command({ ping: 1 });
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            const database = client.db("prototype");
            const dailyNotices = database.collection("dailyNotices");
            const notice = await dailyNotices.findOne();
            
            // this is where we actually send stuff back to the front end
            res.send({ express: `This React app is connected to Express backend, has called Mongo and got the daily notice:\n ${notice.message}` });
                    
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    run().catch(console.dir);
    // res.send({ express: `This React app is connected to Express backend, has called Mongo and got the daily notice ${notice}` });
});
