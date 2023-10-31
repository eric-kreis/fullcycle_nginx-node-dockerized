# Docker and Nginx Reverse Proxy Challenge

## Overview

This project is a challenge solution from FullCycle's Docker course and demonstrates how to use Nginx as a reverse proxy to route HTTP requests to a NodeJS application.
The application interacts with a MySQL database to store names and returns a list of stored names in an HTML response.

## Architecture

- **Nginx**: Serves as a reverse proxy to forward requests to the Node.js application.
- **NodeJS Application**: Handles HTTP requests, interacts with the MySQL database, and returns an HTML response.
- **MySQL Database**: Stores the list of names.

## Requirements

- Docker
- Docker Compose

## Getting Started

### Running the Application

1. Clone the repository:

```sh
git clone git@github.com:eric-kreis/fullcycle_nginx-node-dockerized.git
cd fullcycle_nginx-node-dockerized
```

2. Start the Docker containers:

```sh
docker compose up -d
```

3. Access the application in your browser:

- Open your browser and navigate to [http://localhost:8080](http://localhost:8080).

You should see a message "Full Cycle Rocks!" along with a list of names retrieved from the MySQL database.

### Stopping the Application

To stop the Docker containers, run:

```sh
docker compose down
```

## Configuration

- The Nginx configuration is located in `nginx.conf`.
- The NodeJS application code is located in `app.js`.
- The MySQL initialization script is located in `init.sql`.
