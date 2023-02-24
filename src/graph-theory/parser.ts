import { GraphData, IEdge, IVertex } from './graph/graph.interface'
import { Node, Tree } from './tree/tree.interface'

export type Parser = (tree: Node, graph?: GraphData, parent?: Node) => GraphData
