import axios from "axios"

export default class ApiHandler {
   private readonly API_BASE : string = "https://viacep.com.br/ws/";
   private handler : any;

   constructor(){
      this.handler = axios.create({
         baseURL: this.API_BASE
      })
   }

   public async request(method : "get", params : string, body? : object) {
      const endpoint : string = `${params}/json/`

      console.log(this.API_BASE + `${params}/json/`)

      return await this.handler[method](endpoint)
      .then((res : any) => {
         return res.data;
      })
   }

}