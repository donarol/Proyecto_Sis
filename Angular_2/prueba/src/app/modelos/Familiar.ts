import { User } from './User';

export class Familiar extends User{
    parentesco:String;
    constructor(){
        super();
        this.parentesco='';
    }
}