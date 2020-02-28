ctrl = {};

ctrl.getAllDocs = async (req, res) => {

    res.send('Documentos/Comprobantes de la Empresa')
}

ctrl.getSales = async (req, res) => {

    res.send('Comprobantes de Ventas')
}


ctrl.getPurchases = async (req, res) => {

    res.send('Comprobantes de Campras')
}

module.exports = ctrl;