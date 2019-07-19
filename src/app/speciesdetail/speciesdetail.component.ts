import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CommentWithID, Comment, CommentsService } from "../comments.service";

@Component({
  selector: "app-speciesdetail",
  templateUrl: "./speciesdetail.component.html",
  styleUrls: ["./speciesdetail.component.css"]
})
export class SpeciesdetailComponent implements OnInit {
  commentsList: Array<CommentWithID> = [];
  organism: any;
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
      .getOrganism(this.route.snapshot.params["id"])
      .subscribe((data: {}) => {
        console.log(data);
        this.organism = data;
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
