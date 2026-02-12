export function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}


//{
//  "name": "Inspect to Win",
//  "short_name": "Inspect",
//  "description": "A game where you inspect to find answers",
//  "secret": "pwa_secret_key",
//  "start_url": "/",
//  "display": "standalone",
//  "background_color": "#ffffff",
//  "theme_color": "#2563eb"
//}