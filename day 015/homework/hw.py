print("ფუნქცია, რომელიც ტექსტს ეკრანზე გამოიტანს")

#2 - In Python, which data type is used to store a whole number? - integer ტიპი ინახავს მთელ რიცხვებს
x = 23
print(type(x))

#3 - Which of the following data types is used to store text in Python? - string ტიპი ინახავს ტექსტებს
name = "ვაჩე კაკალაშვილი"
print(type(name))

#4 - What is the result of the expression 10 + 5 * 2 in Python? - პირველად ჩვენ ვამრავლებთ, შემდეგ კი ვუმატებთ ანუ პასუხია 20
print(10 + 5 * 2)

#5 - Which of the following is the correct way to assign the value 42 to a variable named answer in Python? - ჯერ შემოვიტანოთ რაიმე ცვლადი და შემდეგ მივანიჭოთ მას რაიმე მნიშვნელობა, ამ შემთხვევაში 42
answer=42
print(answer)

#6 - What is the process of identifying and fixing errors in a program called? - ამ პროცესს ქვია debugging:
# name = ვაჩე კაკალაშვილ - error
name = "ვაჩე კაკალაშვილი" # - correct
print(name)

#7 - Which is commonly used in Python for naming variables and functions, where words are separated by underscore? - ამ ტიპს ქვია snake_case
first_name = "ვაჩე"
print(first_name)

#8 - What is the primary purpose of adding comments to your Python code? - კომენტარები პითონის კოდის არსებითი ნაწილია და გვეხმარება კოდის ხაზის გაგებაში ან სხვა პროგრამისტებისთვის მესიჯის დასატოვებლად ისე, რომ კომპიუტერმა არ წაიკითხოს და კოდი არ გაფუჭდეს.

#9 - How can you take user input in Python? - ჩვენ ამისთვის input() ვიყენებთ
# age=int(input("How old are you? "))
# print(age)

#11 - What function can be used to check the data type of a variable in Python? - მონაცემის ტიპი, რომ შევამოწმოთ ეს წინ უნდა დავუწეროთ type()
x = 231
print(type(x))

#12 - How can you convert an integer to a string in Python? - ჩვენ უნდა გამოვიყენოთ str(ცვლადის სახელი)
y = 45
str_y = str(y)
print(str_y)
print(type(str_y))

#13 - What is the term for converting one data type into another in Python? - ამას ქვია converting
a = 15
str_a = str(a)
print(a, str_a)

#14 - Which operator is used to check if two values are equal in Python? - This operator is called boolean(bool)
print(5 == 5)
print(5 == 6)

#15 - What is the result of the logical AND operation between True and False in Python? - ლოგიკურ ოპერატორში ორივე ნაწერი სწორი უნდა იყოს, რომ პასუხი სწორად ჩაითვალოს
print(8==2**2+3 and 7==7)
#     არასწორი    სწორი

#16 - What will the expression (5 > 3) and (10 < 20) evaluate to in Python? ეს კოდი გამოიტანს სწორს, რადგან ორივე კოდი სწორია
print((5 > 3) and (10 < 20))

#17 - In Python, what is used to make decisions and execute different code blocks based on conditions? - The if-else კოდი გამოიყენება გადაწყვეტილებების მისაღებად პირობების საფუძვლებზე.
if 5>3:
    print("5>3")
else:
    print("3>5")

#18 - Which type of loop is used to iterate over a sequence (e.g., a list or string) in Python? - For ციკლი მოითხოვს იტერაციას:
for x in range (3,20, 4):
    print(x)

#20 - What does the range() function in Python return? - range() function returns a sequence of numbers for specified range:
num_list=[]
for i in range(1, 14, 5):
    num_list.append(i)
print(num_list)

#21 - Which keyword is used to start an "if" statement in Python? - ჩვენ უნდა გამოვიყენოთ if keyword
if 10==10:
    print("10 equals to 10")

#22 - What is the purpose of the "else" statement in Python's "if-else" construct? - ჩვენ ვიყენებთ else statement-ს როდესაც სხვა პასუხს მივიღებთ, რომელიც if statementში არ გვაქვს მითითებული
if 2==4:
    print("2 is equal to 4")
else:
    print("2 is not equal to 4")

#23 - Which data structure is used to store an ordered collection of items in Python? - A list is defined as an ordered collection of items, and it is one of the essential data structures when using Python to create a project.
name_list=["ვაჩე", "ლუკა", "გიორგი", "გივი"]
print(name_list)

#24 - In Python, which index represents the first element of a sequence? - First element of sequence is indexed with 0.
name_list=["ვაჩე", "ლუკა", "გიორგი", "გივი"]
print(name_list, name_list[0])

#25 - How can you access the third element of a list in Python? - Third element has index 2:
car_list=["bmw", "audi", "mercedes", "porsche", "ferrari"]
#          0       1        2           3          4
print(car_list[2])

#26 - What does slicing allow you to do with a sequence in Python? - Slicing helps you access specific elements in a sequence, such as a list, tuple or string.
car_list=["bmw", "audi", "mercedes", "porsche", "ferrari", "lamborgini", "pagani"]
#          0       1        2           3          4         5             6
print(car_list[1:4])     

#27 - How can you extract a subsequence of a list from index 2 to index 5 (5 must be included) in Python? variable_name[2:6]
car_list=["bmw", "audi", "mercedes", "porsche", "ferrari", "lamborgini", "pagani"]
print(car_list[2:6])

#28 - What does the "step" value in slicing indicate? - It is third number in range() and indicates how much should be added to specified number
#                      3 არის step-ი
for i in range (2, 14, 3):
    print(i)

#29 - What is a reusable block of code in Python that performs a specific task called? - ამ ბლოკს ქვია function
def greet_func():
    print("Hello!")
greet_func()
greet_func()
greet_func()
greet_func()

#30 - In Python, what are the values passed to a function called? - მათ ქვიათ arguments
#            x არის არგუმენტი
def num_func(x):
    print(x)
num_func(x=0)

#31 - Which string method is used to convert a string to uppercase in Python? - ეს მეთოდი არის upper()
name = "Vache"
name = name.upper()
print(name)

#32 - What list method is used to add an element to the end of a list in Python? - ეს მეთოდი არის append()
car_list=["bmw", "audi", "mercedes", "porsche", "ferrari", "lamborgini", "pagani"]
car_list.append("Jaguar")
print(car_list)

#33 - In Python, which keyword is used to define a new function? - def გამოიყენება, რომ განვსაზღვროთ ახალი ფუნქცია
def num_func(i):
    print(i)
num_func(i=12)

#34 - What keyword is used to return a value from a function in Python? - ჩვენ ვიყენებთ return-ს რომ დავაბრუნოთ value:
def num_func(i):
    return i
num_func(i=234)