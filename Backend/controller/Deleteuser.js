const User = require("../models/User");

exports.deleteuser = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await User.findByIdAndDelete(id);
      if (!result) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while deleting the user' });
    }
  };



exports.updateOne = async (req, res) => {
    try {
      const { id } = req.params;
      const updateData = { title}; // Define the update data
  
      // Update the user by ID
      const result = await User.findByIdAndUpdate(id, updateData, { new: true });
  
      if (!result) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated successfully', user: result });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while updating the user' });
    }
  };
  