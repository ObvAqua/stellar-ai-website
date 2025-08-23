# Docker Setup for Stellar AI Website

This document explains how to run the Stellar AI website using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (usually comes with Docker Desktop)

## Quick Start

### Production Build

1. **Build and run the production container:**
   ```bash
   docker-compose up --build
   ```

2. **Access the website:**
   Open your browser and go to `http://localhost:3000`

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

### Development Build

1. **Run in development mode with hot reloading:**
   ```bash
   docker-compose --profile dev up --build
   ```

2. **Access the development server:**
   Open your browser and go to `http://localhost:3001`

## Individual Docker Commands

### Production

```bash
# Build the production image
docker build -t stellar-ai-website .

# Run the production container
docker run -p 3000:3000 stellar-ai-website

# Run in detached mode
docker run -d -p 3000:3000 --name stellar-ai stellar-ai-website
```

### Development

```bash
# Build the development image
docker build -f Dockerfile.dev -t stellar-ai-website-dev .

# Run the development container
docker run -p 3001:3000 -v $(pwd):/app stellar-ai-website-dev
```

## Docker Compose Commands

```bash
# Start all services
docker-compose up

# Start in detached mode
docker-compose up -d

# Start only development service
docker-compose --profile dev up

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and start
docker-compose up --build

# Remove containers and volumes
docker-compose down -v
```

## Container Management

```bash
# List running containers
docker ps

# Stop a specific container
docker stop <container_id>

# Remove a container
docker rm <container_id>

# View container logs
docker logs <container_id>

# Execute commands in running container
docker exec -it <container_id> /bin/sh
```

## Health Check

The container includes a health check endpoint at `/api/health`. You can test it with:

```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "service": "stellar-ai-website"
}
```

## Environment Variables

You can customize the application by setting environment variables:

```bash
# In docker-compose.yml
environment:
  - NODE_ENV=production
  - NEXT_TELEMETRY_DISABLED=1
  - PORT=3000

# Or when running with docker run
docker run -e NODE_ENV=production -p 3000:3000 stellar-ai-website
```

## Multi-Stage Build

The production Dockerfile uses a multi-stage build to optimize the image size:

1. **deps stage**: Installs production dependencies
2. **builder stage**: Builds the Next.js application
3. **runner stage**: Creates the final production image

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, change the port mapping:
```bash
docker run -p 3001:3000 stellar-ai-website
```

### Permission Issues
If you encounter permission issues on Linux:
```bash
sudo docker-compose up
```

### Build Cache Issues
Clear Docker build cache:
```bash
docker builder prune
```

### Container Won't Start
Check the logs:
```bash
docker-compose logs stellar-ai-website
```

## Production Deployment

For production deployment, consider:

1. **Using a reverse proxy** (nginx, traefik)
2. **Setting up SSL/TLS certificates**
3. **Configuring environment variables**
4. **Setting up monitoring and logging**

Example with nginx:
```yaml
version: '3.8'
services:
  stellar-ai-website:
    build: .
    expose:
      - "3000"
    environment:
      - NODE_ENV=production

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - stellar-ai-website
```

## Security Considerations

- The production container runs as a non-root user (nextjs)
- Only necessary files are copied to the final image
- Environment variables are used for configuration
- Health checks ensure container health monitoring

## Performance Optimization

- Multi-stage build reduces final image size
- Alpine Linux base image for smaller footprint
- Standalone output for optimized Next.js builds
- Production-only dependencies in final image 