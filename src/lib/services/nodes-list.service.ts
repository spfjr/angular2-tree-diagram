import { Injectable } from '@angular/core';
import { TreeDiagramNodesList } from '../classes';

@Injectable()
export class NodesListService {
  private nodesList: TreeDiagramNodesList;

  public loadNodes(nodes: any[], config) {
    this.nodesList = new TreeDiagramNodesList(nodes, config);

    return this.nodesList;
  }

  public getNode(guid) {
    return this.nodesList.getNode(guid);
  }

  public newNode() {
    this.nodesList.newNode();
  }

  public makerNode() {
    return this.nodesList.makerGuid;
  }

  public toJsonString() {
    return JSON.stringify(this.nodesList.serialize());
  }
}
