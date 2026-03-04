Ссылка на контракт:  
`https://sepolia.etherscan.io/address/0x21A0EbF926a1C1db203e8A9176982B16b62e281d`  

Адрес моего акка:   
`0xc4692bDa9aF6f4F1008EBBbD666e41B2feE83f2e`   
<img width="380" height="104" alt="image" src="https://github.com/user-attachments/assets/f5186ea8-3042-4ba0-90de-4d8ef7df0cea" />  
Второго акка:  
`0x5D66b4145ecBb4d886eD81171BDf09403BA21758`

## Лабораторная работа 2  

Разработка и развёртывание Fungible токена в тестовой сети  

### 1. Выбор сети  

В качестве тестовой сети была выбрана сеть Ethereum Sepolia Testnet.  

Находим в ChainList и добавляем в MetaMask: 
<img width="1246" height="637" alt="image" src="https://github.com/user-attachments/assets/659bb516-33df-47be-835d-001e82253272" /> 

ChainId: 
`11155111` 

### 2. Создание кошелька  

Для взаимодействия с блокчейном был установлен браузерный кошелёк MetaMask. 

После установки: 

Был создан новый тестовый кошелёк. 

Сгенерирован публичный адрес. 
 
Кошелёк переключён в тестовую сеть Sepolia. 

Публичный адрес кошелька: 
`0xc4692bDa9aF6f4F1008EBBbD666e41B2feE83f2e`

### 3. Получение тестовых средств  
Взяла отсюда  - https://sepolia-faucet.pk910.de/#/claim/c5be0fda-414d-462a-aaf7-3575a0ba3839 

<img width="810" height="574" alt="image" src="https://github.com/user-attachments/assets/6620b436-4e24-49a0-b37f-5143784109b5" />

 <img width="983" height="537" alt="image" src="https://github.com/user-attachments/assets/dd082a05-7fb5-4ef1-9c34-f128cf90045e" />

Для оплаты комиссий за транзакции (gas) были получены тестовые ETH.  

Использовался faucet: 

https://sepolia-faucet.pk910.de 

После запроса кошелёк получил SepoliaETH, которые используются для оплаты транзакций в тестовой сети. 

### 4. Подготовка среды разработки 

Для разработки смарт-контракта использовалась среда Hardhat. 

Создан новый проект и установлены зависимости: 

npm init -y 
npm install --save-dev hardhat 
npm install @openzeppelin/contracts 
npm install dotenv 

Структура проекта: 

contracts/ 
scripts/ 
hardhat.config.js 
.env 
 
Файл .env используется для хранения секретных данных: 

PRIVATE_KEY 
SEPOLIA_RPC_URL 
ETHERSCAN_API_KEY 

Файл .env был добавлен в .gitignore, чтобы не публиковать секретные данные. 

### 5. Разработка смарт-контракта 

Был реализован ERC-20 токен на основе библиотеки OpenZeppelin. 

Контракт реализует: 

имя токена 

символ токена 

хранение владельца 

функцию mint (эмиссия) 

функцию burn (сжигание) 

Контракт: 

`MyToken.sol` 

Название токена: 

`OlesyaToken`

Символ токена: 

`OLS` 

### 6. Компиляция контракта 

Контракт был скомпилирован с помощью Hardhat. 

Команда: 

`npx hardhat compile`  

В результате были созданы артефакты компиляции. 

### 7. Развёртывание контракта 

Контракт был развёрнут в сети Sepolia с помощью скрипта: 

`scripts/deploy.js` 

Команда запуска: 

npx hardhat run scripts/deploy.js --network sepolia 

Адрес развёрнутого контракта:
`0x21A0EbF926a1C1db203e8A9176982B16b62e281d` 

### 8. Верификация контракта 

<img width="1010" height="525" alt="image" src="https://github.com/user-attachments/assets/5478cbeb-0bc6-4414-8a69-5a0c75d15748" />


Для отображения исходного кода в блок-обозревателе контракт был верифицирован через Etherscan. 

Команда: 

npx hardhat verify --network sepolia 0x21A0EbF926a1C1db203e8A9176982B16b62e281d "OlesyaToken" "OLS" 

Ссылка на контракт в обозревателе: 

https://sepolia.etherscan.io/address/0x21A0EbF926a1C1db203e8A9176982B16b62e281d 
### 9. Эмиссия токенов 

После развёртывания была выполнена эмиссия токенов (mint). 

Команда в Hardhat console:  

`token.mint(address, amount)`  

В результате на кошелёк было выпущено 1000 OLS.

### 10. Перевод токенов

Для демонстрации работы токена была выполнена транзакция перевода. 

Переведено: 
100 OLS  
<img width="1558" height="1004" alt="image" src="https://github.com/user-attachments/assets/bee393aa-b4fb-43f0-ac7c-ef99fd9d7ed2" />


Транзакция: 
https://sepolia.etherscan.io/tx/0x12c4ce4d7c439a9e571285a1260274aca60db3b59e4e410769e8c8edeeaf19e7 
