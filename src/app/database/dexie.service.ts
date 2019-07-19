import Dexie from 'dexie';

export class DexieService extends Dexie {
  constructor() {
    super('CommentDatabase');
    this.version(1).stores({
      comments: '++id',
    });
  }
}
