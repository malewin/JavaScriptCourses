    // Работа с window
    const newWindow = window.open('https://www.example.com', '-_blank'); // Открывает новое окно браузера
    window. close(); // Закрывает текущее окно
    window. resizeTo(800, 600); // Изменяет размер окна на 800×600 пикселей 
    window. location.href = 'https://www.example.com'; // Перенаправляет на другую страницу
    const windowWidth = window. innerWidth; // Получает ширину окна

    // // Работа с window.window
    const isWindowOpen = window.window.open('https://www.example.com') !== null; //Проверяет, открыто ли окно
    const windowHeight = window.window.innerHeight; // Получает высоту окна window- 
    window.location.href='https://www.example.com'; // Перенаправляет на другую страницу во вложенном окне

    // // Работа с self
    const newWindowself = self.open('https://www.example.com', '_blank'); // Открывает новое окyj браузера с использованием self
    self.close(); // Закрывает текущее окно с использованием self // self. resizeTo(800, 600); // Изменяет размер окна на 800×600 пикселей с использованием self
    self.location.href = 'https://www.example.com'; // Перенаправляет на другую страницу с использованием self

    // // Работа с frames
    const frame = frames [0]; // Получает ссылку на фрейм по индексу
    frames [0]. location.href = 'https://www.example.com'; // Перенаправляет на другую страницу во фрейме
    const frameCount = frames.length; // Получает количество фреймов на странице // 
    const parentWindow = window.parent; // Получает доступ к родительскому окну из фрейма

    // Работа с globalThis
    const globalobject = globalThis; // Получает глобальный объект // 
    globalThis.newVariable = 'Hello, world!'; // Определяет новую глобальную переменную
    const globalVariable = globalThis.window === globalThis.self? 'Window' : 'Worker'; //Получает доступ к глобальным переменным из разных сред исполнения

    console.log(window.Symbol.for);
    console.log(window.Symbol.iterator);
    console.log(window.Array.from);