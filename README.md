## Under Progress!

# ExSa - Exam Saviour

## Intro 👋

ExSa is an open source repository for the exam question papers of my branch, for my university campus (TIET, Derabassi)

## Tech Stack 📖

- React.js is used in making this piece of software
- Icons are provided by [Fontawesome.com](https://www.fontawesome.com)

## Contribution ✨

If you want to add question papers that are not currently present here, you can follow the following steps.

1. Fork this repo and add your name to file **contributors.js**.
2. Create a pdf with containing clear images of the exam question paper you want to add and save it in directory - **src/assets/**
3. Open file **papers.js** from **src/fixtures/**, write

```js
import image<next_counting_number_in_words> from "../assets/<name_of_the_file.pdf>";
```

4. Add new element in the papers array at the end, with same properties as the previous ones are having, with appropriate values of id\_, year, sem, sub, type, source with respect to your question paper pdf file.
5. For logo property, just put empty string, I will take care of it.
6. Save the **papers.js** file and make a pull request for the repo and you are done!
7. After reviewing the changes, if everything is fine, I will accept and merge those change in the main branch, and now your question paper is added in the list and you have done your open source contribution.

## License 📎

MIT
