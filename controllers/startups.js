//description   get all startups
//route         GET/api/startups
//access        public

exports.getAllStartups = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `get all startup`,
  });
};
//description   get single startups
//route         GET/api/startups/:id
//access        public
exports.getSingleStartup = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `get startup by id: ${req.params.id}`,
  });
};
//description   create single startups
//route         POST/api/startups/
//access        private
exports.createStartup = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `create a startup`,
  });
};
//description   update single startups
//route         PUT/api/startups/:id
//access        private
exports.updateStartup = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `update startup by id: ${req.params.id}`,
  });
};
//description   delete single startups
//route         DELETE/api/startups/:id
//access        private
exports.deleteStartup = async (req, res, next) => {
  res.status(200).json({
    success: true,
    message: `delete startup by id: ${req.params.id}`,
  });
};
