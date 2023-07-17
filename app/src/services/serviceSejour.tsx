import ISejourDetail from "../interfaces/ISejourDetail";
import ISejourResume from "../interfaces/ISejourResume";
import { BouchonSejourDetail } from "./bouchons/bouchonSejourDetail";
import { AllBouchonSejourResume } from "./bouchons/bouchonSejourResume";

const Bouchon = true;

export const GetSejourResume = async () => {
    if (Bouchon) {
        const sejours: ISejourResume[] = await AllBouchonSejourResume();
        return Promise.resolve({
            status: 200,
            json: () => {
                return Promise.resolve(sejours);
            },
        });
      }
      else {
        return Promise.resolve('404');
      }
    };
export const GetSejourDetail = async (idSejour: string) => {
  if (Bouchon) {
      const sejour: ISejourDetail = await BouchonSejourDetail(idSejour);
      return Promise.resolve({
          status: 200,
          json: () => {
              return Promise.resolve(sejour);
          },
      });
    }
    else {
      return Promise.resolve('404');
    }
  };