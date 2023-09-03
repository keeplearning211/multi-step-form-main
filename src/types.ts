export type Step = 1 | 2 | 3 | 4 | 5

export enum BillingOptionValue {
  ArcadeMo = 'ArcadeMo',
  AdvancedMo = 'AdvancedMo',
  ProMo = 'ProMo',
  ArcadeYr = 'ArcadeYr',
  AdvancedYr = 'AdvancedYr',
  ProYr = 'ProYr',
}

// this affects to the css class
export enum BillingOptionIconName {
  Arcade = 'arcade',
  Advanced = 'advanced',
  Pro = 'pro',
}

export type FormData = {
  name: string,
  email: string,
  phoneNumber: string,
  billingOption: BillingOptionValue,
  addOnOption: AddOnOptionValue[],
}

export type MultiStepFormContextValues = {
  step: Step,
  setStep: (step: Step) => void,
  yearly: boolean,
  setYearly: (yearly: boolean) => void,
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handelAddOnCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  formData: FormData,
  errors: ValidationErrors,
  isInfoSubmitted: boolean
}

export enum InfoFieldName {
  name = 'name',
  email = 'email',
  phoneNumber = 'phoneNumber',
}

export type ValidationErrors = Record<InfoFieldName, string>

export enum AddOnOptionValue {
  OnlineServiceMo = 'OnlineServiceMo',
  OnlineServiceYr = 'OnlineServiceYr',
  LargerStorageMo = 'LargerStorageMo',
  LargerStorageYr = 'LargerStorageYr',
  CustomizableProfileMo = 'CustomizableProfileMo',
  CustomizableProfileYr = 'CustomizableProfileYr',
}
