# Check the app

1. Run `npm start` and open the app.
2. Check that News shows five articles and both tabs have icons.
3. Type `REACT` in search. Only Students Learn React Native should remain.
4. Type `  react  `. The same article should remain.
5. Type `zzzz`. Check the no-results message.
6. Clear search. All five articles should return.
7. Type several characters slowly. The input should keep focus.
8. Open the first article and tap Add bookmark.
9. Open the Bookmarks tab. The saved article should appear.
10. Open the saved article and remove its bookmark. The Bookmarks tab should become empty.
11. From the first article, tap Next article four times. Check the titles follow the order in `articles.ts`.
12. On the fifth article, check that the button is replaced by You have reached the last article.
13. Press the header back arrow. It should return to the list without stepping through all five articles.
14. Open an invalid article URL such as `/999`. Check the Article not found message.

## Code checks

```sh
npm run typecheck
npm run lint
```
