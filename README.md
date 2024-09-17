## ¿El cliente no pagó?


He realizado una refactorización del código original de Ciprian (@kleampa) y lo he adaptado para mis necesidades. Este código agrega opacidad al cuerpo del sitio y disminuye su opacidad cada día hasta que desaparezca por completo. Puedes establecer una fecha límite y personalizar la cantidad de días hasta que el sitio web se desvanezca por completo.

```javascript

const dueDate = new Date("2024-09-30"); // Actualiza esta fecha según tus necesidades
const daysDeadline = 60; // Actualiza este número según tus necesidades

```

## Uso

Simplemente cargue el archivo ```not-paid.js``` en el ```<head>```

## Autor

- Autor original Ciprian (@kleampa). [Repositorio](https://github.com/kleampa/not-paid/tree/master)
- Refactorizado por yo.
