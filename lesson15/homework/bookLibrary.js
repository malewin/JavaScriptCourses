console.log('-------TASK1-------');

class bookLibrary {
    #books =[];

    constructor(arr=[]) {
        if (new Set(arr).size !== arr.length) throw new Error('В массиве книг есть дубликаты');
        
        this.#books = arr;
    }

    get allBooks(){
        return this.#books;
    }

    addBook(title) {
        if (this.#books.includes(title)) throw new Error('Такая книга уже существует в библиотеке');
        this.#books.push(title);
    };
   
    removeBook(title){
        if (!this.#books.includes(title)) throw new Error('Такой книги нет в библиотеке');
        this.#books.splice(this.#books.indexOf(title),1);
    }

    hasBook(title){
        return this.#books.includes(title)
    }
}

const libEmpty = new bookLibrary();
console.log(libEmpty.allBooks);
const libTrueConstr = new bookLibrary(['HarryPotter','Shantharam']);
console.log(libTrueConstr);
console.log(libTrueConstr.allBooks);
// const libFalseConstr = new bookLibrary(['HarryPotter','HarryPotter']);
// console.log(libFalseConstr);
// console.log(libFalseConstr.allBooks);
console.log(libTrueConstr.hasBook('HarryPotter'));
console.log(libTrueConstr.hasBook('VoinaIMir'));
libTrueConstr.addBook('TomSoyer');
console.log(libTrueConstr.allBooks);
libTrueConstr.removeBook('Shantharam');
console.log(libTrueConstr.allBooks);


