/**
 * Dados reais da New Moto Point, extraídos do site atual da loja,
 * do perfil comercial e das redes sociais.
 */

export const site = {
  nome: 'New Moto Point',
  nomeCurto: 'New Moto',
  slogan: 'Não fique rodando por aí. Vai direto em quem entende.',
  descricao:
    'Loja completa de peças e acessórios para motos com oficina própria na Av. Farrapos, em Porto Alegre. Peças, acessórios, roupas de moto e mão de obra certificada SENAC RS.',
  desde: 2012,
  url: 'https://www.newmotopoint.com.br',
} as const;

export const contato = {
  telefoneFixo: '(51) 3028-7969',
  telefoneFixoHref: 'tel:+555130287969',
  celular: '(51) 99555-9925',
  whatsappNumero: '5551995559925',
  email: 'newmoto1255@gmail.com',
} as const;

export const endereco = {
  rua: 'Av. Farrapos, 1255',
  complemento: 'esquina com a Rua Hoffmann',
  bairro: 'Floresta',
  cidade: 'Porto Alegre',
  estado: 'RS',
  cep: '90220-004',
  completo: 'Av. Farrapos, 1255 — Floresta, Porto Alegre/RS, CEP 90220-004',
  lat: -30.0196766,
  lng: -51.2100679,
  mapsDirecoes:
    'https://www.google.com/maps/dir/?api=1&destination=New+Moto+Point+Av+Farrapos+1255+Porto+Alegre+RS',
  // URL já resolvida do embed (evita o salto de redirecionamento do /maps?output=embed)
  mapsEmbed:
    'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s-30.0196766,-51.2100679!6i17!3m1!1spt-BR!5m1!1spt-BR',
} as const;

export const horarios = [
  { dia: 'Segunda a sexta', hora: '8h às 18h', obs: 'fechado das 13h às 14h' },
  { dia: 'Sábado', hora: '9h às 17h', obs: null },
  { dia: 'Domingo', hora: 'Fechado', obs: null },
] as const;

export const redes = {
  instagram: 'https://www.instagram.com/newmotopointpoa/',
  instagramHandle: '@newmotopointpoa',
  facebook: 'https://www.facebook.com/newmotopoint/',
} as const;

export const marcas = ['Honda', 'Yamaha', 'Suzuki', 'Sundown', 'Dafra'] as const;

/** Monta um link do WhatsApp com mensagem pronta. */
export function zap(mensagem?: string): string {
  const texto =
    mensagem ??
    'Olá! Vi o site da New Moto Point e gostaria de mais informações.';
  return `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(texto)}`;
}

/** Link do WhatsApp para orçamento de um produto do catálogo. */
export function zapProduto(nome: string, preco?: string): string {
  const valor = preco ? ` (${preco})` : '';
  return zap(`Olá! Tenho interesse em: ${nome}${valor}. Ainda tem disponível?`);
}

/** Link do WhatsApp para agendamento de um serviço da oficina. */
export function zapServico(servico: string): string {
  return zap(
    `Olá! Quero agendar o serviço de ${servico} na oficina da New Moto Point. Qual o próximo horário disponível?`,
  );
}
