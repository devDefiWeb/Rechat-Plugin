import { RadioItem } from 'components/RadioGroup'

import {
  ClientInterested,
  PriceOpinion,
  OverallExperience,
  ListingRate
} from './types'

export const CLIENT_INTEREST_QUESTION: string =
  'Is your client interested in this listing?'
export const CLIENT_INTEREST_OPTIONS: RadioItem<ClientInterested>[] = [
  {
    label: '๐ Very',
    value: 'Very'
  },
  {
    label: '๐ Somewhat',
    value: 'Somewhat'
  },
  {
    label: '๐ Maybe',
    value: 'Maybe'
  },
  {
    label: '๐ฃ Not interested',
    value: 'Not Interested'
  }
]

export const LISTING_RATE_QUESTION: string = 'How would you rate this listing?'
export const LISTING_RATE_OPTIONS: RadioItem<ListingRate>[] = [
  {
    label: '๐ Highly Satisfied',
    value: 'Highly Satisfied'
  },
  {
    label: '๐ Satisfied',
    value: 'Satisfied'
  },
  {
    label: '๐ Neutral',
    value: 'Neutral'
  },
  {
    label: '๐ Dissatisfied',
    value: 'Dissatisfied'
  },
  {
    label: '๐ฃ Highly Dissatisfied',
    value: 'Highly Dissatisfied'
  }
]

export const PRICE_OPINION_QUESTION: string =
  'What is your clients and your opinion of the price?'
export const PRICE_OPINION_OPTIONS: RadioItem<PriceOpinion>[] = [
  {
    label: 'โซ Too high',
    value: 'Too High'
  },
  {
    label: '๐ Just right',
    value: 'Just Right'
  },
  {
    label: 'โคต๏ธ Too low',
    value: 'Too Low'
  }
]

export const OVERALL_EXPERIENCE_QUESTION: string =
  'How would you rate your overall experience at this showing?'
export const OVERALL_EXPERIENCE_OPTIONS: RadioItem<OverallExperience>[] = [
  {
    label: '๐ Excellent',
    value: 'Excellent'
  },
  {
    label: '๐ Good',
    value: 'Good'
  },
  {
    label: '๐ Fair',
    value: 'Fair'
  },
  {
    label: '๐ฃ Poor',
    value: 'Poor'
  }
]

export const COMMENTS_QUESTION: string = 'Any comments or recommendations?'
