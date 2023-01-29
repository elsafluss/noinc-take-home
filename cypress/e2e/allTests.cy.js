// / <reference types="cypress" />

describe("No.1nc app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
    cy.fixture("testData").then((testData) => {
      cy.intercept("http://localhost:3000/", testData)
    })
  })

  it("should display login page", () => {
    cy.get(".login-container")
      .should("be.visible")
      .get(".login-logo-container")
      .should("be.visible")
      .get(".login-logo")
      .should("have.attr", "src", "/static/media/noinc-logo.d3646567.svg")
      .get(".login-form")
      .should("be.visible")
      .get("input")
      .should("have.attr", "type", "text")
      .get("input")
      .eq(1)
      .should("have.attr", "type", "password")
      .get(".login-button")
      .should("be.visible")
      .should("have.text", "LOGIN")
  })

  it("should log in", () => {
    cy.login("test@test", "testing")
  })

  it("should load the home page", () => {
    cy.login("test@test", "testing")

    // Load the navbar
    cy.get(".navbar-container")
      .should("be.visible")
      .get(".navbar-logo")
      .should("have.attr", "src", "/static/media/noinc-logo.d3646567.svg")
    cy.get(".active").should("contain", "Home")
    cy.get(".navbar-button").eq(1).should("contain", "Interests")
    cy.get(".navbar-button").eq(2).should("contain", "Skills")
    cy.get(".username").should("contain", "test person")

    // Load the top user details
    cy.get(".home-header-title > p").should("contain", "Welcome, test person")
    cy.get(".home-header-text").should(
      "have.text",
      "The way I see it, every life is a pile of good things and bad things."
    )

    // Load the cards
    cy.get(".home-content")
      .should("be.visible")
      .should("have.descendants", "a")
      .get(".home-content > a")
      .should("have.length", 6)

    // Check the first card
    cy.get(".link > .card-container")
      .eq(0)
      .should("have.css", "background-color", "rgb(215, 215, 215)")
      .should("have.class", "true")
      .should("have.descendants", ".card-title > p")
      .should("contain", "Interest")
    cy.get(".card-details > div").eq(0).should("contain", "NAME:")
    cy.get(".card-name-value").eq(0).should("contain", "Soccer")
    cy.get(".card-type-key").eq(0).should("contain", "TYPE:")
    cy.get(".card-type-value")
      .eq(0)
      .should("contain", "Sport")
      .should("have.class", "sport")
      .should("have.css", "background-color", "rgb(25, 136, 100)")
  })

  it("should click a card and load the details page", () => {
    cy.login("test@test", "testing")

    cy.get(".card-name-value")
      .eq(1)
      .then(($title) => {
        const title = $title[0].textContent

        // Click on the second card
        cy.get(".home-content > a").eq(1).click()
        // Check that the navbar loaded
        cy.get(".navbar-container").should("be.visible")

        // Check the details page content
        cy.get(".details-container")
          .should("be.visible")
          .get(".details-title")
          .should("contain", title)
          .get(".details-type")
          .should("contain", "Sport")
          .should("have.css", "background-color", "rgb(25, 136, 100)")
          .get(".details-detail")
          .eq(0)
          .should("contain", "Football is a Sport and Sports are physical")
          .get(".details-detail > div")
          .should("contain", "This is an active interest.")
      })
  })

  it("should click Interests and load the Interests page", () => {
    cy.login("test@test", "testing")

    cy.get(".navbar-button").eq(1).should("contain", "Interests").click()
    cy.get(".catalog-title")
      .should("contain", "INTERESTS")
      .get(".catalog-container > a")
      .should("have.length", 3)

    cy.get(".card-name-value")
      .eq(2)
      .then(($title) => {
        const title = $title[0].textContent

        // Click on the second card
        cy.get(".card-container").eq(2).click()

        // Check that the navbar loaded
        cy.get(".navbar-container").should("be.visible")

        // Check the details page content
        cy.get(".details-container")
          .should("be.visible")
          .get(".details-title")
          .should("contain", title)
          .get(".details-type")
          .should("contain", "Game")
          .should("have.css", "background-color", "rgb(86, 25, 136)")
          .get(".details-detail")
          .eq(0)
          .should("contain", "Chess is a game and games are fun")
          .get(".details-detail > div")
          .should("contain", "This is not an active interest.")
      })
  })
})
