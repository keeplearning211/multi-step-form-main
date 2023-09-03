import { useState, useEffect } from 'react'
import AddOnStep from '../AddOnStep'
import InfoStep from '../InfoStep'
import PlanStep from '../PlanStep'
import Sidebar from '../Sidebar'
import FishingUpStep from '../FishingUpStep'
import './multiStepForm.css'
import RegistrationThanks from '../RegistrationThanks'
import { AddOnOptionValue, ValidationErrors, InfoFieldName, Step, BillingOptionValue, FormData } from '../../types'
import { MultiStepFormContext } from './context/useMultiStepFormContext'


const isEmpty = (value: string): boolean => {
  return value ? false : true
}

const infoStepError: Record<InfoFieldName, (value: string) => string> = {
  name: function (value: string) {
    if (isEmpty(value)) return 'This field is required.'

    return value.length < 3 ? 'Name must be at least 3 characters long' : '';
  },

  email: (value: string) => {
    if (isEmpty(value)) return 'This field is required.'

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !regex.test(value) ? 'Invalid email address' : '';
  },
  phoneNumber: (value: string) => {
    return isEmpty(value) ? 'This field is required.' : ''
  },
};

const isFormValid = (errors: ValidationErrors): boolean => {
  return Object.values(errors).every(value => value === '')
}

function MultiStepForm() {
  const [yearly, setYearly] = useState<boolean>(false)
  const [step, setStep] = useState<Step>(1)
  const [isInfoSubmitted, setIsInfoSubmitted] = useState<boolean>(false)

  const [errors, setErrors] = useState({
    name: 'This field is required.',
    email: 'This field is required.',
    phoneNumber: 'This field is required.'
  })


  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phoneNumber: '',
    billingOption: BillingOptionValue.ArcadeMo,
    addOnOption: [AddOnOptionValue.OnlineServiceMo, AddOnOptionValue.LargerStorageMo]
  });

  useEffect(() => {
    if (yearly) {
      setFormData({
        ...formData,
        billingOption: BillingOptionValue.ArcadeYr,
        addOnOption: [AddOnOptionValue.OnlineServiceYr, AddOnOptionValue.LargerStorageYr]
      })
    } else {
      setFormData({
        ...formData,
        billingOption: yearly ? BillingOptionValue.ArcadeYr : BillingOptionValue.ArcadeMo,
        addOnOption: [AddOnOptionValue.OnlineServiceMo, AddOnOptionValue.LargerStorageMo]
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [yearly])

  function nextHandler() {
    if (step === 1 && !isFormValid(errors)) return setIsInfoSubmitted(true)
    return nextStep()
  }


  function nextStep() {
    if (step < 5) {
      setStep(step + 1 as Step)
    }
  }

  function goBack() {
    if (step > 1) {
      setStep(step - 1 as Step)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name in InfoFieldName) {
      const errorMsg = infoStepError[name as InfoFieldName](value)

      setErrors({
        ...errors,
        [name]: errorMsg
      })
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelAddOnCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const addOn = formData.addOnOption.find(a => a === value)
    if (addOn) {
      return setFormData({
        ...formData,
        [name]: formData.addOnOption.filter(a => a !== value)
      })
    } else {
      return setFormData({
        ...formData,
        [name]: [...formData.addOnOption, value]
      })
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStep(5)
    console.log(formData);
  };

  const multiStepFormContextValue = {
    step,
    setStep,
    yearly,
    setYearly,
    handleInputChange,
    handelAddOnCheckboxChange,
    formData,
    errors,
    isInfoSubmitted
  }

  return (
    <MultiStepFormContext.Provider value={multiStepFormContextValue}>
      <div className="multi-step-form">
        <Sidebar />
        <form className="subscription-form" onSubmit={handleSubmit}>
          {/* {generateFieldSet[step - 1]} */}
          {generateFieldSet(step)}
          <div className="form-action">
            <button className={backBtnCssClass(step)} type="button" onClick={() => goBack()}>Go Back</button>
            {step < 4 && <button className="next-button" type="button" onClick={() => nextHandler()} >Next Step</button>}
            {step === 4 && <button className="confirm-button" type="submit">Confirm</button>}
          </div>
        </form>
      </div>
    </MultiStepFormContext.Provider>
  )
}

export default MultiStepForm

function generateFieldSet(step: Step) {
  switch (step) {
    case 1:
      return <InfoStep />
    case 2:
      return <PlanStep />
    case 3:
      return <AddOnStep />
    case 4:
      return <FishingUpStep />
    case 5:
      return <RegistrationThanks />
  }
}

const backBtnCssClass = (step: Step): string => `link-button ${(step < 2 || step > 4) && 'hidden'}`