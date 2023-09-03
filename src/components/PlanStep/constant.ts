import { BillingOptionValue } from '../../types'

export const planName = {
  [BillingOptionValue.ArcadeMo]: 'Arcade',
  [BillingOptionValue.ArcadeYr]: 'Arcade',
  [BillingOptionValue.AdvancedMo]: 'Advanced',
  [BillingOptionValue.AdvancedYr]: 'Advanced',
  [BillingOptionValue.ProMo]: 'Pro',
  [BillingOptionValue.ProYr]: 'Pro',
}

export const planPrice = {
  [BillingOptionValue.ArcadeMo]: 9,
  [BillingOptionValue.ArcadeYr]: 90,
  [BillingOptionValue.AdvancedMo]: 12,
  [BillingOptionValue.AdvancedYr]: 120,
  [BillingOptionValue.ProMo]: 15,
  [BillingOptionValue.ProYr]: 150,
}