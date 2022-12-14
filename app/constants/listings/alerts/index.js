export const FETCH_ALERTS_REQUEST = 'FETCH_ALERTS_REQUEST'
export const FETCH_ALERTS_SUCCESS = 'FETCH_ALERTS_SUCCESS'
export const FETCH_ALERTS_FAILURE = 'FETCH_ALERTS_FAILURE'

export const DELETE_ALERT_REQUEST = 'DELETE_ALERT_REQUEST'
export const DELETE_ALERT_SUCCESS = 'DELETE_ALERT_SUCCESS'
export const DELETE_ALERT_FAILURE = 'DELETE_ALERT_FAILURE'

export const ADD_ALERT_REQUEST = 'ADD_ALERT_REQUEST'
export const ADD_ALERT_SUCCESS = 'ADD_ALERT_SUCCESS'
export const ADD_ALERT_FAILURE = 'ADD_ALERT_FAILURE'

export const SET_SELECTED_ALERT_ID = 'SET_SELECTED_ALERT_ID'

export const FETCH_ALERT_FEED_REQUEST = 'FETCH_ALERT_FEED_REQUEST'
export const FETCH_ALERT_FEED_SUCCESS = 'FETCH_ALERT_FEED_SUCCESS'
export const FETCH_ALERT_FEED_FAILURE = 'FETCH_ALERT_FEED_FAILURE'

export const CLEAR_ALERT_NOTIFICATION = 'CLEAR_ALERT_NOTIFICATION'

export const CLEAR_ALERT_NOTIFICATION_REQUEST =
  'CLEAR_ALERT_NOTIFICATION_REQUEST'

export const CLEAR_ALERT_NOTIFICATION_SUCCESS =
  'CLEAR_ALERT_NOTIFICATION_SUCCESS'

export const CLEAR_ALERT_NOTIFICATION_FAILURE =
  'CLEAR_ALERT_NOTIFICATION_FAILURE'

export const LOG_ALERT_ACTIVITY = 'LOG_ALERT_ACTIVITY'

export const FETCH_CHANGE_ALERT_FOLLOW_REQUEST =
  'FETCH_CHANGE_ALERT_FOLLOW_REQUEST'
export const FETCH_CHANGE_ALERT_FOLLOW_SUCCESS =
  'FETCH_CHANGE_ALERT_FOLLOW_SUCCESS'
export const FETCH_CHANGE_ALERT_FOLLOW_FAILURE =
  'FETCH_CHANGE_ALERT_FOLLOW_FAILURE'

export const alertStatuses = [
  { key: 'AlertHit', value: 'Hit the Market' },
  { key: 'AlertPriceDrop', value: 'Price Dropped' },
  { key: 'AlertStatusChange', value: 'Status Change' },
  { key: 'AlertOpenHouse', value: 'Open House' }
]
