FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /var/www/html/devops-dashboard
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY dist .
COPY default.conf /etc/nginx/conf.d/default.conf
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]