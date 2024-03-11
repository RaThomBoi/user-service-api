#How to run this application as container

specify environment variable with -e option when you running container.
eg. docker run -e DATABASE_URL=postgresql://user:admin@localhost:5100/server?schema=user-service --name your_container_name your_image_name
