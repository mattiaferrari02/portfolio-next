import { connectToDatabase } from "../../utilities/mongodb";


export default async (req, res) => {

    const { db } = await connectToDatabase();

    const scuola = await db.collection("scuola").find().toArray();
    const a = JSON.parse(JSON.stringify(scuola));

    res.json(a)
};


export async function getData() {
    const { db } = await connectToDatabase();

    const scuola = await db.collection("scuola").find().toArray();
    const a = JSON.parse(JSON.stringify(scuola));
    return a;
}
