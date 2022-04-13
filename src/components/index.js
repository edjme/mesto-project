// подключениее CSS
import '../pages/index.css'

// Подключение валидации
import {enableValidation, validationConfig} from './validate.js'
enableValidation(validationConfig)

// Подключение отрисовки карточек
import {renderCard} from './card'