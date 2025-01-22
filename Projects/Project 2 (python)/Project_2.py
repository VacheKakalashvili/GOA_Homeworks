import random

def roll_dice():
    return random.randint(1, 6)

def main():
    print("Welcome to the Dice Roll Game!")

    # Get user's name
    user_name = input("Enter your name: ")

    # Initialize scores
    user_score = 0
    computer_score = 0

    # Number of rounds
    rounds = 5

    # Game loop
    for round_num in range(1, rounds + 1):
        input(f"\nRound {round_num}: {user_name}, press Enter to roll the dice...")
        
        # User's turn
        user_roll = roll_dice()
        print(f"{user_name}, you rolled a {user_roll}")

        # Computer's turn
        computer_roll = roll_dice()
        print(f"Computer rolled a {computer_roll}")

        # Compare rolls and update scores
        if user_roll > computer_roll:
            user_score += 1
            print(f"{user_name} wins this round!")
        elif user_roll < computer_roll:
            computer_score += 1
            print("Computer wins this round!")
        else:
            print("It's a tie!")

    # Display final scores
    print("\nGame Over!")
    print(f"{user_name}'s Score: {user_score}")
    print(f"Computer's Score: {computer_score}")

    # Determine the overall winner
    if user_score > computer_score:
        print(f"{user_name} wins the game!")
    elif user_score < computer_score:
        print("Computer wins the game!")
    else:
        print("It's a tie!")

if __name__ == "__main__":
    main()
