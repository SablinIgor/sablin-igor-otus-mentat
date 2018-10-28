export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return null
    }
    return JSON.parse(serializedState)
  } catch (e) {
    return null
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (e) {
    console.log('Something went wrong with saving in Local storage')
  }
}
