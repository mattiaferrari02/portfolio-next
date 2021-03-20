import { connectToDatabase } from "../../utilities/mongodb";


export default async (req, res) => {

    const { db } = await connectToDatabase();

    const scuola = await db.collection("scuola").find().toArray();

    console.log(scuola);
    
    res.send("lol")
};