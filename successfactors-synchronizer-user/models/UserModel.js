exports.getEntityName = function() {
	return "User";
};

exports.getBusinessKeys = function() {
	return [{
		name: "userId"
	}];
};

exports.getSelectedProperties = function() {
	return [{
		name: "firstName"
	}, {
		name: "lastName"
	}, {
		name: "username"
	}, {
		name: "addressLine1"
	}, {
		name: "city"
	}];
};