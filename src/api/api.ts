require('dotenv').config()

export class Api {
   private readonly API_PATH : string = 'https://www.cepaberto.com/api/v3'
   
   constructor(){}

   public async getContent( requestType : string, params: string ){
      const response = await fetch((this.API_PATH + '/cep/' + '?cep=08412180'), {
         method: 'GET',
         headers: {
            'Authorization': `Token ${process.env.API_KEY}`,
            'Content-Type': 'application/json'
         },
      })
      const json = response.json()
      return json
   }
}