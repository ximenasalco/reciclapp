import { PrismaClient } from "@prisma/client";

// Configurar Prisma Client con logging en desarrollo
const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

export default prisma;
