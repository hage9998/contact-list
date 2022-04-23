import testRoute from "./routers/contacts"
import express from 'express';
import cors from "cors"
import { createConnection } from 'typeorm';

class Server{
  private app: express.Application;
  private PORT;

  constructor(){
    this.app = express();
    this.config_routes();
    this.PORT = 8080;
  }

  public config_routes(){
    this.app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
    this.app.use(express.json());
    this.app.use(testRoute)
	this.app.get("/", function(_, res) {
      res.send("Respota da Home");
    })
  }

  public start_app(){

    createConnection()
    .then(async (_) => {
      this.app.listen(this.PORT, () => {
        console.log(`Server running on http://localhost:${this.PORT}`);
      });
    }).catch((error) => console.log(error));

  }
}

const server = new Server();
server.start_app();
