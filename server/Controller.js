module.exports = {
  getWords: async(req,res) => {
    try {
      const db = req.app.get('db')
      let nouns;
      let adjective;
      let  item;
      noun1 = await db.getNouns();
      noun2 = await db.getNouns();
      nouns = await [...noun1.map( element => element.noun), ...noun2.map( element => element.noun)]
      adjective = await db.getAdjectives();
      adjective = adjective.map( element => element.adjective)
      item = await db.getItem();
      item = item.map( element => element.item)
      let response = {nouns, adjective, item}
      res.status(200).send(response)
    } catch(err){
      console.log(err)
      res.status(500).send(err)
    }
  }
}