FROM php:8.3-apache

# 1. 基本パッケージのインストール
RUN apt-get update && \
    apt-get install -y \
    libzip-dev \
    zip \
    locales \
    libcurl4-openssl-dev \
    libonig-dev \
    libxml2-dev \
    && rm -rf /var/lib/apt/lists/*

# 2. ロケール設定
RUN echo "ja_JP.UTF-8 UTF-8" > /etc/locale.gen && \
    locale-gen ja_JP.UTF-8

# 3. PHP拡張機能のインストール
RUN docker-php-ext-configure zip && \
    docker-php-ext-install -j$(nproc) \
    pdo_mysql \
    mbstring \
    zip \
    && docker-php-ext-enable opcache

# 4. Apache設定ファイルのコピー
COPY docker/php/apache-config.conf /etc/apache2/sites-available/000-default.conf

# 5. PHP設定ファイルのコピー
COPY docker/php/php.ini /usr/local/etc/php/conf.d/custom.ini

# 6. アプリケーションコードのコピー
COPY public/ /var/www/html/

# 7. パーミッション設定
RUN chown -R www-data:www-data /var/www/html && \
    a2enmod rewrite

EXPOSE 80