import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CommentWithID } from '../comments.service';

@Component({
  selector: 'app-listcomment',
  templateUrl: './listcomment.component.html',
  styleUrls: ['./listcomment.component.css']
})
export class ListcommentComponent {
  @Input() comments: Array<CommentWithID>;
  @Output() deleteComment = new EventEmitter();



  onDelete(id) {
    this.deleteComment.emit(id);
  }
}