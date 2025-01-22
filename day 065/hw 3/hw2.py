with open("your_file.txt", "r") as file:
    sum = 0
    count = 0
    for line in file:
        numbers = map(float, line.split())
        for num in numbers:
            sum += num
            count += 1

if count != 0:
    average = sum / count
    print("Average:", average)
else:
    print("No numbers found in the file.")