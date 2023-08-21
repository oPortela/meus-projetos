##print("Hello World!")

##nome = "Matheus" #string
##idade = 20 #int
##altura = 1.86 #float
##is_male = True #bool
##gosto_de = "F1"

##print("Meu nome é " + nome + ".")
##print(f"Eu gosto de {gosto_de}.")
##print(f"Eu tenho {idade} anos.")

##idade = "34"

##print(f"{nome} gosta de {gosto_de} e tem {idade} anos.")

account = []
deposit = []
balance = 0

def creatAccount():
    global account, deposit, balance
    name_account = input('Digite o nome da conta: ')
    while name_account in account:
        print('Conta já existente: ')
        name_account = input('Digite o nome da conta: ')
    
    account.append(name_account)
    new_deposit = float(input('Digite o valor do depósito: '))
    while new_deposit <= 0 :
        print('Valor inválido')  
        new_deposit = float(input('Digite o valor do depósito: '))

    deposit.append(new_deposit)
    balance += new_deposit
def lookBalance():
    global balance
    opçao = bool(int(input('Deseje ver o saldo do banco - Sim(1) / Não(0): ')))
    if opçao :
        print('O saldo do banco é R$',balance)

def main():
    opçao = bool(int(input('Deseja ver ou criar um programa (1) ou fechar o programa(0): ')))
    while opçao :
        creatAccount()
        lookBalance()
        opçao = bool(int(input('Deseja ver ou criar um programa (1) ou fechar o programa(0): ')))

main()