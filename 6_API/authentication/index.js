import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "mobi";
const yourPassword = "khan";
const yourAPIKey = "83d2cd22-735a-4c2b-913b-b2316893706a";
const yourBearerToken = "610b3188-3214-40c4-89c7-4307e8e09acb";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",  async (req, res) => {
  try {
    const result = await axios.get( API_URL + "/random");
    res.render("index.ejs", { content: result.data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(404).send("Data not found");
  }
});

app.get("/basicAuth", async (req, res) => {
 try { 
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: result.data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(404).send("Data not found");
  }

});

app.get("/apiKey", async (req, res) => {
 try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score : 5,
        apiKey: yourAPIKey,
      }});
    res.render("index.ejs", { content: result.data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(404).send("Data not found");
  }
});

app.get("/bearerToken", (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
