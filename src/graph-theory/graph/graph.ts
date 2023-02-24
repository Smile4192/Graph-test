import cytoscape, {
  Core,
} from 'cytoscape'
import { Parser  } from '../parser'
import { Node } from '../tree/tree.interface'
import { IEdge, IGraph, IVertex, Visit } from './graph.interface'

/**
 * (1) Implement IGraph interface
 */
export class Graph {
  cy: Core
  constructor(tree: Node) {
    /**
     * (2) Use Parser interface to parse tree
     */

    /**
     * (3) Initialize cytoscape with parsed data
     */
    this.cy = cytoscape()
  }

  /**
   * (4) Use cytoscape under the hood
   */
  bfs(visit: Visit<IVertex, IEdge>) {}

  /**
   * (5) Use cytoscape under the hood
   */
  dfs(visit: Visit<IVertex, IEdge>) {}
}
