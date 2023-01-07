class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  pg() {
    if (this.rating == "PG")
      console.log(this.title, "is", this.rating, "rating.");
  }
}

class Movies {
  constructor() {
    this.movies = [];
  }
  newMovie(title, studio, rating) {
    let m = new Movie(title, studio, rating);
    this.movies.push(m);
    return m;
  }
  get allMovies() {
    return this.movies;
  }
  get numberOfMovies() {
    return this.arrayMovie.length;
  }
  get pgMovies() {
    let mov = [];
    let arr = this.movies;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].rating == "PG") {
        mov.push(arr[i]);
      }
    }
    return mov;
  }
}
let league = new Movies();
league.newMovie("Spiderman", "Sony", "PG 16");
league.newMovie("ToyStory", "Disney");
league.newMovie("Casino Royale", "Eon Productions", "PG 13");
league.newMovie("Food War", "Eon Productions", "PG");
console.log(league.pgMovies);
league.allMovies.forEach((movie) => movie.pg());
