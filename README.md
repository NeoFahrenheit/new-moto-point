# new-moto-point

Redesenho do site da **New Moto Point** — peças, acessórios e oficina de motos
na Av. Farrapos, 1255, Porto Alegre/RS.

| | |
| --- | --- |
| [`design/`](design/README.md) | O site novo: Astro 7 + Tailwind 4, estático, sem JavaScript de runtime. |
| [`DEPLOY.md`](DEPLOY.md) | Como publicar na Hostinger (GitHub Actions compila, branch `deploy` vira o `public_html`). |
| `.github/workflows/deploy.yml` | Build e publicação automáticos a cada push na `main`. |

As imagens na raiz são as referências visuais usadas como inspiração.

## As três versões

Mesmo conteúdo, mesmos dados, mesma stack — três linguagens visuais. Cada uma
vive na sua branch:

| Branch | Nome | Cara |
| --- | --- | --- |
| `main` | Versão 1 | Grafite escuro, vermelho chapado, Barlow Condensed. |
| `versao-2-asfalto` | Versão 2 | Preto puro, vermelho em gradiente, cortes na diagonal, Montserrat 900. |
| `versao-3-editorial` | Versão 3 | Papel creme, âmbar, serifa Playfair, listas em fio de régua. |

### Trocando de versão

Cada versão usa uma fonte diferente, então o `package.json` muda entre as
branches. E ele fica em **`design/`**, não na raiz do repositório — rodar
`npm install` na raiz dá `ENOENT: package.json`:

```bash
git checkout versao-2-asfalto
cd design
npm install     # sem isso o build para em "@fontsource/... não encontrado"
npm run dev     # http://localhost:4321
```

## Rodando

```bash
cd design
npm install
cp .env.example .env    # e ajuste SITE_URL
npm run dev             # http://localhost:4321
```
