<div align='center'>

## Simple API for money transaction

</div>

### API List
#### 1. Add new users
```json
POST: /register
{
    "userName": "stranger"
}
```

#### 2. Get all users information
```json
GET: /allUsers
```

#### 3. Withdraw money
```json
POST: /withdraw
{
    "username": "vnmc",
    "amount": 500000
}
```

#### 4. Transfer money to another
```json
POST: /transfer
{
    "from" : "vnmc",
    "to": "pnt",
    "amount": 500000
}
```

#### 5. Recharge money
```json
POST: /recharge-money
{
    "username": "vnmc",
    "amount": 20000000
}
```