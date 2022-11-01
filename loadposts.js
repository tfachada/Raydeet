const post = document.getElementById("article-template").content

vote_numbers = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
titles = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"]
sources = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
ages = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
ops = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
subs = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]
comment_numbers = ["1", "2", "3", "4", "5", "0", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5", "1", "2", "3", "4", "5"]

for (var i = 1; i <= 25; i++) {
  var copy = document.importNode(post, true);

  copy.querySelector(".post-number").textContent = i;
  copy.querySelector(".nvotes").textContent = vote_numbers[i];
  copy.querySelector(".title").textContent = titles[i];
  copy.querySelector(".post-source").textContent = "("+sources[i]+")";
  copy.querySelector(".age").textContent = ages[i];
  copy.querySelector(".OP").textContent = ops[i];
  copy.querySelector(".sub").textContent = subs[i];
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
