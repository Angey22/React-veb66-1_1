// Импортируем пакет 'prop-types' в файл.
import PropTypes from 'prop-types'

const Head = ({clas, id}) => {
    return <p className={clas} id={id}>I am Head</p>
}

// Прописываем тип данных для каждого "prps-а" нашего компонента.
Head.PropTypes = {
    clas: PropTypes.string,
    id: PropTypes.string
}

export default Head;