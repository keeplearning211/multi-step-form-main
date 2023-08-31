import Fieldset from '../FieldSet'
import './registrationThanks.css'

function RegistrationThanks() {
  return (
    <Fieldset>
      <div className="thanks-message-wrapper">
        <img className="thanks-icon" src='src/assets/images/icon-thank-you.svg' alt='checked icon' />
        <p className='thanks-message-title'>Thank you!</p>
        <p className="thanks-message-content">
          Thanks for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free
          to email us at support@loremgaming.com.
        </p>
      </div>
    </Fieldset>
  )
}

export default RegistrationThanks