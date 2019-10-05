export class Errores {
    isError:boolean;
    message:string;
    constructor(message){
        this.isError=false;
        this.message=message;
    }
    getError(){
        this.isError=true;
        setTimeout(()=>{
          this.isError=false;
        },3000);
    }
}