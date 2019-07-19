import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent {

  @Output() addComment = new EventEmitter();
  comment = '';

  onAddComment() {
    this.addComment.emit(this.comment);
  }

}
