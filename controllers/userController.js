exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'success',
    data: 'All Users data',
  });
};
exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'success',
    data: 'User data',
  });
};
exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'success',
    data: 'User deleted successfully',
  });
};
exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'success',
    data: 'User Updated Successfully',
  });
};
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'success',
    data: 'Created User',
  });
};
