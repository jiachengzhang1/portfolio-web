# Portfolio Website

[![Website](https://img.shields.io/website?label=jzhangdeveloper.com&logo=Website&url=https%3A%2F%2Fjzhangdeveloper.com%2Fexperience%2F)](https://jzhangdeveloper.com)
[![Build Status](https://travis-ci.org/jiachengzhang1/portfolio-web.svg?branch=master)](https://travis-ci.org/jiachengzhang1/portfolio-web)
![License](https://img.shields.io/github/license/jiachengzhang1/portfolio-web)


Portfolio website that showcases projects, work experiences and education history. Contents are customizable through the admin site.


## Prerequisites
- [Python 3](https://www.python.org/download/releases/3.0/)
- [Python Virtual Environment](https://docs.python.org/3/library/venv.html)
- [Django](https://www.djangoproject.com)


## Installing
First, clone the repository to the machine, then active the python virtual environment
```
git clone https://github.com/jiachengzhang1/portfolio-web.git
source path/to/active/file/active/
```
Go into the repository directory, install required packages
```
cd /path/to/the/repository/
pip install -r requirements.txt
```
The application uses SQLite in development and PostgreSQL in production. Django automatically creates a SQLite database for the application, so no extra settings required for development. Use `manage.py` to migrate.
```
python manage.py makemigrations
python manage.py migrate
```
Create a superuser, follow the prompts to set up the credential which is used for admin login.
```
python manage.py createsuperuser
```
To start the application,
```
python manage.py runserver
```
Now, the application is running on the localhost port 8000 `http://127.0.0.1:8000`. You can create the contents through the admin page `http://127.0.0.1:8000/admin`.


## Deploy on Ubuntu Server
DigitialOcean has very good [**instructions**](https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-16-04) on deploying Django application with Postgres, Nginx, and Gunicorn.

In addition, compile `SCSS` files before run `collectstatic`,
```
python manage.py compilescss
python manage.py collectstatic
```
Learn more about `django-sass-processor` through their GitHub [repository](https://github.com/jrief/django-sass-processor)


## Built With

* [Django](https://www.djangoproject.com) - The web application framework used
* [django-sass-processor](https://github.com/jrief/django-sass-processor) - Compile SASS/SCSS files on the fly
* [PostgreSQL](https://www.postgresql.org/) - The database used by the application (producation)
* [SQLite](https://www.sqlite.org/index.html) - The database used by the application (development)


## Authors

Jiacheng Zhang


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


## Acknowledgments

The design of the website is inspired by jtom.me and andrewborstein.com
