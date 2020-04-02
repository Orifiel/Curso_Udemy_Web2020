/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const fin_simples = (cap_init, tx_juros, tmp_apply) => {

    let vlr_juros = cap_init * tx_juros * tmp_apply
    let vlr_montante = cap_init + vlr_juros
    return console.log(vlr_montante.toFixed(2))

}

const fin_composto = (cap_init, tx_juros, tmp_apply) => {

    let vlr_montante = (cap_init * (1 + tx_juros)**tmp_apply)
    return console.log(vlr_montante.toFixed(2))

}


fin_simples(500, 0.0297, 60)
fin_composto(500, 0.0297, 60)
fin_simples(10,0.01,12)
fin_composto(10,0.01,12)
