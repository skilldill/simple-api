import { initApi } from "./initApi";
import { personsService } from "./persons";

const api = initApi();

api.get("/healthcheck", (_, res) => {
  res.send({ status: "OK" });
});

api.get("/persons", (_, res) => {
  res.send(personsService.getPersons());
});

api.post("/persons", (req, res) => {
  const person = req.body;
  personsService.addPerson(person);

  res.send(personsService.getPersons());
});
