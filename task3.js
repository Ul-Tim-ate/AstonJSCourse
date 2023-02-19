function createLiker() {
  let likeCount = 0;
  return {
    like() {
      ++likeCount;
      return this;
    },
    dislike() {
      --likeCount;
      return this;
    },
    val() {
      return likeCount;
    },
  };
}