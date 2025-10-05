# RN Movie App

A cross-platform mobile app for discovering and searching movies, built with Expo, React Native, TypeScript, Tailwind CSS (NativeWind), and Appwrite.

## 🚀 Features

- Home page with trending and latest movies
- Search movies with real-time results
- Popularity algorithm tracks user searches
- Save and profile tabs
- Modern UI with utility-first styling

## 🛠️ Tech Stack

- [Expo](https://expo.dev/) & [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) via [NativeWind](https://www.nativewind.dev/)
- [Appwrite](https://appwrite.io/) for backend/database
- [Expo Router](https://expo.github.io/router/docs/)

## 📦 Project Structure

```
app/
  (tabs)/         # Tab screens (Home, Search, Save, Profile)
  movie/          # Movie details screen
  movies/         # (Optional) Additional movie screens
  globals.css     # Tailwind CSS entry
components/       # Reusable UI components
constants/        # Icons and images
interfaces/       # TypeScript interfaces
services/         # API and Appwrite logic
assets/           # Fonts, icons, images
types/            # TypeScript type declarations
```

## ⚡ Quick Start

1. **Clone the repo**
   ```sh
   git clone https://github.com/adrianhajdin/rn-movie-app.git
   cd rn-movie-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root:

   ```
   EXPO_PUBLIC_MOVIE_API_KEY=your_tmdb_api_key
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_appwrite_project_id
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_appwrite_database_id
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   ```

4. **Run the app**
   ```sh
   npx expo start
   ```
   Scan the QR code with Expo Go or run on an emulator.

## 🧩 Key Files

- [app/(tabs)/_layout.tsx](app/(tabs)/_layout.tsx): Tab navigation and custom tab icons
- [services/api.ts](services/api.ts): TMDB API integration
- [services/appwrite.ts](services/appwrite.ts): Appwrite database logic
- [components/MovieCard.tsx](components/MovieCard.tsx): Movie display card
- [components/SearchBar.tsx](components/SearchBar.tsx): Search input

## 📝 License

MIT

---

For more details, see [README.md](README.md) in the root of the project.
