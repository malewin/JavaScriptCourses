const obj = {
    regularMethod: function () {
        console.log (this);
    },
    arrowMethod: () => {
        console.log (this);
    }
};
obj. regularMethod(); // Выводит объект obj, так как метод вызывается на объекте obj 
obj.arrowMethod(); // Выводит контекст выполнения, в котором была создана стрелочная функция (например, объект Window или объект Global) 