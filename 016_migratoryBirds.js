const arr = [1, 4, 4, 4, 5, 3]

function migratoryBirds(arr) {
  let mapBirdIdToOccurence = {} // object because >> key = value from the array, value = number of occurence
  let maxOccurenceCount = 0 // counts the max occurence
  let maxIds = [] // holds all the bird IDs (values from arr) with maxOccurenceCount

  for (let i = 0; i < arr.length; i++) {
    // if mapBirdIdToOccurence object's property = arr[i] is empty (! >> falsy)
    // parameter as index!!!
    // e.g first round mapBirdIdToOccurence[arr[i]], arr[0] = 1
    // mapBirdIdToOccurence.1 is empty (falsy), so the negated condition is true
    // mapBirdIdToOccurence.1 = 1
    // second time 4 (i >> 0,1,2) >> arr[2] = 4
    // mapBirdIdToOccurence.4 is not empty ( mapBirdIdToOccurence.4 is 1 before the prev iteration), so the negated condition is false
    // else branch >> mapBirdIdToOccurence[arr[i]] += 1
    if (!mapBirdIdToOccurence[arr[i]]) {
      mapBirdIdToOccurence[arr[i]] = 1
    } else {
      mapBirdIdToOccurence[arr[i]]++
    }
    console.log('mapBirdIdToOccurence:', mapBirdIdToOccurence)

    // getting max count >> number of the most bird IDs (occurences)
    if (mapBirdIdToOccurence[arr[i]] > maxOccurenceCount) {
      maxOccurenceCount = mapBirdIdToOccurence[arr[i]]
    }
  }
  console.log('maxOccurenceCount', maxOccurenceCount)

  // compare all the occurences to the maxOccurenceCount
  // if they are equal to each other >> found a max occurence
  // push the item from the original arr into maxIds 
  for (let j = 0; j < arr.length; j++) {
    if (mapBirdIdToOccurence[arr[j]] === maxOccurenceCount) {
      maxIds.push(arr[j])
    }
  }
  console.log('maxIds:', maxIds)

  // in case of ID equality choose the lower one
  // spread all the values of maxIds ID and find the min value
  return Math.min(...maxIds)
}

console.log(migratoryBirds(arr))