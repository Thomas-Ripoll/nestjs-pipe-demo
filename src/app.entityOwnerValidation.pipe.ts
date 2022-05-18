import { ArgumentMetadata, HttpException, HttpStatus, Inject, Injectable, PipeTransform, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import EntityOwnerInterface, { instanceOfEntityOwnerInterface } from "src/EntityOwnerInterface";
import RequestWithUserInterface from "src/requestWithUser";

@Injectable({ scope: Scope.REQUEST })
export class EntityOwnerValidationPipe implements PipeTransform<any>{

    
    constructor(@Inject(REQUEST) private request: RequestWithUserInterface) {}
   
    async transform(value: EntityOwnerInterface, metadata: ArgumentMetadata) {

        console.log(this.request)

        if(!instanceOfEntityOwnerInterface(value)){
            throw new Error(`Object ${JSON.stringify(value)} must implement EntityOwnerInterface`)
        }
        if(value.getUserId() !== this.request.user.id){
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
        return value;
    }
    

}