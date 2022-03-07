To run the web application locally on your computer, you need to install mongodb and start a database server.
Next you need to install node and react.
Make a config.env file in the 'BACKEND' folder and paste the following in it
PORT= 5000
WEB_SECRET = "W0RDR@CE"

DB_URL="mongodb://64.227.129.80:27017/wordrace?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

Then, in the 'BACKEND' folder, run the command 'npm i' and let it complete. Then run 'nodemon index.js'.
For the frontend, run the command 'npm i' out of the BACKEND folder and let it complete as well. This takes quite some time, so just leave it for 5-10 mins.
Then run the command 'npm run start', and once the sevrer start, open localhost:3000 on you browser.
WordRace is up and running on your local machine!