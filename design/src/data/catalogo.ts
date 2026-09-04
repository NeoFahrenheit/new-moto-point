import type { ImageMetadata } from 'astro';

// Ofertas
import luvaFemP from '../assets/img/ofertas/luva-gutti-fem-p.jpg';
import luvaFemP2 from '../assets/img/ofertas/luva-gutti-fem-p-2.jpg';
import luvaMascM from '../assets/img/ofertas/luva-gutti-masc-m.jpg';
import luvaMascL from '../assets/img/ofertas/luva-gutti-masc-l.jpg';
import blusaGolaZiper from '../assets/img/ofertas/blusa-curtlo-gola-ziper.jpg';
import blusaTermoskin from '../assets/img/ofertas/blusa-curtlo-termoskin-masc.jpg';
import calcaTermoskinM from '../assets/img/ofertas/calca-curtlo-termoskin-masc.jpg';
import calcaTermoskinF from '../assets/img/ofertas/calca-curtlo-termoskin-fem.jpg';

// Acessórios — chuva
import chuvaPvc from '../assets/img/acessorios/roupa-chuva-pvc-masc.png';
import chuvaCostas from '../assets/img/acessorios/roupa-chuva-nylon-costas.png';
import chuvaMasc from '../assets/img/acessorios/roupa-chuva-nylon-masc.png';
import chuvaLuxo from '../assets/img/acessorios/roupa-chuva-nylon-luxo.png';
import chuvaNylon from '../assets/img/acessorios/roupa-chuva-nylon-fem.png';
import botaChuva from '../assets/img/acessorios/bota-chuva-cano-medio.jpg';

// Acessórios — baús e grelhas
import bau28 from '../assets/img/acessorios/bau-28l.jpg';
import bau35 from '../assets/img/acessorios/bau-35l.jpg';
import bau40 from '../assets/img/acessorios/bau-40l.jpg';
import bau40Grelha from '../assets/img/acessorios/bau-40l-grelha.png';
import bau45 from '../assets/img/acessorios/bau-45l.jpg';
import bau45GrelhaFerro from '../assets/img/acessorios/bau-45l-grelha-ferro.jpg';
import bau48Grade from '../assets/img/acessorios/bau-48l-grade.jpg';
import bauUtility from '../assets/img/acessorios/bau-utility.jpg';
import grelhaFerro from '../assets/img/acessorios/grelha-ferro.jpg';

// Acessórios — viseiras
import viseiraZeusCristal from '../assets/img/acessorios/viseira-zeus-811-cristal.jpg';
import viseiraZeusFume from '../assets/img/acessorios/viseira-zeus-811-fume.png';
import viseiraPeels from '../assets/img/acessorios/viseira-peels-spark-cristal.jpg';

// Peças — óleos
import oleoMobil from '../assets/img/pecas/oleo-mobil-20w50.jpg';
import oleoLubrax from '../assets/img/pecas/oleo-lubrax-20w50.jpg';
import oleoMotul from '../assets/img/pecas/oleo-motul-20w50.jpg';

export interface Produto {
  nome: string;
  img: ImageMetadata;
  /** Preço em reais. Ausente quando a loja não divulga o valor. */
  preco?: number;
  /** Preço "de" quando o item está em promoção. */
  precoAntigo?: number;
  tamanhos?: string;
  marca?: string;
}

export interface Vitrine {
  id: string;
  titulo: string;
  descricao: string;
  itens: Produto[];
}

export const moeda = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export function desconto(p: Produto): number | null {
  if (!p.preco || !p.precoAntigo) return null;
  return Math.round((1 - p.preco / p.precoAntigo) * 100);
}

/**
 * Ofertas ativas na página OFERTAS da loja.
 * Nota: o site atual publica dois anúncios de "Luva Gutti Fem tam. P"
 * com valores diferentes (R$ 99 e R$ 89) — mantidos como estão.
 */
export const ofertas: Produto[] = [
  { nome: 'Luva Gutti Feminina', tamanhos: 'P', marca: 'Gutti', precoAntigo: 269, preco: 99, img: luvaFemP },
  { nome: 'Luva Gutti Feminina', tamanhos: 'P', marca: 'Gutti', precoAntigo: 269, preco: 89, img: luvaFemP2 },
  { nome: 'Luva Gutti Masculina', tamanhos: 'M', marca: 'Gutti', precoAntigo: 399, preco: 199, img: luvaMascM },
  { nome: 'Luva Gutti Masculina', tamanhos: 'L', marca: 'Gutti', precoAntigo: 129, preco: 69, img: luvaMascL },
  { nome: 'Blusa Curtlo Gola Zíper Masculina', tamanhos: 'P · M · G', marca: 'Curtlo', precoAntigo: 269, preco: 199, img: blusaGolaZiper },
  { nome: 'Blusa Curtlo Termoskin Masculina', tamanhos: 'M · G · GG · GGG', marca: 'Curtlo', precoAntigo: 299, preco: 209, img: blusaTermoskin },
  { nome: 'Calça Curtlo Termoskin Masculina', tamanhos: 'P · M · G · GG · GGG', marca: 'Curtlo', precoAntigo: 269, preco: 199, img: calcaTermoskinM },
  { nome: 'Calça Curtlo Termoskin Feminina', tamanhos: 'P · G', marca: 'Curtlo', precoAntigo: 299, preco: 199, img: calcaTermoskinF },
];

