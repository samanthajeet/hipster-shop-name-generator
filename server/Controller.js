module.exports = {
  getNouns: async (req, res) => {
    const db = req.app.get('db')
    let response = await db.getNouns();
    res.status(200).send(response)
  },
  getAdjectives: async( req, res) => {
    const db = req.app.get('db')
    let response = await db.getAdjectives();
    res.status(200).send(response)
  },
  getItems: async( req, res) => {
    const db = req.app.get('db')
    let response = await db.getItem();
    res.status(200).send(response)
  }

}