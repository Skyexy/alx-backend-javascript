class AppController{
  function getHomepage(req, res) {
    res.statusMessage = "Hello Holberton School!";
    res.status(200).end();
  }
}
