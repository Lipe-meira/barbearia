# Barber

Aplicação de barbearia desenvolvida com Next.js para gerenciar barbearias, serviços, telefones, usuários e agendamentos.

## Tecnologias

- Next.js
- React
- TypeScript
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Docker

## Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- npm

O Docker Desktop precisa estar aberto para executar o PostgreSQL localmente.

## Instalação

Instale as dependências do projeto:

```bash
npm install
```

Crie um arquivo `.env` na raiz do projeto com a conexão do banco:

```env
DATABASE_URL="postgresql://barber:barber_dev@127.0.0.1:5433/barber?schema=public"
```

Os dados dessa URL correspondem à configuração presente no arquivo `compose.yml`.

## Banco de dados com Docker

Com o Docker Desktop aberto, inicie o PostgreSQL em segundo plano:

```bash
docker compose up -d
```

Confira o estado do container:

```bash
docker compose ps
```

Para acompanhar os logs do banco:

```bash
docker compose logs -f postgres
```

Para parar e remover o container sem apagar os dados:

```bash
docker compose down
```

Para reiniciar o banco:

```bash
docker compose restart postgres
```

> Não execute `docker compose down -v` a menos que queira apagar permanentemente o volume e todos os dados locais do banco.

## Prisma e migrations

Depois que o PostgreSQL estiver rodando, crie a primeira migration:

```bash
npx prisma migrate dev --name init
```

Para alterações futuras no schema, use um nome que descreva a mudança:

```bash
npx prisma migrate dev --name nome_da_alteracao
```

Outros comandos úteis:

```bash
# Validar o schema
npx prisma validate

# Formatar o schema
npx prisma format

# Gerar o Prisma Client
npx prisma generate

# Abrir a interface para visualizar e editar os dados
npx prisma studio
```

O schema está localizado em `prisma/schema.prisma` e as migrations são criadas em `prisma/migrations`.

## Executando a aplicação

Com o banco iniciado e as migrations aplicadas, execute:

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts disponíveis

```bash
npm run dev     # Inicia o ambiente de desenvolvimento
npm run build   # Gera a versão de produção
npm run start   # Executa a versão de produção
npm run lint    # Verifica problemas no código
```

## Estrutura principal

```text
app/                  Aplicação Next.js
prisma/
  schema.prisma       Modelagem do banco de dados
  migrations/         Histórico das migrations
public/               Arquivos estáticos
compose.yml            Configuração do PostgreSQL no Docker
prisma.config.ts       Configuração do Prisma
```

## Fluxo rápido para desenvolvimento

Nas próximas vezes em que abrir o projeto, o fluxo normal será:

```bash
docker compose up -d
npx prisma migrate dev
npm run dev
```

Ao terminar:

```bash
docker compose down
```
