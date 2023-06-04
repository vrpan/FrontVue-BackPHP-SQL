FROM php:8.0-apache

WORKDIR /var/www/html

# Enable Apache modules and install PHP extensions
RUN a2enmod rewrite \
    && docker-php-ext-install mysqli pdo pdo_mysql

# Install additional dependencies
RUN apt-get update \
    && apt-get install -y zip unzip p7zip

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copy the backend source code
COPY src/ /var/www/html/

# Install dependencies
COPY composer.json ./
RUN composer install --no-scripts --no-autoloader --no-dev

# Copy composer.lock to backend directory
COPY composer.lock /var/www/html/

# Set the user and group ownership
RUN chown -R www-data:www-data /var/www/html

# Expose port 80 for Apache
EXPOSE 80

# Start Apache server
CMD ["apache2-foreground"]
