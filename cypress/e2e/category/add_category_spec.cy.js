describe("Add category spec", () => {
  it("should contain url /login", () => {
    cy.visit("https://kasirdemo.belajarqa.com");
    cy.url().should("include", "/login");
  });

  it("user success login to kasir Aja", () => {
    cy.visit("https://kasirdemo.belajarqa.com");

    cy.get("#email").type("gracepanjaitan2000@gmail.com");
    cy.get("#password").type("gracr1990");

    cy.get("#root > div > div > div > div.css-1w7v3tn > div > button").click();

    cy.url().should("include", "/dashboard");
    cy.contains("kasirAja");
  });
  it("Add Category [Success]", () => {
    cy.get('div[class="css-1mqa38q"]').contains("kategori").click();
    cy.get('a[class="chakra-button css-1piskbq"]').contains("tambah").click();
    cy.get("#nama").type("Elektronik I");
    cy.get("#deskripsi").type("Coba Aja");
    cy.contains("button", "simpan").click();
  });

  it("Add Category [Fail]", () => {
    cy.get('div[class="css-1mqa38q"]').contains("kategori").click();
    cy.get('a[class="chakra-button css-1piskbq"]').contains("tambah").click();

    cy.contains("button", "simpan").click();

    cy.get('div[role="alert"]').should("be.visible");
  });
});
