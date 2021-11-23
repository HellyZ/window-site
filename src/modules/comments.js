const comments = () => {

  const getData = async (path) => {
    try {
      return await fetch(path).then((response) => response.json());
    } catch (error) {
      console.error(`Achtung! ${error.message}`);
      throw new Error(error.message);
    }
  };

  const commentsSection = document.querySelector(".comments-container");

  getData("./comments.json").then((struct) => {
    let comments = struct["comments"];
    comments.forEach((comment) => {
      let commentItem = document.createElement("div");
      commentItem.classList.add("review-margin-bottom");
      commentItem.classList.add("row");

      if ((comment.id + 1) % 2 == 0) {
        let colImg = document.createElement("div");
        colImg.classList.add("col-xs-3");
        colImg.classList.add("col-sm-2");

        let reviewUser = document.createElement("div");
        reviewUser.classList.add("review-user");

        let commentImg = document.createElement("img");
        commentImg.classList.add("img-responsive");
        commentImg.classList.add("avatar");
        commentImg.src =
          comment.image !== ""
            ? `images/users/${comment.image}`
            : "images/users/catAva.png";

        reviewUser.append(commentImg);
        colImg.append(reviewUser);

        let colReview = document.createElement("div");
        colReview.classList.add("col-xs-9");
        colReview.classList.add("col-sm-9");

        let reviewInner = document.createElement("div");
        reviewInner.classList.add("review-inner");
        reviewInner.classList.add("review-gray");
        reviewInner.classList.add("review-arrow");

        reviewInner.classList.add("review-arrow-right");

        let nameEl = document.createElement("p");
        nameEl.classList.add("text-normal");
        nameEl.innerText = comment.author;

        let commentEl = document.createElement("p");
        commentEl.innerText = comment.comment;

        reviewInner.append(nameEl);
        reviewInner.append(commentEl);

        colReview.append(reviewInner);

        commentItem.append(colReview);
        commentItem.append(colImg);
      } else {
        let colImg = document.createElement("div");
        colImg.classList.add("col-xs-3");
        colImg.classList.add("col-sm-2");

        let reviewUser = document.createElement("div");
        reviewUser.classList.add("review-user");

        let commentImg = document.createElement("img");
        commentImg.classList.add("img-responsive");
        commentImg.classList.add("avatar");
        commentImg.src =
          comment.image !== ""
            ? `images/users/${comment.image}`
            : "images/users/cat.png";

        reviewUser.append(commentImg);
        colImg.append(reviewUser);

        let colReview = document.createElement("div");
        colReview.classList.add("col-xs-9");
        colReview.classList.add("col-sm-9");

        let reviewInner = document.createElement("div");
        reviewInner.classList.add("review-inner");
        reviewInner.classList.add("review-green");
        reviewInner.classList.add("review-arrow");

        reviewInner.classList.add("review-arrow-left");

        let nameEl = document.createElement("p");
        nameEl.classList.add("text-normal");
        nameEl.innerText = comment.author;

        let commentEl = document.createElement("p");
        commentEl.innerText = comment.comment;

        reviewInner.append(nameEl);
        reviewInner.append(commentEl);

        colReview.append(reviewInner);

        commentItem.append(colImg);
        commentItem.append(colReview);
      }

      commentsSection.append(commentItem);
    });
  });
};

export default comments;
