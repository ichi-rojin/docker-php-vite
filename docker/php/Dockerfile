FROM php:8.2-apache

RUN apt-get update && \
    apt-get install -y \
    libzip-dev \
    zip \
    && docker-php-ext-install pdo_mysql zip

COPY public/ /var/www/html/

RUN chown -R www-data:www-data /var/www/html \
    && a2enmod rewrite

EXPOSE 80