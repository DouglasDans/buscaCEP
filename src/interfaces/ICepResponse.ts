export default interface ICepResponse {
    logradouro : string
    bairro : string
    cidade : {
        nome : string
    }
    estado : {
        sigla : string
    },
    cep : string
}