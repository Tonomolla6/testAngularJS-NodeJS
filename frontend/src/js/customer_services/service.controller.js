import marked from 'marked';

class ServiceCtrl {
  constructor(service, User, Comments, $sce, $rootScope) {
    'ngInject';

    this.service = service;
    this._Comments = Comments;
    this.currentUser = User.current;
    this.appName = "Customer Services";

    $rootScope.setPageTitle(this.service.title);

    this.service.body = $sce.trustAsHtml(marked(this.service.body, { sanitize: true }));

    Comments.getAll(this.service.slug).then(
      (comments) => this.comments = comments
    );

    this.resetCommentForm();
  }

//   resetCommentForm() {
//     this.commentForm = {
//       isSubmitting: false,
//       body: '',
//       errors: []
//     }
//   }

//   addComment() {
//     this.commentForm.isSubmitting = true;

//     this._Comments.add(this.service.slug, this.commentForm.body).then(
//       (comment) => {
//         this.comments.unshift(comment);
//         this.resetCommentForm();
//       },
//       (err) => {
//         this.commentForm.isSubmitting = false;
//         this.commentForm.errors = err.data.errors;
//       }
//     )
//   }

//   deleteComment(commentId, index) {
//     this._Comments.destroy(commentId, this.service.slug).then(
//       (success) => {
//         this.comments.splice(index, 1);
//       }
//     )
//   }
  }

export default ServiceCtrl;