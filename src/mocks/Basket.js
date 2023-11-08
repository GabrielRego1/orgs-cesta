import logo from '../../assets/logo.png'
import tomato from '../../assets/fruits/tomato.png'
import broccoli from '../../assets/fruits/broccoli.png'
import cucumber from '../../assets/fruits/cucumber.png'
import potato from '../../assets/fruits/potato.png'
import pumpkin from '../../assets/fruits/pumpkin.png'

const basket = {
    top: {
        title: 'Detalhes da Cesta'
    },
    details: {
        name: 'Cesta de Verduras',
        logo: logo,
        nameFarm: 'Jenny Jack Farm',
        description: 'Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha',
        price: 'R$ 40,00',
        buttonText: 'Comprar'
    },
    itens: {
        title: 'Itens da Cesta',
        list: [
            {
                name: 'Tomate',
                image: tomato,
            },
            {
                name: 'Brócolis',
                image: broccoli,
            },
            {
                name: 'Batata',
                image: potato,
            },
            {
                name: 'Abóbora',
                image: pumpkin,
            },
            {
                name: 'Pepino',
                image: cucumber,
            }
        ]
    }
}

export default basket;