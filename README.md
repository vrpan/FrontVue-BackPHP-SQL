# FrontVue-BackPHP-SQL
### Prerequisites: Docker and Docker Compose should be installed on your developer's machine and dev server
### Clone the repo
### Run docker-compose
```
cd ~
cd FrontVue-BackPHP-SQL
```
```
docker-compose up -d
```
### Check if containers is Up
```
docker-compose ps
```
The output should be simmilar:
```

         Name                   Command           State           Ports
--------------------------------------------------------------------------------
frontvue-backphp-        docker-php-entrypoint    Up      0.0.0.0:8000-
sql_backend_1            apac ...                         >80/tcp,:::8000-
                                                          >80/tcp
frontvue-backphp-        docker-entrypoint.sh     Up      0.0.0.0:3306-
sql_db_1                 mysqld                           >3306/tcp,:::3306-
                                                          >3306/tcp, 33060/tcp
frontvue-backphp-        /docker-entrypoint.sh    Up      0.0.0.0:8080-
sql_frontend_1           ngin ...                         >80/tcp,:::8080-
                                                          >80/tcp
frontvue-backphp-        /app/docker-             Up      0.0.0.0:80-
sql_proxy_1              entrypoint.sh  ...               >80/tcp,:::80->80/tcp
```
### Check connectivity to app
```
curl app.loc
```
```
curl api.app.loc
```
