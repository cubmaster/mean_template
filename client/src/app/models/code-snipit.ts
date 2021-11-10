import {IBase} from "./Base";

export class CodeSnipit implements IBase{


  constructor(public id='',
              public name:string= '',
              public code:string= '',
              public inputs:any[] =[],
              public outputs:any[] =[]
  ) {}



  get classname(){
    return "codesnipit";
  }
  get _id() {
    return this.id;
  }

}
export class NameValue {
  name: string;
  value: string;

}
