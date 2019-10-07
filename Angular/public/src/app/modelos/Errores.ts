export class Errores {
    private isError:boolean;
    private message:string;
    private time:number;
    constructor(message){
        this.isError=false;
        this.message=message;
        this.time=5000;
    }
    getError(){
        this.isError=true;
        setTimeout(()=>{
          this.isError=false;
        },this.time);
    }
}