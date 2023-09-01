## Template

Template to create a node service

- Connect to postgress DB
- Prisma for ORM and migrations
- Logging via winston

run following command to initiate migrations once a schema is setup

```
prisma migrate dev --name init
```

Access prisma studio

```
npx prisma studio
```

Build using docker

```
docker build  -t <tag-name> .
```

Run docker image

```
docker run --env-file .env -p <host-port>:<internal-port>  -t <tag-name>
```
