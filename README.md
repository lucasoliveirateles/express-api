## Express.js

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

In this project we will build an API for data transfer with the database (save, read, update and delete).

<p align="center">
  <img src="https://github.com/teles1g/api-express/blob/master/express.jpg?raw=true" alt="Express"/>
</p>

#### Start

1. Install the necessary packages

```
-> ~/yarn
```

2. Copy the ".env-example" to ".env" and configure the database connection according to your preference

```
Example: 

POSTGRE_DIALECT=postgres
POSTGRE_HOST=localhost
POSTGRE_USER=admin
POSTGRE_PASS=admin
POSTGRE_NAME=express
```

3. Run migrations

```
-> ~/yarn sequelize db:migrate
```

4. Import the file into Insomnia 

![import](https://github.com/teles1g/api-express/blob/master/import.png)

#### Util

Express.js: http://expressjs.com

Docker: https://docs.docker.com

Insomnia: https://insomnia.rest
