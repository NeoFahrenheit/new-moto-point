# New Moto Point — versão 3 (“Editorial”)

Terceira proposta visual para o site da **New Moto Point**, loja de peças,
acessórios e oficina de motos na Av. Farrapos, 1255 — Bairro Floresta, Porto
Alegre/RS.

Mesmo conteúdo e mesma stack das outras versões. O que muda é a linguagem
visual: fundo de papel, serifa editorial, âmbar no lugar do vermelho e listas
em fio de régua.

## O que diferencia esta versão

| | `main` (v1) | `versao-2-asfalto` | `versao-3-editorial` |
| --- | --- | --- | --- |
| Base | grafite escuro | preto puro | **papel creme** |
| Acento | vermelho chapado | vermelho em gradiente | **âmbar** |
| Título | Barlow Condensed, caixa alta | Montserrat 900, caixa alta | **Playfair Display, caixa normal** |
| Ênfase | palavra em vermelho | palavra em vermelho | **palavra em itálico âmbar** |
| Cantos | arredondados | retos | **pílula (botões redondos)** |
| Ritmo | seções escuras | cortes diagonais | **faixas alternadas papel/tinta** |

Blocos que só existem aqui, vindos da referência: a **abertura com foto
atravessando a borda** entre o preto e o papel, a **lista de serviços em fio de
régua** com botão redondo de seta, a **lista de especialidades dividida em
torno de uma foto torta** e os **depoimentos como cartões de papel** sobre a
faixa preta.

## Stack

| Peça | Escolha | Motivo |
| --- | --- | --- |
| Framework | **Astro 7** | Site estático: HTML pronto no servidor, ótimo para SEO local e para celular. |
| Estilo | **Tailwind CSS 4** | Tokens de marca no `@theme`, sem arquivo de config. |
| Tipografia | **Playfair Display + Inter** (Fontsource) | Auto-hospedadas — sem requisição ao Google Fonts. |
| Imagens | `astro:assets` | WebP + `srcset` responsivo gerados no build. |
| Linguagem | TypeScript | `astro check` sem erros. |

O site publicado **não carrega nenhum arquivo JavaScript**: os dois scripts
(menu do celular e revelação ao rolar) são pequenos e ficam embutidos no HTML.

## Rodando

```bash
npm install
cp .env.example .env   # e ajuste SITE_URL
npm run dev            # http://localhost:4321
npm run build          # gera dist/
npm run preview        # serve o dist/
npx astro check        # tipos e diagnósticos
```

`SITE_URL` define a URL canônica, o `sitemap.xml`, o `robots.txt` e as tags de
compartilhamento. Sem ela o build avisa e usa um endereço de exemplo.

> Cada versão usa uma fonte diferente, então o `package.json` muda entre as
> branches. **Ao trocar de versão, rode `npm install` de novo** — senão o build
> para dizendo que não acha o `.css` da fonte.

## Onde mexer no conteúdo

Os dados são exatamente os mesmos das outras versões — trocar de branch não
exige reescrever nada de conteúdo:

| Arquivo | O que tem |
| --- | --- |
| `src/data/site.ts` | Endereço, telefones, WhatsApp, e-mail, horários, redes, marcas. Também gera os links de WhatsApp com mensagem pronta (`zap`, `zapProduto`, `zapServico`). |
| `src/data/catalogo.ts` | Ofertas e vitrines (chuva, baús, viseiras, óleos), com preço, tamanho e marca. |
| `src/data/servicos.ts` | Serviços da oficina, especialidades, diferenciais, depoimentos e as 4 etapas do atendimento. |

### Adicionar um produto

1. Coloque a foto em `src/assets/img/<categoria>/`.
2. Importe a imagem no topo de `src/data/catalogo.ts`.
3. Acrescente o item na vitrine correspondente:

```ts
{ nome: 'Baú 52L', marca: 'Pro Tork', preco: 289, img: bau52 }
```

`preco` é opcional — sem ele o cartão mostra “Consulte o valor”. Com
`precoAntigo` o cartão ganha o selo de desconto automaticamente.

## Estrutura

```
public/              vai direto para a raiz do site
  .htaccess          HTTPS, cache, segurança (ver DEPLOY.md)
  og.jpg             imagem de compartilhamento (WhatsApp, Facebook)
  favicon.*, icon-*  ícones gerados a partir do logo da loja
  site.webmanifest
src/
  assets/img/        fotos extraídas do site atual (otimizadas no build)
  components/        seções da página + Icone.astro (SVGs inline)
    Especialidades.astro  lista dividida em torno da foto torta
    Servicos.astro        lista de serviços em fio de régua
    Numeros.astro         números da loja + diferenciais
  data/              conteúdo e catálogo
  layouts/Base.astro <head>, JSON-LD, header/footer, script de revelação
  pages/
    index.astro      monta as seções na ordem
    404.astro        página de erro, com atalhos e WhatsApp
    robots.txt.ts    gerado no build a partir do SITE_URL
  styles/global.css  tokens de cor, tipografia e utilitários
```

## Publicação

Push na `main` compila e publica sozinho. O passo a passo da Hostinger, a
configuração do Git no hPanel e a lista de problemas comuns estão em
[../DEPLOY.md](../DEPLOY.md).

> Para publicar **esta** versão em vez da `main`, ajuste o gatilho do workflow
> em `.github/workflows/deploy.yml` (a lista `branches:`) ou faça o merge desta
> branch na `main`.

## Decisões que valem saber

- **Todo botão leva ao WhatsApp com a mensagem já escrita**, incluindo o nome e
  o preço do produto ou o serviço a agendar. Na lista de serviços, a linha
  inteira é clicável — por isso o botão redondo é `<span>`, e não um segundo
  link dentro do primeiro.
- **Dados estruturados `MotorcycleRepair`** em `Base.astro` (endereço, horários,
  geolocalização, redes) para aparecer melhor na busca local e no Maps.
- **Nenhuma nota ou média de avaliação é afirmada.** Os dois depoimentos são
  transcrições das avaliações públicas do Google; as estrelas aparecem apenas
  por depoimento, que são de 5 estrelas.
- **A foto da abertura atravessa a borda com margem negativa**, não com altura
  fixa: o tamanho da faixa preta vem do texto, então nada é cortado se a
  manchete quebrar em mais linhas.
- **A animação de entrada é enfeite.** O estado escondido só é aplicado depois
  que o script confirma que consegue revelá-lo; sem JS, sem
  `IntersectionObserver` ou com `prefers-reduced-motion`, o conteúdo aparece
  normalmente.
- **O mapa é o embed sem chave de API do Google Maps**, com aviso de
  carregamento atrás e botão “Traçar rota” como alternativa.

## Pendências para a loja confirmar

- A página de ofertas do site antigo publica **dois anúncios de “Luva Gutti Fem
  tam. P”** com preços diferentes (R$ 99 e R$ 89). Foram mantidos como estão —
  vale conferir qual é o correto.
- Falta preço de baús, grelhas e viseiras; hoje esses cartões mostram “Consulte
  o valor”.
- O endereço final do site ainda não foi definido. Ele vem da variável
  `SITE_URL` (veja [../DEPLOY.md](../DEPLOY.md)).
