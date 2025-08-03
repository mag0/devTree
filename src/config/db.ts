import mongoose from 'mongoose';
import colors from 'colors';

export const connectDB = async () => {
    try {
        const {connection}  = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`;
        console.log(colors.cyan.bold(`Conectado a la base de datos: ${url}`));
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message));
        process.exit(1); // Termina el proceso si hay un error de conexión
    }
}