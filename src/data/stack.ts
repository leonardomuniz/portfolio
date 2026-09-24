// ==========================================================
// STACK / TECNOLOGIAS
// Só o que é PRINCIPAL. O resto (infra, testes, arquitetura)
// aparece na linha de stack de cada empresa, na seção de
// experiência — não precisa repetir aqui.
// Regra: no máximo 4 categorias, ~3 itens cada.
//
// `id` é a chave estável da lista; só a categoria é traduzida,
// porque nome de tecnologia é igual nos dois idiomas.
// ==========================================================
import type { StackGrupo } from '../types'

export const stack: StackGrupo[] = [
  {
    id: 'linguagens',
    categoria: { pt: 'linguagens', en: 'languages' },
    itens: ['Node.js', 'TypeScript', 'Java'],
  },
  {
    id: 'frameworks',
    categoria: { pt: 'frameworks', en: 'frameworks' },
    itens: ['Express', 'Nest.js', 'Spring Boot'],
  },
  {
    id: 'front-end',
    categoria: { pt: 'front-end', en: 'front-end' },
    itens: ['React', 'Next.js', 'Angular'],
  },
  {
    id: 'bancos',
    categoria: { pt: 'bancos de dados', en: 'databases' },
    itens: ['PostgreSQL', 'MongoDB', 'DynamoDB'],
  },
]
