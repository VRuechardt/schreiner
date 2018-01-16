
const Book = ['$http', ($http) => {

    return {

        query: () => {

            return $http.get(`/api/book`)

        },

        get: id => {

            return $http.get(`/api/book/` + id)

        },

        create: (isbn, title, description) => {

            return $http.post(`/api/book`, {
                isbn: isbn,
                title: title,
                description: description,
            })

        },

        update: (id, isbn, title, description) => {

            return $http.put(`/api/book/` + id, {
                isbn: isbn,
                title: title,
                description: description,
            })

        },

        delete: id => {

            return $http.delete(`/api/book/` + id)

        }

    }

}];

export {Book}
