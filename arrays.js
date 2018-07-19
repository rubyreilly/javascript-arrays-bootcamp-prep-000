var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element){
  beginningArray=[element,...array]
  return beginningArray
}

function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element){
  endArray=[...array,element]
  return endArray
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element)
  return array
}