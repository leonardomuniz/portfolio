// ==========================================================
// STACK / TECNOLOGIAS
// Só o que é PRINCIPAL. O resto (infra, testes, arquitetura)
// aparece na linha de stack de cada empresa, na seção de
// experiência — não precisa repetir aqui.
// Regra: no máximo 5 categorias, ~3 itens cada. Back-end
// primeiro; front-end por último.
//
// `id` é a chave estável da lista; só a categoria é traduzida,
// porque nome de tecnologia é igual nos dois idiomas.
// ==========================================================
import type { StackGrupo } from '../types'

export const stack: StackGrupo[] = [
  {
    id: 'linguagens',
    categoria: { pt: 'linguagens', en: 'languages' },
    itens: ['Node.js', 'TypeScript', 'Python', 'Java'],
  },
  {
    id: 'frameworks',
    categoria: { pt: 'frameworks', en: 'frameworks' },
    itens: ['Express', 'Nest.js', 'Spring Boot'],
  },
  {
    id: 'bancos',
    categoria: { pt: 'bancos de dados', en: 'databases' },
    itens: ['PostgreSQL', 'MongoDB', 'DynamoDB'],
  },
  {
    id: 'mensageria',
    categoria: { pt: 'mensageria', en: 'messaging' },
    itens: ['RabbitMQ', 'BullMQ', 'AWS SQS'],
  },
  {
    id: 'front-end',
    categoria: { pt: 'front-end', en: 'front-end' },
    itens: ['React', 'Next.js', 'Angular'],
  },
]
