# Hotaru_JS Client

> 该项目已停止更新！！！新项目地址：[Hotaru.TS](https://github.com/Cytrogen/Hotaru.TS)。

这是Hotaru_JS的客户端代码。

技术栈使用了React和Socket.io作为通信。

## Docker

在项目根目录创建`docker-compose.yml`：

```yaml
version: '3'

services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    depends_on:
      - client
      - server
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf
    networks:
      - app-network

  client:
    build: ./client
    ports:
      - "3000:3000"
    networks:
      - app-network

  server:
    build: ./server
    ports:
      - "4000:4000"
    networks:
      - app-network

  mongodb:
    image: mongo
    ports:
      - "28017:27017"
    volumes:
      - mongodb_data:/data/db
    networks:
      - app-network

volumes:
  mongodb_data:

networks:
  app-network:
    driver: bridge
```

### Nginx配置

同样创建`nginx.conf`文件：

```nginx
server {
    listen 80;

    location / {
        proxy_pass http://client:3000;
    }

    location /api/ {
        proxy_pass http://server:4000;
    }

    location /socket.io/ {
        proxy_pass http://server:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
    }
}
```