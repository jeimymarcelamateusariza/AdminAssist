const formatearDinero = (valor) =>{
    const formatter = new Intl.NumberFormat('en-CO',{
        style:'currency',
        currency: 'COP'
    });
    return formatter.format(valor)
}

const calcularPorcentaje = (contrato)=>{
    let porcentaje;

    if(contrato ==='fijo' || contrato ==='indefinido'){
        const saludPorc = 0.04;
        const pensionPorc = 0.04;
        porcentaje = saludPorc + pensionPorc;
    } else {
        const saludPorc = 0.125;
        const pensionPorc = 0.16;
        porcentaje = saludPorc + pensionPorc;
    }
    return porcentaje
}

const calcularDescuentos = (salario, contrato) =>{
    let descuentos;
    
    if(contrato ==='fijo' || contrato ==='indefinido'){
        descuentos = salario * (calcularPorcentaje(contrato));       
    } else {
        descuentos = salario * 0.4 * (calcularPorcentaje(contrato));
    }
    return descuentos
}

export {
    formatearDinero,
    calcularDescuentos,
    calcularPorcentaje
}