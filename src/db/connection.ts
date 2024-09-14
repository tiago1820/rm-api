import { DataSource } from 'typeorm';
import { Character } from '../models/characterModel';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "tiago",
    password: "debian2024",
    database: "dungeon",
    logging: true,
    entities: [Character],
    synchronize: false,
});