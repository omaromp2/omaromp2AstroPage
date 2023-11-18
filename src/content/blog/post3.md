---
title: "Install Microsoft Sql Server php drivers in Laravel Sail"
description: "If you ever have a Laravel Sail container that needs to connect to a mssqlsrv database, this is how you can install the drivers."
pubDate: "Jan 24 2022"
heroImage: "https://res.cloudinary.com/practicaldev/image/fetch/s--G4bGM_qi--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/i38qlqt8ozigltv6h3u3.png"
badge: "Laravel"
---

If you ever have a Laravel Sail container that needs to connect to a mssqlsrv database, this is how you can install the drivers. 

After installing Laravel Sail and running sail:publish, you need to add this block after the RUN update-alternatives ...

``` bash
#Add repository ODBC and Install the Microsoft ODBC driver for SQL Server
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
    && curl https://packages.microsoft.com/config/ubuntu/21.04/prod.list > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get update \
    && apt-get install -y unixodbc-dev \
    && ACCEPT_EULA=Y apt-get install -y msodbcsql17 \
    && ACCEPT_EULA=Y apt-get install -y mssql-tools \
    && apt-get install -y gcc musl-dev make

# Install the PHP drivers for Microsoft SQL Server

RUN curl -O https://pear.php.net/go-pear.phar \
     && php go-pear.phar

RUN pecl channel-update pecl.php.net \
    && pecl install sqlsrv pdo_sqlsrv \
    && printf "; priority=20\nextension=sqlsrv.so\n" > /etc/php/8.0/mods-available/sqlsrv.ini \
    && printf "; priority=30\nextension=pdo_sqlsrv.so\n" > /etc/php/8.0/mods-available/pdo_sqlsrv.ini \
    && phpenmod -v 8.0 sqlsrv pdo_sqlsrv \
    && pecl clear-cache \
    && rm -rf /tmp/* /var/tmp/*
```
Now add your DB config to the .env Laravel file. 

