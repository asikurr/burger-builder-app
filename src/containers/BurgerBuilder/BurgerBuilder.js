import React, { Component } from 'react';
import BuilderControls from '../../components/Burger/BuilderControls/BuilderControls';
import Burger from '../../components/Burger/Burger';
import Auxx from '../../hoc/Auxx';

const INGREDIENS_PRICE = {
    salad: .5,
    bacon: .6,
    cheese: .4,
    meat: .7,
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }


    addIngredienthandler = (type) => {
        
        const oldCount = this.state.ingredients[type]
        
        // console.log(oldCount)
        const updateCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingrediens}
        updatedIngredients[type] = updateCount;

        const priceAddition = INGREDIENS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }

    render() {
        return (
            <Auxx>
                <Burger ingredients={this.state.ingredients}/>
                <BuilderControls
                    ingredientAdd={ this.addIngredienthandler}
                />
            </Auxx>
        );
    }
}

export default BurgerBuilder;