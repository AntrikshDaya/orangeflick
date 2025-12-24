export const movies = [
  // ===== MIND-BENDING =====
  {
    id: "inception",
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    moods: ["mind-bending", "thrilling"],
    reason: "Bends reality without losing emotional depth.",
  },
  {
    id: "interstellar",
    title: "Interstellar",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    moods: ["mind-bending", "emotional"],
    reason: "A cosmic journey grounded in human emotion.",
  },
  {
    id: "arrival",
    title: "Arrival",
    poster: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/9xw5GzVtEbxJf3uZl1P2ZqQF0PZ.jpg",
    moods: ["mind-bending", "emotional"],
    reason: "Thought-provoking sci-fi that lingers long after it ends.",
  },
  {
    id: "the-prestige",
    title: "The Prestige",
    poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/6TjllWT3cGrPFyqDXurVZ3L8bBi.jpg",
    moods: ["mind-bending", "dark"],
    reason: "Obsession, illusion, and rivalry collide brilliantly.",
  },
  {
    id: "tenet",
    title: "Tenet",
    poster: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/ww8k0aV8feN3qJQe8e5r6W6RkJQ.jpg",
    moods: ["mind-bending", "thrilling"],
    reason: "High-concept action that challenges time itself.",
  },

  // ===== THRILLING =====
  {
    id: "mad-max-fury-road",
    title: "Mad Max: Fury Road",
    poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
    moods: ["thrilling"],
    reason: "Relentless action with stunning visual energy.",
  },
  {
    id: "john-wick",
    title: "John Wick",
    poster: "https://image.tmdb.org/t/p/w500/5vHssUeVe25bMrof1HyaPyWgaP.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
    moods: ["thrilling"],
    reason: "Stylish, high-adrenaline action done right.",
  },

  // ===== FEEL-GOOD =====
  {
    id: "little-miss-sunshine",
    title: "Little Miss Sunshine",
    poster: "https://image.tmdb.org/t/p/w500/wKn7AJw730emlmzLSmJtzquwaeW.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/vlQJwO8C9MZ2zJjZzU8S2M7Z4w.jpg",
    moods: ["feel-good", "emotional"],
    reason: "Bittersweet, warm, and quietly uplifting.",
  },

  // ===== FAMILY =====
  {
    id: "paddington-2",
    title: "Paddington 2",
    poster: "https://image.tmdb.org/t/p/w500/1OJ9vkD5xPt3skC6KguyXAgagRZ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/2tY82cZ6d8WbRZ5K3KpX8J0Q1p.jpg",
    moods: ["family", "feel-good"],
    isFamilyFriendly: true,
    reason: "Pure kindness wrapped in delightful humor.",
  },

  // ===== CHILL =====
  {
    id: "lost-in-translation",
    title: "Lost in Translation",
    poster: "https://image.tmdb.org/t/p/w500/wr7r7q6r4pZ9Yuqbq4nRz8fZ0FZ.jpg",
    backdrop: "https://image.tmdb.org/t/p/original/iK5D3G5nNwz7N5PjzV8f7k0pZK.jpg",
    moods: ["chill", "emotional"],
    reason: "Quiet moments and beautiful loneliness.",
  },

// =======================
// HARRY POTTER FRANCHISE
// =======================

{
  id: "harry-potter-1",
  title: "Harry Potter and the Sorcerer’s Stone",
  year: 2001,
  type: "movie",
  franchise: "harry-potter",
  moods: ["family", "feel-good", "escapist"],
  pace: "balanced",
  tone: ["wholesome", "hopeful"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: true,
  poster: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/n6jA0w0aWgB2P9Z8y1cYy2N9h9y.jpg",
  reason: "A warm, magical beginning that feels like stepping into a childhood dream."
},

{
  id: "harry-potter-2",
  title: "Harry Potter and the Chamber of Secrets",
  year: 2002,
  type: "movie",
  franchise: "harry-potter",
  moods: ["family", "escapist"],
  pace: "balanced",
  tone: ["mysterious"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: true,
  poster: "https://image.tmdb.org/t/p/w500/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/avqzwKn89VetTEvAlBePt3Us6Al.jpg",
  reason: "Keeps the magic alive while adding a darker mystery beneath Hogwarts."
},

{
  id: "harry-potter-3",
  title: "Harry Potter and the Prisoner of Azkaban",
  year: 2004,
  type: "movie",
  franchise: "harry-potter",
  moods: ["escapist", "emotional"],
  pace: "balanced",
  tone: ["dark", "intellectual"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: true,
  poster: "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/obKmfNexgL4ZP5cAmzdLzHMzX4N.jpg",
  reason: "Where the story matures, blending magic with real emotional depth."
},

{
  id: "harry-potter-4",
  title: "Harry Potter and the Goblet of Fire",
  year: 2005,
  type: "movie",
  franchise: "harry-potter",
  moods: ["thrilling", "escapist"],
  pace: "fast",
  tone: ["intense"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: true,
  poster: "https://image.tmdb.org/t/p/w500/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/5rrGVmRUuCKVbqUu41XIWTXJmNA.jpg",
  reason: "Turns the magical world into a high-stakes spectacle."
},

{
  id: "harry-potter-5",
  title: "Harry Potter and the Order of the Phoenix",
  year: 2007,
  type: "movie",
  franchise: "harry-potter",
  moods: ["dark", "emotional"],
  pace: "balanced",
  tone: ["intense"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: false,
  poster: "https://image.tmdb.org/t/p/w500/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/8KQqhe7hO0pP5IR3l9pK1z8S5YF.jpg",
  reason: "Explores rebellion, loss, and the cost of standing up to power."
},

{
  id: "harry-potter-6",
  title: "Harry Potter and the Half-Blood Prince",
  year: 2009,
  type: "movie",
  franchise: "harry-potter",
  moods: ["dark", "emotional"],
  pace: "slow-burn",
  tone: ["intellectual"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: false,
  poster: "https://image.tmdb.org/t/p/w500/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/h3z8X6U2vO1V6oTtH0mA0kq4x7H.jpg",
  reason: "A reflective chapter that deepens characters before the final storm."
},

{
  id: "harry-potter-7",
  title: "Harry Potter and the Deathly Hallows – Part 1",
  year: 2010,
  type: "movie",
  franchise: "harry-potter",
  moods: ["dark", "emotional"],
  pace: "slow-burn",
  tone: ["intense"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: false,
  poster: "https://image.tmdb.org/t/p/w500/iGoXIpQb7Pot00EEdwpwPajHeZ5.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/gGt4ePOhD8il3Lr0kJv9KZp8XkS.jpg",
  reason: "A tense journey where survival matters more than magic."
},

{
  id: "harry-potter-8",
  title: "Harry Potter and the Deathly Hallows – Part 2",
  year: 2011,
  type: "movie",
  franchise: "harry-potter",
  moods: ["emotional", "thrilling"],
  pace: "fast",
  tone: ["hopeful"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: false,
  poster: "https://image.tmdb.org/t/p/w500/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/9y3qlP9JQ0H6x2gk5z2G3Jwz1xV.jpg",
  reason: "An emotionally powerful finale that rewards long-time viewers."
},

// =======================
// JOHN WICK FRANCHISE
// =======================

{
  id: "john-wick-1",
  title: "John Wick",
  year: 2014,
  type: "movie",
  franchise: "john-wick",
  moods: ["thrilling", "dark"],
  pace: "fast",
  tone: ["stylish", "intense"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: false,
  poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/umC04Cozevu8nn3JTDJ1pc7PVTn.jpg",
  reason: "A sleek revenge story that turns grief into pure adrenaline."
},

{
  id: "john-wick-2",
  title: "John Wick: Chapter 2",
  year: 2017,
  type: "movie",
  franchise: "john-wick",
  moods: ["thrilling", "dark"],
  pace: "fast",
  tone: ["stylish"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: false,
  poster: "https://image.tmdb.org/t/p/w500/zkXnKIwX5pYorKJp2fjFSfNyKT0.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/9z4jRr43JdtU66P0iy8h18OyLql.jpg",
  reason: "Expands the assassin world with bigger action and deeper stakes."
},

{
  id: "john-wick-3",
  title: "John Wick: Chapter 3 – Parabellum",
  year: 2019,
  type: "movie",
  franchise: "john-wick",
  moods: ["thrilling"],
  pace: "breathless",
  tone: ["intense"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: false,
  poster: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
  reason: "Relentless action that barely lets you breathe."
},

{
  id: "john-wick-4",
  title: "John Wick: Chapter 4",
  year: 2023,
  type: "movie",
  franchise: "john-wick",
  moods: ["thrilling", "dark"],
  pace: "fast",
  tone: ["epic"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: false,
  poster: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
  reason: "A grand, stylish conclusion built for pure cinematic spectacle."
},

// =======================
// FRIENDS (TV SERIES)
// =======================

{
  id: "friends-series",
  title: "Friends",
  year: 1994,
  type: "series",
  seasons: 10,
  moods: ["chill", "feel-good", "funny", "comfort"],
  pace: "easy",
  tone: ["light", "nostalgic"],
  language: "english",
  dubbed: ["hindi"],
  familySafe: true,
  poster: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
  backdrop: "https://image.tmdb.org/t/p/original/l0qVZIpXtIo7km9u5Yqh0nKPOr5.jpg",
  reason: "A timeless comfort watch that feels like hanging out with old friends."
},

];
