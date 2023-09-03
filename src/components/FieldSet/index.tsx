import './fieldset.css'

export interface FieldsetProps {
  name?: string;
  description?: string;
  children?: React.ReactNode
}

function Fieldset({ name, description, children }: FieldsetProps) {
  return (
    <fieldset className="msf-fieldset">
      {name && <p className="msf-legend">{name}</p>}
      {description && <p className="fieldset-description">{description}</p>}
      {children}
    </fieldset>
  )
}

export default Fieldset