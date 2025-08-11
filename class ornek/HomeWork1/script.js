class Movie {
  constructor(title, releaseYear, posterUrl, imdb, genre, director) {
    this.title = title;
    this.releaseYear = releaseYear;
    this.posterUrl = posterUrl;
    this.imdb = imdb;
    this.genre = genre;
    this.director = director;
  }
  
}

const movies = [
  new Movie(
    "Inception",
    2010,
    "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg",
    8.8,
    "Bilim Kurgu, Aksiyon",
    "Christopher Nolan"
  ),
  new Movie(
    "Interstellar",
    2014,
    "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    8.6,
    "Bilim Kurgu, Dram",
    "Christopher Nolan"
  ),
  new Movie(
    "The Matrix",
    1999,
    "https://m.media-amazon.com/images/M/MV5BNjAxYjkxNjktYTU0YS00NjFhLWIyMDEtMzEzMTJjMzRkMzQ1XkEyXkFqcGc@._V1_.jpg",
    8.7,
    "Bilim Kurgu, Aksiyon",
    "The Wachowskis"
  ),
  new Movie(
    "The Dark Knight",
    2008,
    "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    9.0,
    "Aksiyon, Suç",
    "Christopher Nolan"
  ),
  new Movie(
    "Avatar",
    2009,
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMhjRNUPGcToFFbGDcclYcuMMi_UHnJbRcQ&s",
    7.9,
    "Bilim Kurgu, Macera",
    "James Cameron"
  ),
  new Movie(
    "The Shawshank Redemption",
    1994,
    "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
    9.3,
    "Dram",
    "Frank Darabont"
  ),
];

const listContainer = document.getElementById("cards");
 

movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${movie.posterUrl}" alt="${movie.title}" class="poster" />
    <div class="title">${movie.title}</div>
    <div class="year">Yayın yılı: ${movie.releaseYear}</div>
    <div class="genre"><strong>Tür:</strong> ${movie.genre}</div>
    <div class="director"><strong>Yönetmen:</strong> ${movie.director}</div>
    <div class="rating"><strong>IMDb:</strong> ${movie.imdb}</div>
     
  `;
  listContainer.appendChild(card);
});
