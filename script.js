// 1. Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:
// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

        class Book {
            constructor(title, author, pages) {
                this.title = title;
                this.author = author;
                this.pages = pages;
            }
            displayInfo() {
                console.log(`Название книги: ${this.title}\nАвтор: ${this.author}\nКоличество страниц: ${this.pages}`)
            }
        }
        const book01 = new Book('Мастер и Маргарита', 'М.А.Булгаков', 528)
        const book02 = new Book('Война и мир', 'Л.Н.Толстой', 1300)
        const book03 = new Book('Незнайка на Луне', 'Н.Н.Носов', 432)

        book01.displayInfo();
        book03.displayInfo();
        book02.displayInfo();


// 2. Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:
// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

        class Student {
            constructor(name, age, grade) {
                this.name = name;
                this.age = age;
                this.grade = grade;
            }
            displayInfo() {
                console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`)
            }
        }

        const student1 = new Student("John Smith", 16, "10th grade");
        student1.displayInfo();
        const student2 = new Student("Jane Doe", 17, "11th grade");
        student2.displayInfo();
