class pizza{
  //type constructor below
  constructor (s,m,v){
    this.size = s;
    this.meatToppings = m;
    this.veggieToppings = v;
  }


  //type instance functions below
  sizeCost(){
    if(this.size = "Small"){
      return sizeCost() 7.99;
    }
    else if(this.size = "Medium"){
      return sizeCost() 9.99;
    }
    else if(this.size = "Large"){
      return sizeCost() 12.99;
    }
    else if(this.size = "Extra-Large"){
      return sizeCost() 15.99;
    }
  }

  toppingsCost(top){
    if(top == meat){
      return this.meatToppings.length*0.99;
    }

    else if(top == vegetable){
      return this.veggieToppings.length*0.50;
    }
  }

  price(){
    return this.sizeCost()+this.toppingsCost(meat)+this.toppingsCost(vegetable);
  }

  //type class functions below
  static promotionalDeal(pizza,percent){
    var percent = percent/100;
    var discount = pizza.price()*percent;
    return pizza.price() - discount;
  }

}
