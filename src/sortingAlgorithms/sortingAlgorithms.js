export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return animations;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;
  const pivotIdx = partition(array, startIdx, endIdx, animations);
  quickSortHelper(array, startIdx, pivotIdx - 1, animations);
  quickSortHelper(array, pivotIdx + 1, endIdx, animations);
}

function partition(array, startIdx, endIdx, animations) {
  const pivotIdx = startIdx;
  let i = startIdx + 1;

  for (let j = startIdx + 1; j <= endIdx; j++) {
    animations.push(["compare", j, pivotIdx]); // Comparing current element with pivot
    animations.push(["revert", j, pivotIdx]); // Reverting color after comparison

    if (array[j] < array[pivotIdx]) {
      animations.push(["swap", i, j]); // Swap if current element is smaller than pivot
      [array[i], array[j]] = [array[j], array[i]];
      i++;
    }
  }

  animations.push(["swap", pivotIdx, i - 1]); // Place pivot in the correct position
  [array[pivotIdx], array[i - 1]] = [array[i - 1], array[pivotIdx]];
  return i - 1;
}

export const getBubbleSortAnimations = (array) => {
  const animations = [];
  const arrayCopy = array.slice();

  for (let i = 0; i < arrayCopy.length - 1; i++) {
    for (let j = 0; j < arrayCopy.length - i - 1; j++) {
      animations.push(["compare", j, j + 1]); // Compare
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        animations.push(["swap", j, j + 1]); // Swap
        [arrayCopy[j], arrayCopy[j + 1]] = [arrayCopy[j + 1], arrayCopy[j]]; // Perform the swap
      } else {
        animations.push(["revert", j, j + 1]); // Revert colors if no swap
      }
    }
  }

  return animations;
};


export const getInsertionSortAnimations = (array) => {
    const animations = [];
    const arrayCopy = array.slice();

    for (let i = 1; i < arrayCopy.length; i++) {
        let j = i;
        while (j > 0 && arrayCopy[j] < arrayCopy[j - 1]) {
            animations.push(["compare", j, j - 1]); // Compare
            animations.push(["swap", j, j - 1]); // Swap
            // Swap the elements
            [arrayCopy[j], arrayCopy[j - 1]] = [arrayCopy[j - 1], arrayCopy[j]];
            j--;
        }
        // Revert colors if no swap happens
        if (j > 0) animations.push(["revert", j, j - 1]);
    }

    return animations;
};