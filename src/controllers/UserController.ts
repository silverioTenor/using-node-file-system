import { Request, Response } from "express";
import { v4 as uuid } from "uuid";

import IUser from "../interfaces/user.interface";
import GetUserService from "../services/GetUserService";
import PersistUserService from "../services/PersistUserService";

const UserController = {
   list: (request: Request, response: Response) => {
      const getUserService = new GetUserService();
      const users = getUserService.run();
   
      if (users.length <= 0) {
         response.status(404).json({ message: 'Users not found!' });
      }
   
      response.json(users);
   },
   create: (request: Request, response: Response) => {
      const { name, occupation, country } = request.body;
   
      if (!name && !occupation && !country) {
         response.status(400).json({ message: 'Fields cannot be empty!' });
      } else if (!name || !occupation || !country) {
         response.status(400).json({ message: 'One or more fields are empty!' });
      }
   
      const user = {
         uid: uuid(),
         name,
         occupation,
         country
      }
   
      const getUserService = new GetUserService();
      const users = getUserService.run();
   
      users.push(user);
      
      const persistUserService = new PersistUserService();
      persistUserService.run(users);
   
      response.status(201).json(user);
   },
   changeOccupation: (request: Request, response: Response) => {
      const uid = request.params.id;
      const { occupation } = request.body;
   
      const getUserService = new GetUserService();
      const users = getUserService.run();
   
      if (users.length <= 0) {
         response.status(404).json({ message: 'Users not found!' });
      }
   
      const index = users.findIndex((_user: IUser) => _user.uid.includes(uid));
   
      if (index < 0) {
         response.status(404).json({ message: 'User not found!' });
      }
   
      users[index].occupation = occupation;

      const user = users[index];
      const persistUserService = new PersistUserService();

      persistUserService.run(users);
   
      response.status(200).json(user);
   },
   remove: (request: Request, response: Response) => {
      const uid = request.params.id;
   
      const getUserService = new GetUserService();
      const users = getUserService.run();
   
      if (users.length <= 0) {
         response.status(404).json({ message: 'Users not found!' });
      }
   
      const index = users.findIndex((_user: IUser) => _user.uid.includes(uid));
   
      if (index < 0) {
         response.status(404).json({ message: 'User not found!' });
      }
   
      users.splice(index, 1);
   
      const persistUserService = new PersistUserService();
      persistUserService.run(users);
   
      response.status(204).json({});
   }
}

export default UserController;