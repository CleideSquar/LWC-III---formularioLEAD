import { LightningElement } from 'lwc';

export default class FormularioLead extends LightningElement {
    inputs = {
        firstName: '', // Armazena o valor do primeiro nome
        lastName: '', // Armazena o valor do sobrenome
        email: '', // Armazena o valor do email
        website: '', // Armazena o valor do website
        company: '', // Armazena o valor da empresa
        revenue: '', // Armazena o valor da receita anual
    }
    handleInputChange(event) {
        const { name, value } = event.target;
        this.inputs = {
            ...this.inputs,
            [name]: value // Atualiza o valor do campo de entrada correspondente
        };
    }

    onSpread() {
        // adiciona 4, 5, 6 e os valores do array ao novo array
        this.new = [4, 5, 6, ...this.array];
        console.log(this.inputs);

        /* adiciona 1, 2, 3 e os valores do array ao novo array 
        * O array original é definido no connectedCallback
        */
        this.new = [1, 2, 3, ...this.array];
        console.log(this.new);
    }

    connectedCallback() {
        // Crie um array existente
        this.array = [1, 2, 3];
      
        // Espalhe o array existente usando o método onSpread
        this.onSpread();
    }
}