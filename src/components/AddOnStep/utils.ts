import { AddOnOptionProps } from '.';
import { AddOnOptionValue } from '../../types';

export const getAddOnOptions = (yearly: boolean): AddOnOptionProps[] => ([
  {
    name: 'Online service',
    value: yearly ? AddOnOptionValue.OnlineServiceYr : AddOnOptionValue.OnlineServiceMo,
    description: 'Access to multiplayer games',
    price: yearly ? 10 : 1
  },
  {
    name: 'Larger Storage',
    value: yearly ? AddOnOptionValue.LargerStorageYr : AddOnOptionValue.LargerStorageMo,
    description: 'Access to multiplayer games',
    price: yearly ? 20 : 2
  },
  {
    name: 'Customizable Profile',
    value: yearly ? AddOnOptionValue.CustomizableProfileYr : AddOnOptionValue.CustomizableProfileMo,
    description: 'Access to multiplayer games',
    price: yearly ? 20 : 2
  },
])