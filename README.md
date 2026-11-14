# E-commerce — Projeto 3

## Como rodar

```bash
npm install
cp .env.example .env docker compose up --build
```

A API sobe em `http://localhost:3000`.

Subir containers:
```bash
docker compose up --build -d
```
Criar pedido:

```bash
curl -X POST http://localhost:3000/orders \
-H "Content-Type: application/json" \
-d '{
  "customer": "cliente@ethereal.email",
  "items": [{ "productId": 1, "quantity": 1 }],
  "paymentMethod": "pix"
}'
```

Buscar pedido:
```bash
curl -i http://localhost:3000/orders/1
```
Se não existir Id:
```bash
curl -i http://localhost:3000/orders/999
```