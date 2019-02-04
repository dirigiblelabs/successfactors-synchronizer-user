exports.getEntityName = function() {
	return "User";
};

exports.getSelectedProperties = function() {
	return [{
		name: "firstName"
	}, {
		name: "lastName"
	}, {
		name: "username"
	}, {
		name: "userId"
	}, {
		name: "addressLine1"
	}];
};