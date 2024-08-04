const User = require("../models/User");
exports.getUser = async (req, res) => {
	try {
		const userData = await User.find({});
		res.json({ success: true, data: userData });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};



exports.getOne = async (req, res) => {
	try {
	  const { id } = req.params; // Extract ID from route parameters
  
	  // Find the user by ID
	  const user = await User.findById({_id : id});
  
	  if (!user) {
		return res.status(404).json({ message: 'User not found' });
	  }
  
	  res.status(200).json({ user });
	} catch (error) {
	  res.status(500).json({ error: 'An error occurred while fetching the user' });
	}
  };
  
