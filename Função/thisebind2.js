function pessoa() {
    this.idade = 0

    const self = this 
    /*atribuindo o this para uma constante, forçando sua relação com a função
    que o utiliza*/
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 500);
}

new pessoa