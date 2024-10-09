# JOGA_SQUELIZE PROJECT

This project is an Express application structured with the Model-View-Controller (MVC) design pattern, using Sequelize ORM to manage a relational database and migrations to handle database schema changes.

## Features

  * MVC Architecture: Separates concerns between the Model, View, and Controller layers for better structure and maintainability.
  * Sequelize ORM: Provides an abstraction for interacting with a relational database, enabling object-relational mapping for models.
  * Migrations: Allows versioning and management of database schema changes.
    
## Prerequisites

  Node.js: Make sure you have Node.js installed.

  NPM: A package manager for Node.js.

  Sequelize CLI: Globally install the Sequelize CLI for running migrations and other Sequelize operations.

   
    npm install -g sequelize-cli
  

Database: A compatible relational database.

## Getting Started



```bash
# 1. Clone this repository
$ git clone https://github.com/Eallekors/joga_sequelize

# 2. Go into the repository
$ cd [repository-name]

# 3. Configure database variables in config file in the config folder

# 4. Setup the database:
sequelize db:create   # Create the database
sequelize db:migrate  # Run migrations

# 5. Install dependencies
$ npm install

# 6. Run the app
$ node index.js
```

## Running Migrations and Seeders

To apply migrations and seed the database, use the following commands:

```bash

# Run all pending migrations
sequelize db:migrate

# Undo the last migration
sequelize db:migrate:undo

# Seed the database
sequelize db:seed:all

# Undo a specific seed
sequelize db:seed:undo --seed <seed-filename>
```
