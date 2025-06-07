import "./button.css"

interface Props {
  label: string,
  parentMethod: () => void
}

export const Button = ({label, parentMethod}: Props) => {
  return(
  <button className="custom-botton" onClick={parentMethod}>
    {label}
  </button>
  )
}