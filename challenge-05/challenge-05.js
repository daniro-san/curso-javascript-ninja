/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function showArr(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
showArr(arr)[1]; // 2

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getValue(arr, index) {
  return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var ar = [1, true, "verdade", 0, { prop1: "teste", prop2: "teste2" }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
getValue(ar, 0); // 1
getValue(ar, 1); // true
getValue(ar, 2); // 'verdade'
getValue(ar, 3); // 0
getValue(ar, 4); // { prop1: 'teste', prop2: 'teste2' }

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(book) {
  var obj = {
    alice: {
      quantidadePaginas: 1000,
      autor: "mamaim",
      editora: "casa",
    },
    diarioDeUmBanana: {
      quantidadePaginas: 12000,
      autor: "alguem",
      editora: "uma ai",
    },
    extraordinario: {
      quantidadePaginas: 326,
      autor: "aquela mulher",
      editora: "nao lembro",
    },
  };

  return book ? obj[book] : obj;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();
/*
{
  alice: { quantidadePaginas: 1000, autor: 'mamaim', editora: 'casa' },
  diarioDeUmBanana: { quantidadePaginas: 12000, autor: 'alguem', editora: 'uma ai' },
  extraordinario: {
    quantidadePaginas: 326,
    autor: 'aquela mulher',
    editora: 'nao lembro'
  }
}
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
`O livro Alice no país das maravilhas tem ${
  book("alice").quantidadePaginas
} páginas!`;
// 'O livro Alice no país das maravilhas tem 1000 páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
`O autor do livro Alice no país é ${book("alice").autor}.`; // 'O autor do livro Alice no país é mamaim.'

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
`O livro livro Alice no país foi publicado pela editora ${
  book("alice").editora
}.`;
// 'O livro livro Alice no país foi publicado pela editora casa.
