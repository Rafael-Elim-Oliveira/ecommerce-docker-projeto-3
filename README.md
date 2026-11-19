# E-commerce — Projeto 3

## Como rodar

1. Configure o ambiente
```bash
npm install             //instala as dependências
cp .env.example .env    //copia as variáveis de ambiente
```
2. Suba os containers
```bash
docker compose up --build -d
```

A API sobe em `http://localhost:3000`.

## Como testar

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