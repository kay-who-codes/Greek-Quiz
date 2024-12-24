# Greek Word Case & Word Root Quiz Web App

## Overview
This web app is a learning tool designed to help users improve their knowledge of **Greek word cases** and **Greek/Latin word roots**. It features interactive quizzes with immediate feedback and detailed explanations for each answer.

The app is hosted on **GitHub Pages** and accessible **[HERE](https://kay-who-codes.github.io/Greek-Quiz/)**

## Features
- **Two Quiz Types**:
  1. *Greek Cases*: Identify the grammatical case of a Greek word. Options include `Nominative`, `Genitive`, `Accusative`, `Vocative`, and `Dative`, always presented in a fixed order.
  2. *Word Roots*: Match a Greek or Latin root (e.g., `aster-, astr-`) to its English meaning (e.g., "star, star-shaped").
- **Helpful Grammar Tables**: 
  - Click the **"View Tables"** button to open a modal containing detailed Greek grammar tables, including:
    - Summary of articles and endings by gender and case.
    - Case usage and function in sentences.
    - Declension tables for common words.
    - Pronunciation guides for Greek diphthongs.
- **Answer Feedback**:
  - Correct answers display additional details such as etymology, examples, and translations.
  - Incorrect answers prompt users to try again.
- **Dark Mode**: Toggle between light and dark themes for a comfortable viewing experience.
- **Mobile Friendly**: Optimised for desktop and mobile devices.

## How to Use
1. **Select Quiz Type**: Use the dropdown menu to choose between "Greek Cases" or "Word Roots".
2. **Answer Questions**: Click on the option that you believe is correct.
3. **Feedback**:
   - Correct answers show explanations and details.
   - Incorrect answers provide a retry option.
4. **View Tables**: Click the **"View Tables"** button for helpful grammar tables.
5. **Next Question**: Click the "Next" button to load a new question.
6. **Reset Stats**: Use the "Reset" button to reset your score.

## Helpful Tables
The **"View Tables"** button displays:
1. **Greek Grammar Tables**:
   - Summary of articles by gender and case.
   - Examples of noun endings and their translations.
2. **Case Usage and Function in Sentences**:
   - Illustrates how each case is used in Greek.
3. **Declension Practice Table for Common Words**:
   - Provides declension examples for masculine, feminine, and neuter nouns.
4. **Diphthong Pronunciation Guide**:
   - A table to aid in reading Greek diphthongs with examples and pronunciation tips.

## JSON Data Files
- **`quiz-data.json`**: Contains questions for the Greek Cases quiz.
- **`word-roots.json`**: Contains questions for the Word Roots quiz.

### Example Data:
**Greek Cases**:
**json**
{
    "word": "λίθον",
    "case": "Accusative",
    "gender": "Masculine",
    "singularPlural": "Singular",
    "translation": "stone"
}

### Example Data:
**Greek Cases**:
**json**
{
    "word": "λίθον",
    "case": "Accusative",
    "gender": "Masculine",
    "singularPlural": "Singular",
    "translation": "stone"
}

## File Structure
.
├── index.html          # Main HTML structure
├── style.css           # Styling for the app
├── script.js           # Core JavaScript logic
├── quiz-data.json      # Data for Greek Cases quiz
├── word-roots.json     # Data for Word Roots quiz
