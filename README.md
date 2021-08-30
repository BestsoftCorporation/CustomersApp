## Customer application

## TO START APP

Rename .env.example file to .env inside project root and fill the database information. 
Open the console and cd project root directory
```
Run composer install or php composer.phar install
Run php artisan key:generate
Run php artisan migrate
Run php artisan serve
```
## Create Admin user 

``php artisan tinker``
```
$user = new App\User();
$user->password = Hash::make('password');
$user->email = 'the-email@example.com';
$user->name = 'Admin';
$user->save();
```

## RUN APP BACKEND

Run php artisan serve

## RUN APP FRONTEND
```
cd frontend

npm install

npm start
```

## Endpoints for API

### Public routes

``POST /api/customers``
- Example body:
```
{
    "Name":"Marko Stojkovic",
    "Phone":"+381606221290",
    "Company":"SomeCompany",
    "Email":"gamer98forever@gmail.com",
    "Subject":"Sub",
    "ProblemDescription":"Some problem",
    "CallbackDateTime":"2021-08-26 23:09:21"
}
```

``POST /api/login`` (returns access_token)
- Example body:

```
Request Headers
Accept :application/json
Bodyform-data
email : software.developer@hotmail.rs
password :12345
```

### Required access_token routes

``GET /api/admin`` (token from login)
```
 headers: {
    Authorization: 'Bearer ' + token, 
    Accept: 'application/json'
 }

```