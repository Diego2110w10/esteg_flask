// Função para mostrar o spinner enquanto o formulário está sendo enviado
document.getElementById('decode-form').addEventListener('submit',
    function() {
        document.getElementById('loading-spinner').style.display = 'block';

        //Esconder resultado
        document.getElementById('result').display = 'none';
    }
)