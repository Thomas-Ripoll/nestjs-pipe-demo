import { REQUEST } from "@nestjs/core";

export default interface RequestWithUserInterface extends Request{
    user: {
        id: string
    }
}