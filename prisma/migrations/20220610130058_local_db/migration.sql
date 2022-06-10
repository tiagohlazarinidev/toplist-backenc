-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "streetname" TEXT NOT NULL,
    "housenumber" TEXT NOT NULL,
    "borough" TEXT NOT NULL,
    "cityname" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "price" REAL NOT NULL,
    "nameproduct" TEXT NOT NULL,
    "qnty" INTEGER NOT NULL,
    "brand" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "product_rent" (
    "clientId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    PRIMARY KEY ("clientId", "productId"),
    CONSTRAINT "product_rent_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_rent_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- CreateIndex
CREATE UNIQUE INDEX "products_nameproduct_key" ON "products"("nameproduct");
