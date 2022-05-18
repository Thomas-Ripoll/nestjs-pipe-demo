import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { getManager } from "typeorm";

@Injectable()
export class EntityConverterPipe implements PipeTransform<any>{

    
    constructor(
       private type: string
    ){
    }
   
    async transform(value: any, metadata: ArgumentMetadata) {
        //throw new Error("Method not implemented.");
        return await getManager('app').getRepository(this.type).findOne(value);
    }

}