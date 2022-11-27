export default function getById(req, res) {
  // res.statusCode = 200
  // es.setHeader('Content-Type','application/json')
  // res.end(req.query.id)

  res.json({id: req.query.id})
}