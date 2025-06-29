class Parquimetro {
    constructor(valor){
        this.valor = parseFloat(valor);
        this.tempo = 0;
        this.troco = 0;
    }

    calcularTempo(){
        if(this.valor < 1) {
            return 'Valor insufciente.';
        }
    

    if (this.valor >= 2) {
        const blocos = Math.floor(this.valor / 2);
        this.tempo = blocos * 60;
        this.troco = (this.valor - blocos * 2);
    } else if (this.valor >= 1.5) {
        this.tempo = 45;
        this.troco = this.valor - 1.5;
    } else if (this.valor >= 1) {
        this.tempo = 30;
        this.troco = this.valor - 0;
    }

    return `tempo concedido: ${this.tempo} minutos.<br>${this.troco > 0 ? 'Troco: '  + this.troco.toFixed(2) : ''} `;

    }
}

function calcularEstacinamento() {
    const valorInserido = document.getElementById('valor').value;
    const resultadoDiv = document.getElementById('resultado');

    const parquimentro = new Parquimetro(valorInserido);
    const resultado = parquimentro.calcularTempo();

    resultadoDiv.innerHTML = `<p>${resultado}</p>`;
}