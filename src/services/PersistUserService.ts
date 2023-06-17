import fs from 'fs';
import path from 'path';

import IUser from "../interfaces/user.interface";

class PersistUserService {
   public run(users: IUser[]): void {
      const filePath = path.join(__dirname, '..', 'database', 'users.json');
      const data = JSON.stringify({ exports: users }, null, 3);
   
      try {
         fs.writeFileSync(filePath, data);
      } catch (error) {
         console.error(error);
      }
   }
}

export default PersistUserService;