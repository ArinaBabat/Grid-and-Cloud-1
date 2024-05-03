# Task 1. Basics of containerization

This repository contains a Dockerized application consisting of two containers: a database and an entry point.

## Running the Application

1.Build Docker images for containers:

```bash
docker-compose build 
```
2. Start the containers:
```bash
docker-compose up -d
```
## Testing

1.Check that the containers are successfully running:

```bash
docker-compose ps
```
2. Verify that the entry point successfully connects to the database and executes queries:
```bash
docker-compose logs entrypoint
```
## Testing

1.Check that the containers are successfully running:

```bash
docker-compose down
```
## Technologies Used
* Programming Language: JavaScript
* Database: PostgreSQL
