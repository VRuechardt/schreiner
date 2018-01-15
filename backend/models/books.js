/**
* In Memory Storage for books
*/

//storage array
let books = []
//current id dont touch it
let cId = 1

/**
* returns all books in the database
* no parameters
*/
exports.getAllBooks = () => {
	return books
}

/**
*	adds a new book to the collection
*   @param args -> JSON with attributes: ISBN, title, description
* 	@returns Book -> { id: integer, ISBN: string, title: string, description: string }
*/
exports.addBooks = (args) => {
	let newBook = {
		id: ++cId,
		ISBN: args.ISBN,
		title: args.title,
		description: args.description
	}

	books.push(newBook)

	return newBook
}

/**
*	finds a book in the collection by id
* 	@param id: integer
* 	@returns Book -> { id: integer, ISBN: string, title: string, description: string }
*/
exports.findById  = (id) => {
	return books.filter(b => b.id === id)[0]
}

/**
*	delets a book in the collection by id
* 	@param id: integer
* 	@returns True if it deleted an element otherwise false
*/
exports.deleteById = id => {
	const prev_length = books.length
	books = books.filter(b => b.id === id)
	return !(prev_length == books.length)
}