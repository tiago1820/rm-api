import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

@Entity('characters')
export class Character extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: String;

    @Column()
    status: String;

    @Column()
    species: String;

    @Column()
    gender: String;

    @Column()
    image: String;

    @Column()
    url: String;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}