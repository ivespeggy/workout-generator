# workout-generator

Overview: Users can input their personal information (such as height, weight, etc.) and their fitness experience through the front-end interface. This allows the system to generate several fitness plans for them. Then, the front-end sends a signal to the back-end. After the back-end generates the data, it creates a system for convenient check-ins.


# How to run?
## FrontEnd:
```shell
cd frontend-nextjs
npm i
npm run build
npm start
```
You also need to create a .env.local to store the host. The file should be located under app/

Your .env.local should look like this
```shell
NEXT_PUBLIC_SITE_URL=http://localhost:8080
```

## Backend
```
python3 my_app.py
```
## Dev Tunnel
devtunnel port -p create 8080
devtunnel access create -a 
devtunnel host

## Linux firewall/ Only allow localhost to call.
sudo iptables -A INPUT -p tcp --dport 8080 -s 127.0.0.1 -j ACCEPT
sudo iptables -A INPUT -p tcp --dport 8080 -j DROP


# TODO
Docker 

