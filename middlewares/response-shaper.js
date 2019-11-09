const responseShaper = (req, res) => {
  res.json({ data: res.data });
};

module.exports = responseShaper;