export const vitrines: Vitrine[] = [
  {
    id: 'chuva',
    titulo: 'Chuva e frio',
    descricao:
      'Capas Pantaneiro em PVC e nylon, nos modelos masculino, feminino e com abertura nas costas. Quem roda todo dia sabe: é o acessório que mais salva o expediente.',
    itens: [
      { nome: 'Roupa de Chuva Pantaneiro PVC Masculina', marca: 'Pantaneiro', preco: 139, img: chuvaPvc },
      { nome: 'Roupa de Chuva Pantaneiro Nylon Masculina', marca: 'Pantaneiro', preco: 189, img: chuvaMasc },
      { nome: 'Roupa de Chuva Pantaneiro Nylon', marca: 'Pantaneiro', preco: 199, img: chuvaNylon },
      { nome: 'Roupa de Chuva Pantaneiro Nylon Luxo', marca: 'Pantaneiro', preco: 229, img: chuvaLuxo },
      { nome: 'Roupa de Chuva Pantaneiro Nylon c/ abertura nas costas', marca: 'Pantaneiro', preco: 239, img: chuvaCostas },
      { nome: 'Bota de Chuva Pantaneiro Cano Médio', marca: 'Pantaneiro', preco: 139, img: botaChuva },
    ],
  },
  {
    id: 'baus',
    titulo: 'Baús e grelhas',
    descricao:
      'De 28 a 48 litros, com ou sem grelha de ferro. A escolha certa para quem faz entrega e precisa de espaço com trava segura.',
    itens: [
      { nome: 'Baú 28L', img: bau28 },
      { nome: 'Baú 35L', img: bau35 },
      { nome: 'Baú 40L', img: bau40 },
      { nome: 'Baú 40L c/ grelha', img: bau40Grelha },
      { nome: 'Baú 45L', img: bau45 },
      { nome: 'Baú 45L c/ grelha de ferro', img: bau45GrelhaFerro },
      { nome: 'Grade Baú 48L', img: bau48Grade },
      { nome: 'Baú Utility', img: bauUtility },
      { nome: 'Grelha de ferro', img: grelhaFerro },
    ],
  },
  {
    id: 'viseiras',
    titulo: 'Viseiras originais',
    descricao:
      'Viseira riscada compromete a visão à noite e na chuva. Trabalhamos com originais Zeus e Peels, nas versões cristal e fumê.',
    itens: [
      { nome: 'Viseira Zeus 811 Cristal Original', marca: 'Zeus', img: viseiraZeusCristal },
      { nome: 'Viseira Zeus 811 Fumê Original', marca: 'Zeus', img: viseiraZeusFume },
      { nome: 'Viseira Peels Spark Cristal Original', marca: 'Peels', img: viseiraPeels },
    ],
  },
  {
    id: 'oleos',
    titulo: 'Óleos 20W50 4T',
    descricao:
      'As três linhas que mais saem na loja. Traga a moto que a gente faz a troca na hora, com o óleo certo para o seu modelo e quilometragem.',
    itens: [
      { nome: 'Óleo Mobil Super Moto 20W50 4T', marca: 'Mobil', img: oleoMobil },
      { nome: 'Óleo Lubrax Essencial 20W50 4T', marca: 'Lubrax', img: oleoLubrax },
      { nome: 'Óleo Motul 3000 20W50 4T', marca: 'Motul', img: oleoMotul },
    ],
  },
];

/** Linhas de peças de reposição atendidas pela loja (sem foto no catálogo atual). */
export const linhasDePecas = [
  'Cabos de acelerador e embreagem',
  'Espelhos retrovisores',
  'Buzinas',
  'Baterias',
  'Guidões',
  'Amortecedores',
  'Setas e lanternas',
  'Relés e componentes elétricos',
  'Raios e rodas',
] as const;

/** Também disponível na loja, sem foto no catálogo. */
export const semFoto = ['Grelha de plástico'] as const;
