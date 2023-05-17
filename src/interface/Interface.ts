
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