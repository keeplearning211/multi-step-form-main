import Fieldset from '../FieldSet';
import './infoStep.css'

function InfoStep() {
  return (
    <Fieldset
      name="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <div className='info-content-wrapper'>
        <InfoInput
          label='Name'
          name='name'
          type='text'
          placeholder='e.g. Stephen King'
        />
        <InfoInput
          label='Email Address'
          name='email'
          type='email'
          placeholder='e.g. Stephen King'
        />
        <InfoInput
          label='Phone Number'
          name='phoneNumber'
          type='tel'
          placeholder='e.g. +1 234 567 890'
        />
      </div >

    </Fieldset>


  )
}

export default InfoStep


export interface InputProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

function InfoInput({ name, type, label, placeholder }: InputProps) {
  return (
    <label className='label form-group'>{label}
      <input
        className='info-input'
        type={type}
        name={name}
        placeholder={placeholder} />
    </label>
  )
}
