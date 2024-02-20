import axios from "axios"

export default class ApiHandler {
   private readonly API_BASE : string = "https://www.cepaberto.com/api/v3";
   private readonly API_KEY : string = process.env.API_KEY || "";
   private handler : any;

   constructor(){
      this.handler = axios.create({
         baseURL: this.API_BASE,
         headers: {
            'Authorization': `Token ${this.API_KEY}`,
            'Content-Type': 'application/json'
         }
      })
   }

   public async request(method : "get", requestType : string, params : string) {
      const endpoint : string = `/${requestType}/?${requestType}=${params}`

      return await this.handler[method](endpoint)
      .then((res : any) => {
         return res.data;
      })
   }

}