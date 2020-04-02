/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

function qualTriangulo (x,y,z) {

    if (x === y && y === z && z === x)
    return console.log('Triangulo Equilatero')
  
     if (x === y || z === x || y === z )
    return console.log('Triangulo Isoceles') 
   
    if (x !== y !== z)
    return console.log('Triangulo Escaleno')

} 

qualTriangulo(3,3,3)

qualTriangulo(2,2,3)

qualTriangulo(1,2,3)