import EntityOwnerInterface from "src/EntityOwnerInterface";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post implements EntityOwnerInterface{
    @PrimaryGeneratedColumn("uuid")
    id: number;

    getUserId() {
        return "uuid"
    }
}
