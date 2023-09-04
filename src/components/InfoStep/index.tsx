import { InfoFieldName } from '../../types';
import Fieldset from '../FieldSet';
import { useMultiStepFormContext } from '../MultiStepForm/context/useMultiStepFormContext';
import './infoStep.css'

function InfoStep() {
  return (
    <Fieldset
      name="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <div className="info-content-wrapper">
        <InfoInput
          label="Name"
          name={InfoFieldName.name}
          type="text"
          placeholder="e.g. Stephen King"
        />
        <InfoInput
          label="Email Address"
          name={InfoFieldName.email}
          type="email"
          placeholder="e.g. Stephen King"

        />
        <InfoInput
          label="Phone Number"
          name={InfoFieldName.phoneNumber}
          type="tel"
          placeholder="e.g. +1 234 567 890"
        />
      </div >

    </Fieldset>


  )
}

export default InfoStep


export interface InputProps {
  name: InfoFieldName;
  type: string;
  label: string;
  placeholder: string;
}

function InfoInput({ name, type, label, placeholder }: InputProps) {
  const { handleInputChange, errors, isInfoSubmitted, formData } = useMultiStepFormContext()
  const hasError = isInfoSubmitted && errors[name]
  return (
    <label className="label form-group">{label}
      {hasError && <span className="error" data-device="desktop">{errors[name]}</span>}
      <input
        className={`info-input ${hasError ? 'error' : ''}`}
        type={type}
        name={name}
        value={formData[name]}
        placeholder={placeholder}
        onChange={handleInputChange}
      />
      {hasError && <span className="error" data-device="mobile">{errors[name]}</span>}
    </label>
  )
}
