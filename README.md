# Greek Word Case & Word Root Quiz Web App

## Overview
This web app is a learning tool designed to help users improve their knowledge of **Greek word cases** and **Greek/Latin word roots**. It features interactive quizzes with immediate feedback and detailed explanations for each answer.

The app is hosted on **[GitHub Pages](https://kay-who-codes.github.io/Greek-Quiz/)** and **[Glitch](https://jumpy-flicker-height.glitch.me)**.

![App Image](Non-App/Greek%20Quiz.png)

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

---

## Example Data

### Greek Cases:
```json
{
    "word": "λίθον",
    "case": "Accusative",
    "gender": "Masculine",
    "singularPlural": "Singular",
    "translation": "stone"
}
```

### Word Roots:
```json
{
    "root": "aster-, astr-",
    "english": "star, star-shaped",
    "origin": "Greek",
    "etymology": "ἀστήρ (astēr)",
    "examples": "asteroid, astronomy"
}
```

---

## How to Use

1. **Select Quiz Type**:
   - Use the dropdown menu to choose between "Greek Cases" and "Word Roots".
2. **Answer Questions**:
   - For Greek Cases, select the correct grammatical case.
   - For Word Roots, choose the correct English meaning.
3. **Check Feedback**:
   - Immediate feedback is provided for each answer.
4. **View Helpful Tables**:
   - Click "View Tables" for reference materials.

---

## File Structure

```
.
├── index.html          # Main HTML structure
├── styles.css           # Styling for the app
├── quiz.js           # Core JavaScript logic
├── quiz-data.json      # Data for Greek Cases quiz
├── word-roots.json     # Data for Word Roots quiz
```

---

## Tables Available in the App

### Greek Grammar Tables

| Gender     | Case        | Singular (Article, Ending) | Plural (Article, Ending) | English Equivalent | Example (Masc: λόγος, Fem: δόξα, Neut: δῶρον) |
|------------|-------------|----------------------------|---------------------------|--------------------|-----------------------------------------------|
| Masculine  | Nominative  | ὁ, -ός                    | οἱ, -οί                   | "the" (subject)    | ὁ λόγος / οἱ λόγοι                           |
|            | Genitive    | τοῦ, -οῦ                  | τῶν, -ῶν                  | "of the"           | τοῦ λόγου / τῶν λόγων                        |
|            | Accusative  | τόν, -όν                  | τούς, -ούς                | "the" (object)     | τόν λόγον / τούς λόγους                      |
|            | Vocative    | (same as nom.), -έ        | (same as nom.), -οί       | "O!" (addressing)  | ὦ λόγε / ὦ λόγοι                             |
|            | Dative      | τῷ, -ῷ                    | τοῖς, -οῖς                | "to/for the"       | τῷ λόγῳ / τοῖς λόγοι                         |
| Feminine   | Nominative  | ἡ, -ά                     | αἱ, -αί                   | "the" (subject)    | ἡ δόξα / αἱ δόξαι                            |
|            | Genitive    | τῆς, -ῆς                  | τῶν, -ῶν                  | "of the"           | τῆς δόξης / τῶν δόξων                        |
|            | Accusative  | τήν, -άν                  | τάς, -άς                  | "the" (object)     | τήν δόξαν / τάς δόξας                        |
|            | Vocative    | (same as nom.), -ά        | (same as nom.), -αί       | "O!" (addressing)  | ὦ δόξα / ὦ δόξαι                             |
|            | Dative      | τῇ, -ῇ                    | ταῖς, -αῖς                | "to/for the"       | τῇ δόξῃ / ταῖς δόξαι                         |
| Neuter     | Nominative  | τό, -όν                   | τά, -ά                    | "the"              | τό δῶρον / τά δῶρα                           |
|            | Genitive    | τοῦ, -οῦ                  | τῶν, -ῶν                  | "of the"           | τοῦ δώρου / τῶν δώρων                        |
|            | Accusative  | τό, -όν                   | τά, -ά                    | "the"              | τό δῶρον / τά δῶρα                           |
|            | Vocative    | (same as nom.), -όν       | (same as nom.), -ά        | "O!"               | ὦ δῶρον / ὦ δῶρα                             |
|            | Dative      | τῷ, -ῷ                    | τοῖς, -οῖς                | "to/for the"       | τῷ δώρῳ / τοῖς δώροι                         |

---

### Case Usage and Function in Sentences

| Case       | Function                          | Example in Greek            | Translation          |
|------------|-----------------------------------|-----------------------------|----------------------|
| Nominative | Subject of the sentence           | Ὁ φίλος ἔρχεται.            | The friend is coming.|
| Genitive   | Possession, origin, or partitive  | Τοῦ φίλου τὸ βιβλίον.       | The friend's book.   |
| Accusative | Direct object or movement         | Βλέπω τὸν φίλον.            | I see the friend.    |
| Vocative   | Direct address                    | Ὦ φίλε!                     | O friend!            |
| Dative     | Indirect object, location, or means | Δίδωμι τῷ φίλῳ.           | I give to the friend.|

---

### Declension Practice Table for Common Words

| Word         | Gender      | Case        | Singular     | Plural      |
|--------------|-------------|-------------|--------------|-------------|
| ἄνθρωπος     | Masculine   | Nominative  | ἄνθρωπος     | ἄνθρωποι    |
|              |             | Genitive    | ἀνθρώπου     | ἀνθρώπων    |
|              |             | Accusative  | ἄνθρωπον     | ἀνθρώπους   |
|              |             | Vocative    | ἄνθρωπε      | ἄνθρωποι    |
|              |             | Dative      | ἀνθρώπῳ      | ἀνθρώποις   |
| θάλασσα      | Feminine    | Nominative  | θάλασσα      | θάλασσες    |
|              |             | Genitive    | θαλάσσης     | θαλασσῶν    |
|              |             | Accusative  | θάλασσαν     | θάλασσας    |
|              |             | Vocative    | θάλασσα      | θάλασσες    |
|              |             | Dative      | θαλάσσῃ      | θαλάσσαις   |

---

### Diphthong Pronunciation Guide

| Diphthong | Pronunciation (IPA) | Example Words         | Explanation                                    |
|-----------|---------------------|-----------------------|------------------------------------------------|
| αι        | ai                  | αἰών (aion, "age")    | Like the "i" in "kite."                       |
| ει        | ei                  | εἶδος (eidos, "form") | Like the "ei" in "rein" or the "ay" in "say." |
| οι        | oi                  | οἶκος (oikos, "house")| Like the "oy" in "boy."                       |
| υι        | yi                  | υἱός (huios, "son")   | Like "ee" in "see" with a "y" sound at the beginning. |
| αυ        | au, af, av          | αὐτός (avtos, "he")   | The "ow" in "how." The "af" in "after."      |
| ευ        | eu                  | εὐτυχία (eutychia, "happiness") | Like "eu" in "feud" or "ew" in "few."|
| ηυ        | eu                  | ηὐτός (eutos, "he")   | Like "eu" in "feud," but slightly softer.     |
| ου        | ou                  | οὐρανός (ouranos, "sky")| Like the "oo" in "food."                    |
| ωι        | oi                  | ὠΐδιον (oidion, "song")| Like the "oy" in "boy," but with a longer duration. |
| υω        | wo                  | δύσκολος (dyskolos, "difficult")| Like the "wo" in "wonder."              |
