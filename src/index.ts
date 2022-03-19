import testRoute from "./routers/contacts"
import express from 'express';
import cors from "cors"

class Server{
  private app: express.Application;
  private PORT;

  constructor(){
    this.app = express();
    this.config_routes();
    this.PORT = 3000;
  }

  public config_routes(){
    this.app.use(cors())
    this.app.use(express.json());
    this.app.use(testRoute)
    
    this.app.get("/", function(_, res) {
      res.send("Respota da Home");
    })
  }

  public start_app(){
    this.app.listen(this.PORT, () => {
      console.log(`Server running on http://localhost:${this.PORT}`);
    });
  }
}

const server = new Server();
server.start_app();
