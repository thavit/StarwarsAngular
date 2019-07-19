import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { DexieService } from './database/dexie.service';

export interface Comment {
  url: string;
  remark: string;
}

export interface CommentWithID extends Comment {
  id: number;
}

@Injectable()
export class CommentsService {
  table: Dexie.Table<CommentWithID, number>;

  constructor(private dexieService: DexieService) {
    this.table = this.dexieService.table('comments');
  }

  getAll() {
    return this.table.toArray();
  }

  add(data) {
    return this.table.add(data);
  }

  update(id, data) {
    return this.table.update(id, data);
  }

  remove(id) {
    return this.table.delete(id);
  }
}