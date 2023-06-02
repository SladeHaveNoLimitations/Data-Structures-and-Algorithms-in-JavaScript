function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let indexOfTheMinimumValue = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[indexOfTheMinimumValue] > arr[j]) {
                indexOfTheMinimumValue = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[indexOfTheMinimumValue];
        arr[indexOfTheMinimumValue] = tmp;
    }
}