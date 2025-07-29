# 🚀 NestJS Backend Template

A production-ready NestJS boilerplate designed for building scalable REST APIs with **TypeORM**, **PostgreSQL**, authentication, and seeding support. It provides a clean architecture with modular structure, best practices, and built-in Docker setup for quick deployment.

## ✨ Features
- ✅ **NestJS v10** with modular architecture  
- ✅ **TypeORM v0.3** integration with migrations & seeding  
- ✅ **PostgreSQL** database support  
- ✅ **Authentication & Authorization** using JWT & Passport  
- ✅ **Class Validation & Transformation** for DTOs  
- ✅ **Environment configuration** with `dotenv`  
- ✅ **Docker & docker-compose** support  
- ✅ **Pre-configured ESLint, Prettier, and Nodemon**  
- ✅ **Testing setup** with Jest and Supertest  

---

# Install dependencies (pnpm preferred)
```bash
pnpm install
```
# Copy environment variables
cp env .env


### Running the app

### Development
```bash
pnpm start
```

### Watch mode
```bash
pnpm run start:dev
```

### Production build
```bash
pnpm run build && pnpm start:prod
```

### Using Docker
```bash
docker-compose up --build
```

### Environment Variables
DATABASE_HOST=localhost

DATABASE_PORT=5432

DATABASE_USER=postgres

DATABASE_PASSWORD=postgres

DATABASE_NAME=nest_template

JWT_SECRET=your_secret_key

JWT_EXPIRATION=3600


# Database Migrations & Seeding

### Run migrations
```bash
pnpm db:migrate
```

### Drop schema
```bash
pnpm db:drop
```

### Run seeders
```bash
pnpm db:seed
```
