# Використання офіційного образу Apache HTTP Server
FROM httpd:2.4

# Копіюємо файли веб-сайту у директорію Apache
COPY ./public/ /usr/local/apache2/htdocs/

Запуск веб-сервера:
docker run -dit --name my-apache-app -p 8080:80 -v /absolute/path/to/app-root/public:/usr/local/apache2/htdocs/ httpd:2.4
