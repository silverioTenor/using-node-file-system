import fs from 'fs';
import path from 'path';

import IUser from "../interfaces/user.interface";

class GetUserService {
   public run(): IUser[] {
      const filePath = path.join(__dirname, '..', 'database', 'users.json');
      const fileBuffer = fs.readFileSync(filePath).toString();
      const users: Array<IUser> = JSON.parse(fileBuffer)?.exports;

      return users;
   }
}

export default GetUserService;