
export default async function verifyCepAndFetch(cep : string) {
    if (isValid(cep)){
        return await getCEP(cep)
    }

}

function isValid(cep : string) : boolean {
    return true
}

async function getCEP(cep : string) {
    let obj : object = {}

    const requests =  fetch(`http://localhost:3000/get?request=cep&params=${cep}`)
        .then((res : any) => res.json())
        .then(json => {
            obj = json
        })
    await Promise.resolve(requests)

    return obj
}