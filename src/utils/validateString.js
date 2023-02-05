const isOnlyLettersAndSpaces = (name) => {
	return /^[A-Za-z\s]*$/.test(name);
};

const cleanupSpaces = (name) => {
	return name.trim().replaceAll( /[\s][\s]*/g, " " );
};

export { isOnlyLettersAndSpaces, cleanupSpaces };