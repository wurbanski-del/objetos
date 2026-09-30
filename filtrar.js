const clientes = require("./cliente.json");

function filtrarApartamentoSemComplemento(clientes){
 return clientes.filter ((cliente) => {
    return (
cliente.endereco.apartamento && !cliente.endereco.hasOwnproperty("complemento")
    );
 });   
}

const filtrados = filtrarApartamentoSemComplemento(cliente);

console.log(filtrados);

