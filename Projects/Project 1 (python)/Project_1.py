class BankAccount:
    def __init__(self, account_holder, initial_balance=0):
        self.account_holder = account_holder
        self.balance = initial_balance

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ${amount}. New balance: ${self.balance}")
        else:
            print("Invalid deposit amount. Please enter a positive value.")

    def withdraw(self, amount):
        if amount > 0:
            if amount <= self.balance:
                self.balance -= amount
                print(f"Withdrew ${amount}. New balance: ${self.balance}")
            else:
                print("Insufficient funds. Cannot withdraw.")
        else:
            print("Invalid withdrawal amount. Please enter a positive value.")

    def get_balance(self):
        return self.balance

# Example usage:
def main():
    # Creating a new account
    account_holder_name = input("Enter your name: ")
    initial_balance = float(input("Enter initial balance: "))
    user_account = BankAccount(account_holder_name, initial_balance)

    while True:
        print("\n1. Deposit\n2. Withdraw\n3. Check Balance\n4. Exit")
        choice = input("Enter your choice (1-4): ")

        if choice == '1':
            deposit_amount = float(input("Enter deposit amount: "))
            user_account.deposit(deposit_amount)
        elif choice == '2':
            withdraw_amount = float(input("Enter withdrawal amount: "))
            user_account.withdraw(withdraw_amount)
        elif choice == '3':
            print(f"Current balance: ${user_account.get_balance()}")
        elif choice == '4':
            print("Exiting the program. Thank you!")
            break
        else:
            print("Invalid choice. Please enter a number between 1 and 4.")

if __name__ == "__main__":
    main()
