

        let diaryEntries = []; // Array para armazenar as entradas do diário

function submitDiary() {
    const feeling = document.getElementById('feeling').value;
    const selfCare = document.getElementById('selfCare').value;
    const change = document.getElementById('change').value;
    const gratitude = document.getElementById('gratitude').value;
    const selfFeel = document.getElementById('selfFeel').value;

    // Criar um objeto para a nova entrada
    const newEntry = {
        feeling,
        selfCare,
        change,
        gratitude,
        selfFeel
    };

    // Adicionar a nova entrada ao array
    diaryEntries.push(newEntry);

    // Atualizar a visualização das entradas
    displayEntries();

    // Limpar os campos após o envio
    clearFields();
}

function displayEntries() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2>Suas Reflexões:</h2>';

    // Iterar sobre as entradas e exibi-las
    diaryEntries.forEach((entry, index) => {
        outputDiv.innerHTML += `
            <div class="entry">
                <h3>Entrada ${index + 1}</h3>
                <p><strong>O que está te deixando triste hoje?</strong><br>${entry.feeling}</p>
                <p><strong>Como você pode cuidar de si mesmo agora?</strong><br>${entry.selfCare}</p>
                <p><strong>O que você gostaria de mudar na sua vida?</strong><br>${entry.change}</p>
                <p><strong>Quais são as coisas pelas quais você é grato hoje?</strong><br>${entry.gratitude}</p>
                <p><strong>Como você se sente em relação a si mesmo neste momento?</strong><br>${entry.selfFeel}</p>
                <hr>
            </div>
        `;
    });
}

function clearFields() {
    document.getElementById('feeling').value = '';
    document.getElementById('selfCare').value = '';
    document.getElementById('change').value = '';
    document.getElementById('gratitude').value = '';
    document.getElementById('selfFeel').value = '';
}