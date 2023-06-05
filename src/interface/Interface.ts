

export interface ModalProps{
    showModal:boolean,
    modelData?:PopupModal[],
    setShowModal:(open: boolean) => void,
    report?: {label: string ; value: string;}[]

  }

  export interface PopupModal {
    id?:number,
    img?:any ,
    sub?:string,
    report?:string,
    value?:string,
    label?:string

}

export interface LoginProps {
  index?:number
  inputType: "text" | "password" | undefined | string ,
  placeholderName: string | undefined,
  componentName?:string,
  fieldType?:string,
  value?:string |undefined,
  label?:string[] | undefined,
  size?:number
}


export interface RadioButtonProps {
labelName?:string,
options?: {label: string ; value: string;} [] 
report?: {label: string ; value: string;}[]

}

export interface ButtonProps {
  width:string,
  height:string,
  textSize:number,
  color?:string,
  text:string,
  backgroundColor:string,
  textColor:string,
  callback?: () => void;
}