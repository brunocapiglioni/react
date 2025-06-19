import "./button.css"

interface Props {
  id: string,
  label: string,
  parentMethod: () => void
}

export const Button = ({id, label, parentMethod}: Props) => {
  return(
  <button className= "button" id={id} onClick={parentMethod}>
    {label}
  </button>
  )
}