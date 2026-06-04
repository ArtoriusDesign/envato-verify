export default async function handler(req, res) {

  const code = req.query.code;

  if (!code) {
    return res.status(204).end();
  }

  const response = await fetch(
    `https://api.envato.com/v3/market/author/sale?code=${encodeURIComponent(code)}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.ENVATO_TOKEN}`
      }
    }
  );

  const data = await response.text();

  res.status(response.status).send(data);
}
