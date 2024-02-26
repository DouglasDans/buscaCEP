import { APIResponse } from "@/interfaces/APIResponse";
import axios from "axios"

export default class ApiHandler {
   private readonly API_BASE : string = "https://viacep.com.br/ws/";
   private handler : any;

   constructor(){
      this.handler = axios.create({
         baseURL: this.API_BASE
      })
   }

   public async request(method : "get" | "test", params : string, body? : object) : Promise<APIResponse> {

      if (method === "test") {
         return this.testAPI()
      }

      const endpoint : string = `${params}/json/`

      return await this.handler[method](endpoint)
      .then((res : any) => {
         return res.data;
      })
   }
   
   private testAPI() : APIResponse {
      return {
         uf: "SP",
         ibge: "string",
         gia: "string",
         ddd: "string",
         siafi: "string",
         cep: "08412-180",
         localidade: "São Paulo",
         logradouro: "Av das pidaíbas",
         complemento: "rua",
         bairro: "Guaranases"
      }
   }

}
