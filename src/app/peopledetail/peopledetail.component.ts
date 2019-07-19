import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ActivatedRoute, Router } from "@angular/router";

import { CommentWithID, Comment, CommentsService } from "../comments.service";

@Component({
  selector: "app-peopledetail",
  templateUrl: "./peopledetail.component.html",
  styleUrls: ["./peopledetail.component.css"]
})
export class PeopledetailComponent implements OnInit {
  commentsList: Array<CommentWithID> = [];
  person: any;
  id = this.route.snapshot.params["id"];
  url = this.router.url;

  constructor(
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private commentsService: CommentsService
  ) { }

  ngOnInit() {
    this.apiService
      .getPerson(this.route.snapshot.params["id"])
      .subscribe((data: {}) => {
        console.log(data);
        this.person = data;
      });
    this.commentsService.getAll().then((comments: Array<CommentWithID>) => {
      this.commentsList = comments;
      this.commentsList = this.commentsList.filter(
        comment => comment.url == this.router.url
      );
    });
  }
  onAddComment(remark: string) {
    const comment: Comment = {
      url: this.url,
      remark
    };
    this.commentsService.add(comment).then(id => {
      this.commentsList = [
        ...this.commentsList,
        Object.assign({}, comment, { id })
      ];
    });
  }
  onDeleteComment(id: number) {
    this.commentsService.remove(id).then(() => {
      this.commentsList = this.commentsList.filter(
        comment => comment.id !== id
      );
    });
  }
}