import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Mi Aplicación</title>
    </head>
    <body>
      <form action="/submit-name" method="post">
        <label for="name">Introduce tu nombre:</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="Enviar">
      </form>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
