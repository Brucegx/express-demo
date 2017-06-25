const mockUsers = {
	0: {
		id: 0,	
		name: 'Zhang Zhang',
		following: [1],
	},
	1: {
		id: 1,
		name: 'Yin Wen',
		following: [0],
	},
	2: {
		id: 2,
		name: 'Xi Guo',
		following: [3],
	},
	3: {
		id: 3,
		name: 'Debbie',
		following: [2],
	},
};

const mockComments = {
	0: {
		id: 0,
		repley: null,
		from: 0,
		to: 1,
		content: "I love you",
	},
	1: {
		id: 1,
		repley: 0,
		from: 1,
		to: 0,
		content: "I love you too",
	}
}

module.exports = {
	users: mockUsers,
	comments: mockComments,
};