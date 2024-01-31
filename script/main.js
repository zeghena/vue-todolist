const { createApp } = Vue

createApp({
  data() {
    return {
        
        products: [{
            prop1: 'Pane',
            booleano2: true 
          },
          {
            prop1: 'Latte',
            booleano2: true 
          },
          {
            prop1: 'Formaggio',
            booleano2: true 
          },
          {
            prop1: 'Verdura',
            booleano2: true 
          },
          {
            prop1: 'Carne',
            booleano2: true 
          },
          
          {
            prop1: 'Acqua',
            booleano2: true 
          },
        ]
    }
  }
}).mount('#app')