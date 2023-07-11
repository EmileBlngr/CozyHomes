import ISejourResume from "../interfaces/ISejourResume";
import { AllBouchonSejourResume } from "./bouchons/bouchonSejourResume";

const Bouchon = true;

export const GetSejourResume = async (email: string, password: string) => {
    if (Bouchon) {
        const sejours: ISejourResume[] = await AllBouchonSejourResume();
        return Promise.resolve({
            status: 200,
            json: () => {
                return Promise.resolve(sejours)
            }
        });
      }
      else {
        return Promise.resolve('404');
      }
    }