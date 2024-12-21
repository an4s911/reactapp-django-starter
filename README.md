# Vite Django React Tailwind Template

This template provides a streamlined setup for integrating a React + Tailwind app (built with Vite) into a Django project. It's designed to be used as a Django app, offering a modern front-end development experience within a robust Python web framework.

## Features

- React for building user interfaces
- Tailwind CSS for rapid styling
- Vite for fast builds and hot module replacement
- Seamless integration with Django

## Prerequisites

- Python 3.x
- Node.js and Yarn
- Django

## Setup Instructions

1. Ensure you have an existing Django project. Your initial file structure should look like this:

   ```
   /
   ├── project/
   │   ├── __init__.py
   │   ├── asgi.py
   │   ├── settings.py
   │   ├── urls.py
   │   └── wsgi.py
   └── manage.py
   ```

2. Clone this template repository:

   ```bash
   git clone https://github.com/an4s911/reactapp-django-starter.git yourappname
   ```

   After cloning, your file structure will update to:

   ```
   /
   ├── project/
   │   ├── asgi.py
   │   ├── __init__.py
   │   ├── settings.py
   │   ├── urls.py
   │   └── wsgi.py
   ├── manage.py
   └── yourappname/
      ├── src/
      │   ├── App.jsx
      │   ├── index.css
      │   └── main.jsx
      ├── templates/
      │   └── base.html
      ├── __init__.py
      ├── apps.py
      ├── views.py
      ├── index.html
      ├── package.json
      ├── vite.config.js
      ├── tailwind.config.js
      ├── eslint.config.js
      ├── postcss.config.js
      ├── yarn.lock
      └── README.md
   ```

3. Update the app name in `yourappname/apps.py`:

   ```python
   from django.apps import AppConfig

   # Update the app name
   class YourAppNameConfig(AppConfig):  # <-- here
       default_auto_field = "django.db.models.BigAutoField"
       name = "yourappname"  # <-- and here
   ```

4. Install dependencies:

   ```bash
   cd yourappname
   yarn install
   ```

5. Start the Vite build process:

   ```bash
   yarn refresh
   ```

   **Note:** For development purposes only, you can run `yarn dev` to start the Vite development server. This cannot be used alongside Django.

6. Add the app to your Django project in `project/settings.py`:

   ```python
   INSTALLED_APPS = [
       # ... other apps
       "yourappname",
   ]
   ```

7. Configure static files in `project/settings.py`:

   ```python
   STATICFILES_DIRS = [
       BASE_DIR / "yourappname/dist",
   ]
   ```

8. Update `project/urls.py` to include your app's views:

   ```python
   from django.urls import path
   from yourappname import views

   urlpatterns = [
       # ... other urls
       path("", views.index, name="index"),
   ]
   ```

9. Start the Django development server:

   ```bash
   python manage.py runserver 0.0.0.0:8000
   ```

10. Visit `http://localhost:8000` in your browser to see your app in action!

## Development Workflow

1. Make changes to your React components in the `yourappname/src` directory.
2. The Vite build process (`yarn refresh`) will automatically rebuild your app.
3. Refresh your browser to see the changes.

## Production Deployment

Before deploying to production:

1. Run `yarn build` to create an optimized production build.
2. Ensure `DEBUG = False` in your Django settings.
3. Configure your web server to serve static files from the `yourappname/dist` directory.

## Troubleshooting

- If you encounter any issues with static files, run `python manage.py collectstatic`.
- Make sure your Django `STATIC_URL` and `STATIC_ROOT` setting is correctly configured.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
