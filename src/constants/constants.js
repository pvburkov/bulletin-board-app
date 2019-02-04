export default {
    buttons: {
        attachPhoto: 'Прикрепить фото',
        delete: 'Удалить',
        send: 'Подать',
    },
    labels: {
        advertBody: 'Текст объявления',
        advertBodyInfo: 'Не более 300 симовлов',
        advertHeader: 'Заголовок',
        advertHeaderInfo: [
            'Обязательное поле',
            'Не более 140 символов',
        ],
        advertPhone: 'Телефон',
        advertPhoneInfo: 'Обязательное поле',
        advertCity: 'Город',
        advertListHeader: 'Объявления',
        confirm: 'Заполнено',
        formHeader: 'Подать объявление',
        warnings: {
            emptyField: 'Заполните поле',
            incorrectFormat: 'Неверный формат',
        },
    },
    patterns: {
        phone: /\+7 ?\(\d\d\d\) ?\d\d\d ?- ?\d\d ?- ?\d\d$/,
    },
    placeholders: {
        phone: '+7 (___) ___ - __ - __',
    },
    textArea: {
        maxLength: 300,
        rows: 10,
    },
    textInput: {
        maxLength: 140,
    }
}; 
