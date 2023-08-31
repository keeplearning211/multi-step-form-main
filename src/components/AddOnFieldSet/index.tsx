import Fieldset from '../FieldSet'
import './addOnFieldSet.css'

enum AddOnOptionValue {
  OnlineServiceMo = 'OnlineServiceMo',
  OnlineServiceYr = 'OnlineServiceYr',
  LargerStorageMo = 'LargerStorageMo',
  LargerStorageYr = 'LargerStorageYr',
  CustomizableProfileMo = 'CustomizableProfileMo',
  CustomizableProfileYr = 'CustomizableProfileYr',
}

const getAddOnOptions = (yearly: boolean): { name: string, value: AddOnOptionValue, description: string, price: number }[] => ([
  {
    name: 'Online service',
    value: yearly ? AddOnOptionValue.OnlineServiceYr : AddOnOptionValue.OnlineServiceMo,
    description: 'Access to multiplayer games',
    price: yearly ? 10 : 1
  },
  {
    name: 'Larger Storage',
    value: yearly ? AddOnOptionValue.CustomizableProfileYr : AddOnOptionValue.CustomizableProfileMo,
    description: 'Access to multiplayer games',
    price: yearly ? 20 : 2
  },
  {
    name: 'Customizable Profile',
    value: yearly ? AddOnOptionValue.LargerStorageYr : AddOnOptionValue.LargerStorageMo,
    description: 'Access to multiplayer games',
    price: yearly ? 20 : 2
  },
])

function AddOnFieldSet({ yearly }: { yearly: boolean }) {
  return (
    <Fieldset
      name="Pick add-ons"
      description="Add-ons help enhance your gaming experience."
    >
      <div className="add_ons_content-wrapper">
        {getAddOnOptions(yearly).map(opt => (
          <AddOnOption
            key={opt.value}
            name={opt.name}
            value={opt.value}
            description={opt.description}
            price={opt.price}
            yearly={yearly}
          />
        ))}
      </div>
    </Fieldset>
  )
}

export default AddOnFieldSet

export interface AddOnOptionProps {
  name: string,
  description: string,
  value: AddOnOptionValue,
  price: number,
  yearly: boolean,
}

export function AddOnOption({ name, description, price, value, yearly }: AddOnOptionProps) {

  return (
    <label className='add_on_option-container'>
      <input type="checkbox" name="addOnOption" value={value} />
      <span className='add_on_option-checkmark'> <img src='src/assets/images/icon-checkmark.svg' /> </span>
      <p className='add_on_option-name'>{name}</p>
      <p className='add_on_option-description'>{description}</p>
      <p className='add_on_option-price'>{`+$${price}/${yearly ? 'yr' : 'mo'}`}</p>
    </label>
  )
}
