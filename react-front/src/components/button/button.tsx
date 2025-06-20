import "./button.css"

interface Props {
  id: string,
  label: string,
  onClick: () => void
}

export const Button = ({id, label, onClick}: Props) => {
  return(
  <button className= "button" id={id} onClick={onClick}>
    {label}
  </button>
  )
}