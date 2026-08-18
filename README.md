# DCIT 324: Mobile Application Development — Assignment 2

An elegant, state-driven, and navigation-enabled fitness mobile application built with **React Native** and **Expo SDK 54**. 

This application implements a complete workflow for browsing workouts across categories (Gym, Yoga, Cardio, Strength) and viewing workout details, using reusable components and interactive states.

---

## 📱 Features

1. **Category Filter Tabs**: Interactive chips to filter workouts by Gym, Yoga, Cardio, and Strength.
2. **Instant Search**: Search through workout routines instantly by typing in the search bar.
3. **Reusable Workout Card**: A unified `WorkoutCard` component that consumes workout metadata via props.
4. **Independent Favorites Toggles**: A stateful heart icon on each card that toggles filled/unfilled status independently.
5. **Stack Navigation**: Custom screen transitions built with React Navigation. Selection passes detailed route parameters dynamically.
6. **Workout Tracker Progress**: An interactive action button on the Workout Details screen that toggles state between **Start Workout** and **Completed**.
7. **Premium Flat Design**: Minimalist layout utilizing a curated color scheme, clean spacing, and modern iconography (`@expo/vector-icons`).

---

## 📂 Project Structure

```text
DCIT324-ASSIGNMENT2/
├── LICENSE
├── README.md                <-- Project Documentation (This File)
└── assignment2/             <-- Core Expo Project Folder
    ├── App.js               <-- Stack Navigator Setup
    ├── app.json
    ├── index.js
    ├── package.json
    ├── components/
    │   └── WorkoutCard.js   <-- Reusable Prop & Stateful Component
    └── screens/
        ├── WorkoutListScreen.js     <-- List of workouts with filters & search
        └── WorkoutDetailsScreen.js   <-- Detailed view with status toggle button
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone or download the repository.
2. Open your terminal and navigate to the project directory:
   ```bash
   cd assignment2
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the App

To run the application inside Expo Go or on the web, run:

```bash
npx expo start
```

- Press **`a`** for Android Emulator (requires Android Studio setup).
- Press **`i`** for iOS Simulator (requires macOS and Xcode setup).
- Press **`w`** for Web Browser view.
- Scan the QR code using the **Expo Go** application on your physical device.

---

## 🛠️ Built With

- **React Native** & **Expo SDK 54**
- **React Navigation v7** (Stack)
- **Expo Vector Icons** (Ionicons)
- **Unsplash** (Premium Workout Artwork)
