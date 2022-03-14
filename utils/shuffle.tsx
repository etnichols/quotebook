function shuffle(arr: Array<any>) {
  let curIndex = arr.length,
    tempVal,
    randIndex

  while (0 !== curIndex) {
    // Pick remaining element.
    randIndex = Math.floor(Math.random() * curIndex)
    curIndex -= 1

    // Swap with current.
    tempVal = arr[curIndex]
    arr[curIndex] = arr[randIndex]
    arr[randIndex] = tempVal
  }

  return arr
}

export { shuffle }
