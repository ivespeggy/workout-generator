# workout-generator

Overview: Users can input their personal information (such as height, weight, etc.) and their fitness experience through the front-end interface. This allows the system to generate several fitness plans for them. Then, the front-end sends a signal to the back-end. After the back-end generates the data, it creates a system for convenient check-ins.


# How to run?
## FrontEnd:
```shell
cd frontend-nextjs
npm i

```
You also need to create a .env.local to store the host. The file should be located under app/

Your .env.local should look like this
```shell
NEXT_PUBLIC_SITE_URL=http://localhost:8080
```

## Backend
```
pip3 install -r requirements.txt
mkdir NameOfTheVirtualEnv
pip3 -m venv ./NameOfTheVirtualEnv
# In order to activate the virtualenv, you have to cd into the bin under the dir and actiate. If you are using Linux or Mac, use
source NameOfTheVirtualEnv/bin/activate
python3 my_app.py
```

----------------
docker build -t test1 . <br>
docker run test1 <br>
docker run -p 3000:3000 my-web-server<br>
http://localhost:3000/<br>
To Do

# docker(TO DO)

docker build -t test1 . <br>
docker run test1 <br>
docker run -p 3000:3000 my-web-server<br>
http://localhost:3000/<br>


If you're seeing errors like "-bash: ./lines-of-code.sh: /bin/bash^M: bad interpreter", make sure change your linebreaks to LF.
# To DO
1. When sending email and recipient does not exist, otp code will still be generated for some reasons.

# Issue - TO BE FIX
1. When user close the register window, otp code message is still not removed or reset yet.
