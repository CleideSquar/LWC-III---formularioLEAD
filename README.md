# Formulário Lead

Esse é um componente de formulário para a criação de **Leads** em **Lightning Web Components (LWC).** É exibido na interface do usuário como um card do Lightning com campos de entrada para o primeiro nome, sobrenome, email, website, empresa e receita anual. Há um botão de criação de Lead que, quando clicado, dispara o método onSpread.

O método **handleInputChange** é executado toda vez que o valor de um dos campos de entrada é alterado. Ele atualiza o valor correspondente no objeto inputs do componente.

O método **onSpread** cria um novo array adicionando os valores do array original e os valores 4, 5 e 6. Em seguida, ele cria outro novo array adicionando os valores 1, 2 e 3 e os valores do array original. O array original é definido no método **connectedCallback.**

O método **connectedCallback** é um dos ciclos de vida do componente LWC. Ele é executado assim que o componente é conectado à árvore DOM e cria o array original. Em seguida, chama o método onSpread para espalhar os valores do array original em novos arrays.

Em resumo, este componente é um formulário simples para criação de Leads que atualiza valores em um objeto inputs e cria novos arrays a partir de um array original.

## Atividade elabora para o curso da SoulCode

2 - (input-object-spread)
Crie um componente LWC, que contenha os campos: primeironome, sobrenome, email, website, empresa, receita anual e através de uma única função (handleInputChange) monte o objeto com os dados estruturados.
