class AutoMobile {
    _horsePowers = 0; // Объявление приватного свойства _horsePowers со     значением 0, используя синтаксис приватных полей

    set horsePowers(value) { // Определение сеттера для свойства horsePowers
    if (value < 0) throw new Error ("Отрицательное количество сил"); //     Проверка, что значение больше или равно 0, иначе выбрасывается исключение 
    this._horsePowers = value; // Установка значения свойства _horsePowers
    }

    get horsePowers() { // Определение геттера для свойства horsePowers 
        return this._horsePowers; // Возвращает значение свойства_horsePowers
    }
    constructor(power) { // Определение конструктора класса
    this._horsePowers = power; // Установка значения свойства _horsePowers при  создании объекта класса
    }
}
// создаём новую машину
let auto = new AutoMobile(100); // Создание нового объекта класса AutoMobile и передача значения 100 в конструктор
// устанавливаем количество сил
auto.horsePowers = -10; // Установка значения свойства horsePowers на -10 вызывает исключение "Отрицательное количество сил"