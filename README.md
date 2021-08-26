## Customer application

## Endpoints for API
``POST /api/customers``
- Example body:
`{
    "Name":"Marko Stojkovic",
    "Phone":"+381606221290",
    "Company":"SomeCompany",
    "Email":"gamer98forever@gmail.com",
    "Subject":"Sub",
    "ProblemDescription":"Some problem",
    "CallbackDateTime":"2021-08-26 23:09:21"
}
`

``POST /api/login`` (returns access_token)
- Example body:

`
Request Headers
Accept :application/json
Bodyform-data
email : software.developer@hotmail.rs
password :12345
`


