var books = [
    {title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: false
    },
    {title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    alreadyRead: true
    },
    {title: 'De verschrikkelijke schoolmeester.',
    author: 'Dolf Verroen',
    alreadyRead: true
    }
    ];


     for(let i = 0; i < books.length; i++) {

        if(books[i].alreadyRead==true){
            document.write('je las reeds dit boek'+books[i].title)
         }
    
        else {
            document.write('je las het boek' +books[i].title+ 'nog niet')
        }
    document.write("<br>")
 }
 let Book = function(title,writer,alreadyRead) {

    this.title = name,
    this.author = writer,
    this.alreadyRead = alreadyRead,
    this.output = function () {
        if(this.alreadyRead) {
            return "al gelezen";
        }
        else{
            return "nog niet gelezen";
        }
    }
 }

 let myFavouriteBook = new Book('Twilight','stephanie de meyer', false);
        myFavouriteBook = new Book('','Davinci code','Dan Brown',true);

 console.log(myFavouriteBook.output());
 console.log(myFavouriteBook.title);

 console.log(excitingNovel);




           