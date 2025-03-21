const formatearDinero = (valor) =>{
    const formatter = new Intl.NumberFormat('en-CO',{
        style:'currency',
        currency: 'COP'
    });
    return formatter.format(valor)
}


export {
    formatearDinero
}