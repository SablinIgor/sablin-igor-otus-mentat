export const complexityMatrix = new Map([
  ['1', { depth: 1, quantity: 5 }],
  ['2', { depth: 1, quantity: 10 }],
  ['3', { depth: 1, quantity: 15 }],
  ['4', { depth: 1, quantity: 20 }],
  ['5', { depth: 1, quantity: 25 }],
  ['6', { depth: 2, quantity: 30 }],
  ['7', { depth: 2, quantity: 35 }],
  ['8', { depth: 2, quantity: 40 }],
  ['9', { depth: 2, quantity: 45 }],
  ['10', { depth: 2, quantity: 50 }]
])

export const randomOperation = (OperationList = []) => {
  if (OperationList.length === 0) { return null }

  const rand = Math.floor(Math.random() * OperationList.length)
  return OperationList[ rand ]
}

export const randomOperand = (depth) => {
  switch (depth) {
    case 1:
      return 1 + Math.floor(Math.random() * 9)
    default:
      return 10 + Math.floor(Math.random() * 90)
  }
}

export const randomExpo = () => Math.random() > 0.5 ? 2 : 3
