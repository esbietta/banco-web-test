describe('Tranferencias', () =>{

    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciisValidas()
    })

    it('Deve treansferir quando informo dados e valor validos', () => {
      // Act
       cy.realizarTransferencias('João', 'Maria', '11')
       
       // Assert
       cy.verificarMensagemNoToast('Transferência realizada!')
     }) 
     
      it('Deve apresentar error quando tentar transferiri mais que 5 mil sem o token', () => {
      // Act
       cy.realizarTransferencias('João', 'Maria', '4000')
      
       // Assert
       cy.verificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
     })     
       
       
})