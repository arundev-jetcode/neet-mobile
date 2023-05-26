
export interface ModalProps{
    showModal:boolean,
    modelData:HeaderMenuprops[],
    setShowModal:(open: boolean) => void
  }

  export interface HeaderMenuprops {
    id:number,
    img:HTMLImageElement,
    sub:string
}

export interface LoginProps {
  index?:number
  inputType: "text" | "password" | undefined | string ,
  placeholderName: string | undefined,
  componentName?:string,
  fieldType?:string,
  value?:string | undefined,
  label?:string[] | undefined,
  size?:number
}


export interface RadioButtonProps {
labelName:string,
options: {label: string ; value: string;}[]

}

export interface ButtonProps {

  width:string,
  height:string,
  textSize:number,
  color?:string,
  text:string,
  backgroundColor:string,
  textColor:string
}