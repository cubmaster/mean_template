import {IBase} from "./Base";


export class Notebook implements IBase {


  constructor(public  id ='',
              public name:string= '',
              public nodes:any[] =[]
  ) { }

  get classname(){
    return "notebook";
  }
  get _id() {
    return this.id;
  }




}
