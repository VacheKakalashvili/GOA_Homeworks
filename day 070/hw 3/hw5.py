def find_second_largest(arr):
    if len(arr) < 2:
        return "List must have at least two elements"
    
    largest = arr[0]
    second_largest = float('-inf')
    
    for num in arr[1:]:
        if num > largest:
            second_largest = largest
            largest = num
        elif num > second_largest and num != largest:
            second_largest = num
    
    if second_largest == float('-inf'):
        return "There is no second largest element"
    else:
        return second_largest