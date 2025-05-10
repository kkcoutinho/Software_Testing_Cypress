import logindata from '../fixtures/logindata.json';

describe('Login', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Login com e-mail e senha cadastrados', () => {
    const usuario = logindata.usuarios[0];

    cy.get('[data-test="nav-sign-in"]').click();
    cy.get('[data-test="email"]').type(usuario.email);
    cy.get('[data-test="password"]').type(usuario.senha);
    cy.get('[data-test="login-submit"]').click();
    cy.get('[data-test="nav-menu"]').should('be.visible');
    });

  it('Login com e-mail e senha NÃO cadastrados', () => {
    const usuario = logindata.usuarios[1];

    cy.get('[data-test="nav-sign-in"]').click();
    cy.get('[data-test="email"]').type(usuario.email);
    cy.get('[data-test="password"]').type(usuario.senha);
    cy.get('[data-test="login-submit"]').click();
    cy.get("[data-test='login-error']").should('contain', 'Invalid email or password');
    });
  
  it('Login com e-mail válido e senha inválida', () => {
    const usuario = logindata.usuarios[2];

    cy.get('[data-test="nav-sign-in"]').click();
    cy.get('[data-test="email"]').type(usuario.email);
    cy.get('[data-test="password"]').type(usuario.senha);
    cy.get('[data-test="login-submit"]').click();
    cy.get("[data-test='login-error']").should('contain', 'Invalid email or password');
    });

  });

