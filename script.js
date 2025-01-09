document.getElementById('nfsForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    const calcularImposto = (porcentagem) => {
        return (valorVenda * porcentagem) / 100;
    };

    const irpfValor = calcularImposto(irpf);
    const pisValor = calcularImposto(pis);
    const cofinsValor = calcularImposto(cofins);
    const inssValor = calcularImposto(inss);
    const issqnValor = calcularImposto(issqn);

    const totalImpostos = irpfValor + pisValor + cofinsValor + inssValor + issqnValor;

    // Exibindo os dados na Nota Fiscal
    document.getElementById('valorVendaDisplay').textContent = valorVenda.toFixed(2);
    document.getElementById('itensDisplay').textContent = itens;
    document.getElementById('irpfDisplay').textContent = irpfValor.toFixed(2);
    document.getElementById('pisDisplay').textContent = pisValor.toFixed(2);
    document.getElementById('cofinsDisplay').textContent = cofinsValor.toFixed(2);
    document.getElementById('inssDisplay').textContent = inssValor.toFixed(2);
    document.getElementById('issqnDisplay').textContent = issqnValor.toFixed(2);
    document.getElementById('totalImpostos').textContent = totalImpostos.toFixed(2);

    document.getElementById('notaFiscal').style.display = 'block';
});