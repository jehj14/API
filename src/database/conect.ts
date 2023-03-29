
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.set('strictQuery', false);
const uri: string = "mongodb+srv://jaelhdezj:juliojulio14@cluster0.60dzwqg.mongodb.net/test";

export async function connect_to_database() {
    try {
        await mongoose.connect(uri);
    } catch (error) {
        console.log(`Error al conectarse a la uri: ${uri}`);
        console.error(error);
    }
}
  
const db = mongoose.connection;
  
db.once('open', () => {
    console.log(`===    Conectado a Mongo Satisfactoriamente    ===`);
});
