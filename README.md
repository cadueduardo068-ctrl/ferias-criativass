# Férias Criativas — Mundo Criativo Kids

Landing page em React, TypeScript, Vite, Tailwind CSS, Framer Motion e Lucide. As prévias WebP são renderizações reais do PDF fornecido pelo usuário (10 páginas). O arquivo completo não é distribuído publicamente pela landing page.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```sh
npm install
npm run dev
npm run build
```

## Configurar antes de vender

1. Copie `.env.example` para `.env.local`. O checkout informado já está configurado: https://pay.cakto.com.br/eswajd5_1255051. Para substituí-lo, defina `VITE_CHECKOUT_URL` com outro endereço HTTPS da Cakto. Todos os CTAs usam `CHECKOUT_URL`. Sem endereço válido, exibem um aviso, sem simular compra.
2. Opcional: defina `VITE_META_PIXEL_ID`. Só é carregado após consentimento. PageView e ViewContent são enviados ao inicializar; InitiateCheckout ocorre ao navegar para um checkout configurado. Purchase não é disparado. Nenhum token privado deve entrar nas variáveis VITE.
3. Edite `src/config/product.ts`: preço, contato, links completos de privacidade, termos, reembolso e licença. Os textos atuais identificam informações pendentes, não substituem os documentos comerciais finais.
4. As seis categorias já foram conferidas com o PDF. Para atualizar o produto, substitua as imagens de `public/material` e os caminhos em `src/config/product.ts`. A capa está em `Illustrations.tsx`. As páginas 3, 4, 5, 6, 7 e 9 estão disponíveis no visualizador; o PDF também contém guia da família, caça-palavras e certificado.
5. Para páginas reais, use WebP/AVIF comprimidos e defina dimensões adequadas. As prévias já estão em WebP. A página não solicita fontes externas.
6. A imagem social `public/social.png` e as URLs absolutas de Open Graph/canônica apontam para a publicação de revisão. Atualize-as se publicar em outro domínio.
7. Revise a política de dados, a identidade do vendedor, licença, atendimento e reembolso antes de enviar tráfego pago. Não existem depoimentos ou números de compradores fictícios.

## Cloudflare Pages

Framework: Vite. Build: `npm run build`. Diretório de saída: `dist`. Defina as variáveis VITE no ambiente de build e reconstrua após alterações. Não precisa de Worker ou servidor; `_headers` é copiado para a saída. O manifesto `.openai/hosting.json` serve à publicação privada de revisão no Sites e não é necessário para o Cloudflare Pages.

## Interações e acessibilidade

Modal nativo com foco contido, Escape e retorno de foco; setas e gestos no visualizador; menu mobile; FAQ nativo; recusa de rastreamento sem impedir a compra; preferências reabertas no rodapé; movimento reduzido respeitado; CTA mobile oculto durante consentimento e modais. Preferência salva em localStorage. A revogação bloqueia eventos posteriores e envia `consent revoke` ao Pixel; cookies já existentes do provedor podem permanecer até expirar ou serem apagados pelo navegador.

## Avaliações na primeira seção

Os dois prints enviados pelo usuário estão em public/avaliacoes, convertidos em WebP sem alteração de conteúdo. As frases, caminhos e aviso de diferença em relação ao PDF ficam em src/config/reviews.ts. A primeira seção reúne preço, compra e avaliações. Cada card abre a conversa completa com navegação entre os dois prints. Não foram adicionados nomes, estrelas, notas ou selos de verificação.

