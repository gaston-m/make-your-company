ctrl={}

ctrl.getbuss = async (req, res) => {

    res.send('Lista de Empresas de UN User');   /// Listamos y Linkeo el acceso a la configuracion 
}                                               //            individual de cada empresa

ctrl.getbus =  async (req, res) => {

    res.send('Devuelvo una Empresa del User')  // tengo quediseñar la vista par la empresa  => Configuracion
}                                               //                                          => Comprobantes

module.exports = ctrl;