# Show Me The Money
A compleat Impletion of the task https://github.com/DemystData/code-drills/tree/main/show-me-the-money

- Sourabh Soni
- ssourabh025@gmail.com
- +91 9516550023

# How To Run
- Make Sure you have docker installed 
- if not install it hear https://www.docker.com/products/docker-desktop/
- Clone the repo: `git clone https://github.com/SSOURABH58/FullStack.git`
- Run all docker container using: ```docker-compose up --build```
- Wait for a while for the build to finish 
- once all 3 containers are up and runing you can visit http://localhost:8080/
- the page might not load for 20-30s since teh xero api takes a while to bootup
- you can press `ctrl/cmd + c` to close 
- or use the docker desktop to monitor all 

# How To Test
might get a bit tricky 

For Back-End:
- Go to show-me-the-money-apis `cd show-me-the-money-apis`
- Run `bun/node run test:watch`

For Fount-End:
- Go to frontEnd\show-me-the-money `cd frontEnd\show-me-the-money`
- Run `bun run test`
⚠️ Front is using `Bun` instead of node so make sure to install and add you env variables
https://bun.sh/  
# Thank you
kindly respond to the email ssourabh025@gmail.com or call me at any time +91 9516550023
