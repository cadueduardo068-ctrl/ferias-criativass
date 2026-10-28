export const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL?.trim() || 'https://pay.cakto.com.br/eswajd5_1255051';
export const product = { name: 'Férias Criativas', brand: 'Mundo Criativo Kids', price: 19.9, currency: 'BRL', age: '4 a 8 anos', contact: '', privacy: '', terms: '', refund: '', license: '', cover: '/material/page-01.webp' };
export const price = new Intl.NumberFormat('pt-BR', {style:'currency',currency:product.currency}).format(product.price);
export const activities = [
 { title: 'Desenhos para colorir', subtitle: 'Uma aventura na floresta dos dinossauros.', type: 'flower', color: '#ffe3a0', image: '/material/page-03.webp' },
 { title: 'Labirintos divertidos', subtitle: 'Ajude o coelhinho a encontrar a cenoura.', type: 'maze', color: '#d3ecfc', image: '/material/page-04.webp' },
 { title: 'Jogos de observação', subtitle: 'Encontre as diferenças nas fazendinhas.', type: 'shapes', color: '#dfd3ff', image: '/material/page-05.webp' },
 { title: 'Letras e palavras', subtitle: 'Animais e letras. O PDF também traz caça-palavras.', type: 'letters', color: '#d7efda', image: '/material/page-06.webp' },
 { title: 'Matemática divertida', subtitle: 'Contar, somar e descobrir os números.', type: 'math', color: '#ffdbd2', image: '/material/page-07.webp' },
 { title: 'Desafios criativos', subtitle: 'Imagine e desenhe seu próprio planeta!', type: 'draw', color: '#fff0b7', image: '/material/page-09.webp' },
];
export const faq = [
 ['O material é físico?', 'Não. O Férias Criativas é um produto digital em PDF. Nenhum material físico é enviado.'],
 ['Preciso imprimir todas as páginas?', 'Não. Você pode escolher quais atividades deseja utilizar e imprimir apenas essas páginas.'],
 ['Para qual idade é indicado?', 'Principalmente para crianças de 4 a 8 anos. A adequação depende da atividade e do desenvolvimento de cada criança. Para os menores, recomendamos acompanhamento de um responsável.'],
 ['Posso utilizar no celular?', 'O PDF pode ser visualizado em dispositivos compatíveis, mas as atividades foram pensadas principalmente para impressão.'],
 ['Como recebo o material?', 'Após a confirmação do pagamento, siga as instruções da plataforma de venda para acessar o material digital.'],
 ['Posso imprimir mais de uma vez?', 'A utilização deve seguir os termos de licença informados na compra. Confira a licença final antes de comprar.'],
 ['Preciso de materiais especiais?', 'A maioria das atividades utiliza materiais comuns, como lápis, papel e lápis de cor. Consulte as orientações de cada atividade.'],
];
