import React, { Component } from 'react';
import BuilderControls from '../../components/Burger/BuilderControls/BuilderControls';
import Burger from '../../components/Burger/Burger';
import Auxx from '../../hoc/Auxx';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseAble: false,
        purchasing: false
    }


    addIngredienthandler = (type) => {

        const oldCount = this.state.ingredients[type]
        // console.log(oldCount)
        const updateCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients}
        updatedIngredients[type] = updateCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey];
        })
        .reduce((sum, el)=>{
            return sum + el;
        }, 0);
        this.setState({purchaseAble: sum>0})
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = updateCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    purchasingHandler = () => {
        this.setState({ purchasing: true});
    }
    purchasingCancleHandler = () => {
        this.setState({ purchasing: false });
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        return (
            <Auxx> 
                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancleHandler}>
                    <OrderSummary ingredients={this.state.ingredients}/> 
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuilderControls
                    ingredientAdd={ this.addIngredienthandler}
                    ingredientRemove={this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    price={ this.state.totalPrice}
                    purchaseAble={this.state.purchaseAble}
                    ordered={this.purchasingHandler}
                />
            </Auxx>
        );
    }
}

export default BurgerBuilder;