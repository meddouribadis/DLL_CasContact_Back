<p align="center">
  <a href="https://github.com/meddouribadis/DLL_CasContact_Back">
    <img src="https://ammib2018.sciencesconf.org/data/pages/logoUEVE.jpg" alt="Logo" width="430">
  </a>
</p>

  <h3 align="center">Projet DLL COVID Cas Contact : Serveur Side</h3>

  <p align="center">
    Professeur : <strong>Didier COURTAUD</strong>
    <br />
    <a href="https://github.com/meddouribadis/DLL_CasContact_Back/issues">Report Bug</a>
    ·
    <a href="https://github.com/meddouribadis/DLL_CasContact_Front">Partie Front</a>
  </p>




- [DLL_CasContact_Back](#DLL_CasContact_Back)
  * [Installation](#installation)
  * [Usage](#usage)
    + [Auth](#auth)
  * [Auteurs](#auteurs)

## A propos du projet
### Installation

Clone this repo !

Run `npm install` then `npm install` inside a terminal.

Tweak the `./.env` file :

```
PORT=4040
DB_NAME=dll_bdd
DB_USER=dll_bdd_user
DB_PORT=8889
DB_PASS=covid19
DB_HOST=localhost
MAIL_SERVICE_NAME = gmail # service name
MAIL_SERVICE_HOST = smtp.gmail.com # service host name
MAIL_SERVICE_SECURE = false # Service security
MAIL_SERVICE_PORT = 587 # service port
MAIL_USER_NAME = <email> # email address
MAIL_USER_PASSWORD = <password> # email address password
```

Update the `./config/config.json` file with our MySQL databases informations :

```json
{
  "development": {
    "username": "dll_bdd_user",
    "password": "covid19",
    "database": "dll_bdd",
    "host": "127.0.0.1",
    "port": "8889",
    "dialect": "mysql"
  }
}

```

Start your MySQL server and then start the API via the command `npm test`or with the `node app.js` command.

That's All.

## Usage

### Auth

To register : POST http://localhost:4040/users/register

```json
{
    "firstName": "Jason",
    "lastName": "Patrick",
    "username": "username",
    "email": "mail@gmail.com",
    "password": "my-passwd"
}
```

To login : POST http://localhost:4040/users/login

```json
{
    "username": "jajson",
    "password": "my-super-secret-password"
}
```

 will return a user informations as well as a JWT token :

```json
{
    "id": 1,
    "firstName": "Jason",
    "lastName": "Patrick",
    "username": "username",
    "role": "STUDENT",
    "email": "randommail@gmail.com",
    "createdAt": "2020-09-26T15:22:05.000Z",
    "updatedAt": "2020-09-26T15:22:05.000Z",
    "token": "token"
}
```
### CRUD Table
Use apidoc command to generate the API Swagger : `apidoc -f "routes/.*\\.js$" -i ./  -o apidoc/`

## Auteurs
- Badis Meddouri
- Anis Kassy
- Jayson Boucaud

