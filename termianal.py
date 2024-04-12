# Prosta aplikacja terminalowa
def main():
    print("Witaj w terminalu Ubuntu Tour!")
    while True:
        command = input(">> ")
        if command == "exit":
            break
        else:
            print("Wykonuję: ", command)
        if command == "echo op":
            print("op")
if __name__ == "__main__":
    main()