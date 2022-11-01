const post = document.getElementById("article-template").content


/* Example values to fill the post template with, for the proof of concept */

vote_numbers = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
titles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"]
sources = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
ages = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
ops = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
subs = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
comment_numbers = ["1", "2", "3", "4", "5", "0", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]


/* The frontpage will have 25 posts, so we iterate and inject a modified copy of the template 25 times */
/* (each with its own set of values) */

for (var i = 0; i < 25; i++) {
  var copy = document.importNode(post, true);

  copy.querySelector(".post-number").textContent = i+1;
  copy.querySelector(".nvotes").textContent = vote_numbers[i];
  copy.querySelector(".title").textContent = titles[i];
  copy.querySelector(".post-source").textContent = "("+sources[i]+")";
  copy.querySelector(".age").textContent = ages[i];
  copy.querySelector(".OP").textContent = ops[i];
  copy.querySelector(".sub").textContent = subs[i];

  /* Number of comments will be rendered as "comment" for 0 comments, "1 comment" for 1, and "x comments" for more */
  /* (hence the plural variable) */
  if (comment_numbers[i] == 0) {
    copy.querySelector(".ncomments").textContent = "";
    copy.querySelector(".plural").textContent = "";
  }
  else {
    copy.querySelector(".ncomments").textContent = comment_numbers[i] + " ";
    if (comment_numbers[i] == 1) {
      copy.querySelector(".plural").textContent = "";
    }
  }
  
  document.getElementById("post-list").appendChild(copy);
}
