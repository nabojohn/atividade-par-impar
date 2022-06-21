let rs = require('readline-sync')

let alunosPresentes = rs.questionFloat("Quantos alunos estão presentes na sala? ")

for(let aluno=0; aluno <= alunosPresentes; aluno++){
    
    if(aluno == 0){
    console.log("Zero " + aluno);
    }

    if(aluno % 2 == 0 ){
        console.log("Par " + aluno);
    }else{
        console.log("Impar " + aluno);
    }
    
}
